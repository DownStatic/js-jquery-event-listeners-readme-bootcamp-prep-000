//define functions here

function getIt(){
  $('p').on("click", function(){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on("load", function(){
    $('img').append("<class='tasty'/>")
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
  $('form').on("submit", function(){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()
submitIt()
});
