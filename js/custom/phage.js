
var $plasmid = $("#combined");
var $phage = $("#phage");
var $pipetter = $("#pipetter");
var $images = $("#cell-land img");

var $urls = [
    "/images/phage/Cell.svg",
    "/images/phage/Cell1.svg",
    "/images/phage/Cell2.svg",
    "/images/phage/Cell3.svg",
    "/images/phage/Cell4.svg",
    "/images/phage/Cell5.svg",
    "/images/phage/Cell6.svg",
    "/images/phage/Cell7.svg"
]
var $delt = new Image();
var $chg = 0;
$(document).ready(function(){
    /**Set up parallax elements**/
    $(window).stellar({
        horizontalScrolling: false,
        verticalScrolling: true,
        horizontalOffset: 0,
        verticalOffset: 0,
        parallaxBackgrounds: true,
        parallaxElements: true,
        responsive: true
    }); 

    //$images.attr("src", "/images/phage/Cell7.svg");
    //setInterval(fadeShift(), 1000);
    var scene = document.getElementById("phage-transport");
    var parallax = new Parallax(p);
    
    
    
});

setInterval("fadeShift()", 400);  

function fadeShift(){
    //console.log("a");
    if($chg < $urls.length){
        $images.attr("src", $urls[$chg]);
        $chg++;
    }
    else{
        $chg = 0;
    }
    //$delt.src = "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjN8tbStP7SAhXDPiYKHaNVCkcQjRwIBw&url=https%3A%2F%2Fwww.hello.com%2F&bvm=bv.151325232,d.amc&psig=AFQjCNHVzvyLdbqBK6xLvYd1bL5mFtaaTg&ust=1490969578331520";
    /*if($chg < $urls.length){
        alert("shift");
    }*/
}