$(document).ready(function(){
    var dataName = "";
    var images = {
        "Varun": "../../images/team/plas/varun.png",
        "Gwyn": "../../images/team/plas/gwyn.png",
        "Katarina": "../../images/team/plas/kat.png",
        "Shrunal": "../../images/team/plas/shrunal.png",
        "Uday": "../../images/team/plas/uday.png",
        "Vignesh": "../../images/team/plas/viggy.png"
    };
    var ori = {
        "Varun" : "Varun Kulkarni.  Born in India, Junior at RRH"
    }
    var hobbies = {
        "Varun" : "Programming, Tennis, and Being Awesome"
    }
    var positionProj = {
        "Varun" : "iGEM's Lead Tech Specialist and Web Designer, Contributed to the Trojan Phage"
    }
    var whyIgem = {
        "Varun" : "I joined iGEM because I've been interested in applied biology integrated with technology, which sounds just like iGEM"
    }
    $("#faces img").click(function(){
        dataName = $(this).data('name');
        $("#plasmid-container img").attr("src", images[dataName]);
        $("#plasmid-flash").hide();
        $("#plasmid-flash").text("");
    });
    
    
    
    $("#area-hobbies").click(function(){
        $("#plasmid-flash").text(hobbies[dataName]);
        $("#plasmid-flash").show();
    });
    $("#area-ori").click(function(){
        $("#plasmid-flash").text(ori[dataName]);
        $("#plasmid-flash").show();
    });
    $("#area-position").click(function(){
        $("#plasmid-flash").text(positionProj[dataName]);
        $("#plasmid-flash").show();
    });
    $("#area-why").click(function(){
        $("#plasmid-flash").text(whyIgem[dataName]);
        $("#plasmid-flash").show();
    });
});