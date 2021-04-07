require('dotenv').config();
const axios = require('axios'),
    client = require('../middleware/database'),
    d = new Date();

async function Search(req, res, next){
    let url = `${process.env.HOST}/?apikey=${process.env.KEY}&s=${req.query.title}`,
        parameter = `s=${req.query.title}`;

    if (req.query.page) {
        url = `${process.env.HOST}/?apikey=${process.env.KEY}&s=${req.query.title}&page=${req.query.page}`;
        parameter = `s=${req.query.title}&page=${req.query.page}`
    }

    client.query(`INSERT INTO public.log(date, endpoint, parameter) VALUES ('${d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes()}', '/search', '${parameter}');`, (err, res) => {
        if (err) {
            // console.error(err);
            return;
        }
        console.log('Data insert successful');
        // client.end();
    });

    try {
        let result = await axios.get(url)
        // console.log(result.data)
        res.status(200).json({status: 200, message: "recorded to database",data: result.data})
    } catch (error) {
        console.log(error)
    }
}

async function Detail(req, res, next){
    console.log(req.query)
    client.query(`INSERT INTO public.log(date, endpoint, parameter) VALUES ('${d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes()}', '/detail', '${req.query.title}');`, (err, res) => {
        if (err) {
            // console.error(err);
            return;
        }
        console.log('Data insert successful');
        // client.end();
    });
    try {
        let result = await axios.get(`${process.env.HOST}/?apikey=${process.env.KEY}&t=${req.query.title}`)
        // console.log(result.data)
        res.status(200).json({status: 200, message: "recorded to database", data: result.data})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    Search,
    Detail
}