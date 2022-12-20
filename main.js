function home(){
  window.location("https://www.google.com");
  window.location.href = "https://www.google.com";
}
function vol(){
  window.location("https://www.google.com");
  window.location.href = "https://www.google.com";
}
function donate(){
  window.location("https://www.google.com");
  window.location.href = "https://www.google.com";
}
function faq(){
  window.location("https://www.google.com");
  window.location.href = "https://www.google.com";
}



const ask = document.getElementById("ask");
const content = document.getElementById("form");
const text = document.getElementById("text");
var counter = 0;
function start(){
    document.getElementById("start").style.display = "none"
    document.getElementById("next").style.display = "initial"
    document.getElementById("back").style.display = "initial"
    document.getElementById("first").style.display = "initial"
    counter = 1
    $( "#progressbar" ).progressbar({
        value: 25
      });

}

function next(){
  if(counter == 1){
    document.getElementById("first").style.display = "none"
    document.getElementById("second").style.display = "initial"
    counter = 2;
    $( "#progressbar" ).progressbar({
      value: 50
    });
  }

  else if(counter == 2){
    document.getElementById("second").style.display = "none"
    document.getElementById("third").style.display = "initial"
    counter = 3;
    $( "#progressbar" ).progressbar({
      value: 75
    });
  }

  else if(counter == 3){
    document.getElementById("third").style.display = "none"
    document.getElementById("fourth").style.display = "initial"
    counter = 4;
    $( "#progressbar" ).progressbar({
      value: 100
    });
    document.getElementById("next").style.display = "none"
  }
}

function back(){
  if(counter == 1){
    document.getElementById("start").style.display = "initial"
    document.getElementById("next").style.display = "none"
    document.getElementById("back").style.display = "none"
    document.getElementById("first").style.display = "none"
    counter = 0
    $( "#progressbar" ).progressbar({
        value: 0
      });
  }
else if(counter == 2){
  document.getElementById("first").style.display = "initial"
  document.getElementById("second").style.display = "none"
  counter = 1
  $( "#progressbar" ).progressbar({
      value: 25
    });
}
else if(counter == 3){
  document.getElementById("second").style.display = "initial"
  document.getElementById("third").style.display = "none"
  counter = 2
  $( "#progressbar" ).progressbar({
      value: 50
    });
}
else if(counter == 4){
  document.getElementById("third").style.display = "initial"
  document.getElementById("fourth").style.display = "none"
  counter = 3
  $( "#progressbar" ).progressbar({
      value: 75
    });
    document.getElementById("next").style.display = "initial"
}}
