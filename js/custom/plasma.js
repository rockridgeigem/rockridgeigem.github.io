/*var $dataName, $images, $ori, $hobbies, $positionProj, $whyIgem;
var $plasmidFlash;

$(function(){
    $dataName = "";
    $plasmidFlash = $("#plasmid-overlay-text");
    $images = {
        "Varun": "/images/team/plas/varun.png",
        "Shrunal": "/images/team/plas/shrunal.png",
        "Vignesh": "/images/team/plas/viggy.png"
    };
    $ori = {
        "Varun" : "Varun Kulkarni.  Born in India, Junior at RRH",
        "Vignesh": "Vignesh Valaboju, Graduating to UVa in 2017, From Ashburn, VA",
    };
    $hobbies = {
        "Varun" : "Programming, Tennis, and Being Awesome",
        "Vignesh": "Playing Soccer; Synbio and Math; Watching Sports; Wasting time on social media"
    };
    $positionProj = {
        "Varun" : "iGEM's Lead Tech Specialist and Web Designer, Contributed to the Trojan Phage",
        "Vignesh": "Lyme Disease Living Vaccine"
    };
    $whyIgem = {
        "Varun" : "I joined iGEM because I've been interested in applied biology integrated with technology, which sounds just like iGEM",
        "Vignesh": "I joioned iGEM because Synthetic Biology has always interested me and through the club I've been able to learn more about a fascinating subject, meet new people across the globe, and meet with various scientists and learn about their work!"
    };
    //$plasmidFlash.css("background", "#000000");
    // $plasmidFlash.hidden = true;

});

function fixBlankShowText(){
  if($plasmidFlash.text() === ""){
    $plasmidFlash.hide();
  }else{
    $plasmidFlash.show();
  }
}

function clickHandlerFace(){
  $("#deltaImg").attr("src", $images[$dataName]);
  $plasmidFlash.hide();
  $plasmidFlash.text("");
}
function clickHandlerHobby(){
  $plasmidFlash.text($hobbies[$dataName]);
  fixBlankShowText();

}
function clickHandlerOri(){
  $plasmidFlash.text($ori[$dataName]);
  fixBlankShowText();

}
function clickHandlerPosition(){
  $plasmidFlash.text($positionProj[$dataName]);
  fixBlankShowText();

}
function clickHandlerWhy(){
  $plasmidFlash.text($whyIgem[$dataName]);
  fixBlankShowText();

}

$("#faces-layer img").click(function(){
  $dataName = $(this).data('name');
  clickHandlerFace();
});
$("#area-hobbies").click(function(event){
  event.preventDefault();
  clickHandlerHobby();
});
$("#area-ori").click(function(event){
  event.preventDefault();
  clickHandlerOri();
});
$("#area-position").click(function(event){
  event.preventDefault();
  clickHandlerPosition();
});
$("#area-why").click(function(event){
  event.preventDefault();
  clickHandlerWhy();
});
*/