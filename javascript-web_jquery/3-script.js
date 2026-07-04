const $ = window.$;
$(document).ready(() => {
  $('div#red_header').click(() => {
    $('header').addClass('red');
  });
});
