
/*$(document).ready(function(){
   $(".nav-link").addClass("nav-link_enlarge");
});*/
$(window).scroll(function(){
    var m = $(document).scrollTop();
    console.log(m);
    if(m > ($(".nav-image-wrap").height() / 1.3)){
        $(".nav-image-wrap").addClass("minify");
        $(".nav-link").removeClass("nav-link_enlarge");
    }
    else{
        $(".nav-image-wrap").removeClass("minify");
        $(".nav-link").addClass("nav-link_enlarge");
    }
});