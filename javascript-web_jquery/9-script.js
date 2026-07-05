const $ = window.$;
const fetchedData = fetch('https://fourtonfish.com/hellosalut/?lang=fr');
fetchedData
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    $('div#hello').append(data.hello);
  });
