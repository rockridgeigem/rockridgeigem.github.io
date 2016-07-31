$(document).ready(function(){
    var localName;
    var teamImage = {
        "vignesh": "../../images/team/plas-pics/vignesh_valaboju.png",
        "shrunal": "../../images/team/plas-pics/shrunal_pothagoni.png",
        "uday": "../../images/team/plas-pics/uday_sidhu.png",
        "saavage": "../../images/team/igem_Saavage2.png",
        "varun": "../../images/team/plas-pics/varun_kulkarni.png",
        "gwyn": "../../images/team/plas-pics/gwyn_schloer.png"
        
    };
    
    
    
    $("#faces-bank img").click(function(){
        localName = $(this).data('name');
        if($("#plas-text-container").is(":visible")){
            $("#plas-text-container").hide();
        }
        $("#delta_image").attr("src", teamImage[localName]);
    });
    
    $("#pRoj_text").click(function(e){
        e.preventDefault();
        $("#plasmid-text").html("Content for project (click text to hide)");
        $("#plas-text-container").show();
    });
    $("#proj").click(function(e){
        e.preventDefault();
        $("#plasmid-text").html("Content for project (click text to hide)");
        $("#plas-text-container").show();
    });
    
    $("#plasmid-text").click(function(e){
        if($("#plas-text-container").is(":visible")){
            $("#plas-text-container").hide();
        }
    });
});

