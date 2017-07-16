
$(document).ready(function() {
  $(".foodGame").hide();
  $(".answer").hide();
  $(".gameOver").hide();
  var game = new SeasonGame(60000);
  $(".start-button").click(function(){
    game.play();
  });
  $(".replay").click(function(){
    game.play();
  });
});
