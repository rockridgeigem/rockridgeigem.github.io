var $dataName, $images, $ori, $hobbies, $positionProj, $whyIgem;
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
        "Varun" : "Varun Kulkarni.  Born in India, Junior at RRH"
    };
    $hobbies = {
        "Varun" : "Programming, Tennis, and Being Awesome"
    };
    $positionProj = {
        "Varun" : "iGEM's Lead Tech Specialist and Web Designer, Contributed to the Trojan Phage"
    };
    $whyIgem = {
        "Varun" : "I joined iGEM because I've been interested in applied biology integrated with technology, which sounds just like iGEM"
    };
    $plasmidFlash.hide();
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
