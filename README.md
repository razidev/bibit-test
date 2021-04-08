**THE ANSWER OF THE ASSESMENT**

1. _Simple Database Query_:
```js
    SELECT B."ID", B."UserName", A."UserName" AS "ParentUserName" FROM "USER" A RIGHT JOIN (SELECT "ID", "UserName", "Parent" FROM "USER") AS B ON A."ID" = B."Parent";
```


2. _OMDB API_
  - npm i : install semua package/modul dr nodejs
  - create database terlebih dahulu di postgresql dengan nama database sesuai di .env "DATABASE_POSTGRES" dan table sudah terbuat otomatis jika aplikasi dijalankan dan log tersimpan didatabase jika API di hit
  - npm start: untuk menjalankan API dengan 2 API
    + localhost = localhost:3000
    + publichost = bibit-test.herokuapp.com

    - [GET] http://{localhost / publichost}/detail/?title={JUDUL_FILM} = {JUDUL_FILM} untuk melihat detail film berdasarkan judul film. contoh : https://bibit-test.herokuapp.com/detail/?title=america
    - [GET] http://{localhost / publichost}/search/?title={JUDUL_FILM} = {JUDUL_FILM} untuk mensearching berdasarkan judul film dan menampilakn seluruh judul film yang berkaitan. contoh: https://bibit-test.herokuapp.com/search/?title=america
    - [GET] http://{localhost / publichost}/search/?title={JUDUL_FILM}&page={PAGE} = {JUDUL_FILM} untuk mensearching berdasarkan judul film dan menampilakn seluruh judul film yang berkaitan dan gunakan {PAGE} untuk melihat judul dihalaman selanjutnya. contoh : https://bibit-test.herokuapp.com/search/?title=america&page=2
  - npm test :  untuk menjalankan unit test (JEST)


3. _Refactor Code_
```js
function findFirstStringInBracket(str){
  if(str.length > 0){
    let indexFirstBracketFound = str.indexOf("(");
    let indexLastBracketFound = str.indexOf(")");
    if(indexFirstBracketFound >= 0 && indexLastBracketFound >= 0){
      let word = str.substr(1).substr(indexFirstBracketFound)
      return word.substr(0, word.indexOf(")"));
    }else{
      return '';
    }
  }else{
    return '';
  }
}
```
link koding bisa akses [disini](https://repl.it/@razisyahputro/RefactorCode)


4. _Anagram_
```js
const words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'], collect = [];

function sorting(str) {
  if (!str) {
    return;
  }
  return str.split('').sort().join('');
}

function Anagram(words) {
  const anagrams = {};
  words.forEach((word) => {
    const sortedWord = sorting(word);
    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(word);
    }
    anagrams[sortedWord] = [word];
  });
  for (const sortedWord in anagrams) {
    collect.push(anagrams[sortedWord])
  }
  return collect;
}

console.log(Anagram(words));
```
link koding bisa akses [disini](https://repl.it/@razisyahputro/Anagram)