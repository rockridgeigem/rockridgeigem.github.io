$(window).scroll(function(){
    var m = $(document).scrollTop();
    if(m > $(".nav-image-wrap").height()){
        $(".nav-image-wrap").addClass("minify");
        $(".nav-link").removeClass("nav-link_enlarge");
    }
    else{
        $(".nav-image-wrap").removeClass("minify");
        $(".nav-link").addClass("nav-link_enlarge");
    }
});