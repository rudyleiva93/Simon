var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keydown(function() {

  if(!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

});

$(".btn").click(function() {

  var userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  console.log(userClickedPattern);

  if(gamePattern.length === userClickedPattern.length){
    checkAnswer(userClickedPattern[userClickedPattern.length - 1]);
    userClickedPattern.length = 0;
    nextSequence();
  }

});


function nextSequence() {

  level++;
  $("#level-title").html("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor =  buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

  console.log(gamePattern);

}

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

}

function checkAnswer(currentlevel) {

  if(currentlevel === gamePattern[gamePattern.length - 1]){
    for(var i = 0; i < gamePattern.length - 1; i++){
      if(gamePattern[i] === userClickedPattern[i]){
        console.log("success");
      }
    }

    console.log("success");
  }
  else{
    console.log("wrong");
  }

 }
