$(document).ready(function () {
  $("header").load("../partials/header.html");
  $("footer").load("../partials/footer.html");
 
});

$(document).on('click', '[data-toggle="show"]', function (event) {
  event.preventDefault()
  var target = $(this).data('target')
  $(target).toggleClass('show')
})

$(function () {
  var options = {
    offset: 50
  }
  var myElement = document.querySelector("header");
  var headroom  = new Headroom(myElement, options);
  headroom.init();
});

