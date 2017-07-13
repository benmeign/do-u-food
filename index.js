
// var game = new SeasonGame();

$(document).ready(function() {
  $(".foodGame").hide();
  $(".answer").hide();
  $(".gameOver").hide();
  var game = new SeasonGame(20000);
  $(".start-button").click(function(){
    game.play();
  });
  $(".replay").click(function(){
    game.play();
  });

});
