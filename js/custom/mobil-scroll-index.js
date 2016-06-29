$(window).scroll(function(){
    var chg = $(window).scrollTop() % Math.PI;
    chg /= 2;
    $("#gear-1").css({
        transform: 'rotate(' + chg + 'rad) translate(50%, 0)'
    });
    
});