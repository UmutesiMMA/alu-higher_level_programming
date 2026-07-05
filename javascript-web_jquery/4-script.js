const $ = window.$;

$('div#toggle_headerr').click(() => {
  $('header').toggleClass('red green');
});
