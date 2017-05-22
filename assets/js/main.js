function borrarPics(){
  var borraPic1 = document.getElementById("pic1");
  var borraPic2 = document.getElementById("pic2");
  var borraPic3 = document.getElementById("pic3");
  var borraPic4 = document.getElementById("pic4");

  if (borraPic1.style.display === "block")
    borraPic1.style.display = "none";
 else if(borraPic2.style.display === "block")
    borraPic2.style.display = "none";
 else if(borraPic3.style.display === "block")
    borraPic3.style.display = "none";
else(borraPic4.style.display === "block")
    borraPic4.style.display = "none";
}



function origin(){
    var showMe = document.getElementById("left");
    if (showMe.style.display === "block") 
        showMe.style.display = "none";
    else        showMe.style.display = "block";
    
}

function extinction(){
    var showMe = document.getElementById("right");
    if (showMe.style.display === "block") {
        showMe.style.display = "none";
    }else{
        showMe.style.display = "block";
    }
}

function restore(){
    document.getElementById("pic1").style.display="block";
    document.getElementById("pic2").style.display="block";
    document.getElementById("pic3").style.display="block";
    document.getElementById("pic4").style.display="block";
}