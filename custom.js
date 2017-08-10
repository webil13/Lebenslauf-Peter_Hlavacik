// ScrollFire init
var options = [{
    selector: '#staggered-test',
    offset: 200,
    callback: function(el) {
      Materialize.showStaggeredList($(el));
    }
  },
  {
    selector: '.profil-img',
    offset: 150,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  },
];
Materialize.scrollFire(options);


$(document).ready(function() {
  $('.scrollspy').scrollSpy();
  $('.modal').modal();
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.button-collapse').sideNav();
});
