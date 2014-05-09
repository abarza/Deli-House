$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

$(document).ready(function(){
    $('.home').height($(window).height());
    $('.nosotros').height($(window).height());
    $('.productos').height($(window).height());
    $('.otros-productos').height($(window).height());

});


