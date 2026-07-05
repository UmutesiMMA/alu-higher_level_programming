const $ = window.$;
const fetchedData = fetch(
  'https://swapi-api.hbtn.io/api/people/5/?format=json');
fetchedData
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.results.forEach((item) => {
      $('UL#list_movies').append(`<li>${item.title}</li>`);
    });
  });
