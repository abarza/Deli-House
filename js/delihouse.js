$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

$(document).ready(function(){
    //$('.home').height($(window).height());
    //$('.nosotros').height($(window).height());
    //$('.productos').height($(window).height());
    //$('.otros-productos').height($(window).height());
    //$('.contacto').height($(window).height());
    //$('#sidebar').height($(window).height());


});

function navDiagonal(){
    // If it's an iPhone..
    if( (navigator.platform.indexOf("iPhone") != -1)
        || (navigator.platform.indexOf("iPod") != -1))
         window.open("maps://maps.google.com/maps?daddr=-36.826634,-73.041304&amp;ll=");
    else
         window.open("http://maps.google.com/maps?daddr=-36.826634,-73.041304&amp;ll=");
}



