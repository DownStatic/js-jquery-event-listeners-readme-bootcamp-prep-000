//define functions here

function getIt(){
  $('p').on("click", function(){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on("load", function(){
    $('img').append(".tasty")
  })
}

function pressIt(){
  $('form').on("keydown", function(key){
    if (key.key == G){
      alert("You have pressed the G key!")
    }
  })
}

function submitIt(){
  
}

$(document).ready(function(){



});
