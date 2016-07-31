$(window).scroll(function(){
    var chg = $(window).scrollTop() % Math.PI;
    chg /= 2    ;
    $("#gear-1").css({
        transform: 'rotate(' + chg + 'rad)'
    });
    $("#gear-2").css({
        transform: 'rotate(' + (-chg) + 'rad)'
    });
    $("#plas").css({
        transform: 'rotate(' + chg + 'rad)'
    });
});