const axios = require('axios');

function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}
  
describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "http://localhost:3000" },
      { id: 2, url: "https://bibit-test.herokuapp.com" }
    ];

    const outputPublic = [{ id: 2, url: "https://bibit-test.herokuapp.com" }];
    const outputLocal = [{ id: 1, url: "http://localhost:3000" }];

    expect(filterByTerm(input, "bibit")).toEqual(outputPublic);
    expect(filterByTerm(input, "localhost")).toEqual(outputLocal);

  });
});

describe('check host omdb', () => {
  it('check the central host if given the return of success', async () => {
    const result = await axios.get(`https://www.omdbapi.com/?apikey=75adfa43&s=Justice League&page=1`)
    expect(result.status).toEqual(200)
  })
})

describe('GET@/detail', () => {
  it('should record to database,  and return the detail of movies with a status of 200', async () => {
    const result = await axios.get('https://bibit-test.herokuapp.com/detail/?title=america')
    // console.log("detail", result.data.message)
    expect(result.status).toEqual(200)
    expect(result.data.message).toEqual("recorded to database")
  })
});

describe('GET@/search', () => {
  it('should record to database,  and return the detail of movies with a status of 200', async () => {
    const result = await axios.get('https://bibit-test.herokuapp.com/search/?title=america&page=2')
    // console.log("detail", result.data.message)
    expect(result.status).toEqual(200)
    expect(result.data.message).toEqual("recorded to database")
  })
});