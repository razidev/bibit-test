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