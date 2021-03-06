var SeasonGame = function(duration = 9000) {
  this.duration = duration;
  this.init();
};


SeasonGame.prototype.loadVegetable = function() {
  var selectedVegetable = this.vegetablesList[0];
  $('#vegetableImage').attr('src', 'images/FruitsVegetables/'+ selectedVegetable.img);
  $('#vegetableImage').attr('alt', selectedVegetable.name);
  $('#vegetableName').text(selectedVegetable.name);
  $(".foodGame").show();
  $('.answer').hide();
  $('.instructions').hide();
  $(".gameOver").hide();
  this.vegetablesList.splice(0,1);
  this.selectedVegetable = selectedVegetable;
};

SeasonGame.prototype.init = function () {

  var that = this;

  var isAnswerCorrect = function(){
    var points = that.selectedVegetable.difficultyRange;
    var seasonVal = $(this).attr("val");

    var isWinterCorrect = (sumOfArray(that.selectedVegetable.months,0,2)>=1);
    var isSpringCorrect = (sumOfArray(that.selectedVegetable.months,3,5)>=1);
    var isSummerCorrect = (sumOfArray(that.selectedVegetable.months,6,8)>=1);
    var isAutomnCorrect = (sumOfArray(that.selectedVegetable.months,9,11)>=1);

    if ((seasonVal === "winter" && isWinterCorrect) ||
    (seasonVal === "spring" && isSpringCorrect)  ||
    (seasonVal === "summer" && isSummerCorrect) ||
    (seasonVal === "automn" && isAutomnCorrect)) {
      console.log("You're a star");
      $('.answerWrong').hide();
      $('.answerRight').show();
      $('.answer').css('background-color','rgba(144, 238, 144, 1)');
      $('.vegetableName').text(that.selectedVegetable.name);
      $('.vegetableImage').attr('src', 'images/FruitsVegetables/'+ that.selectedVegetable.img);
      $('.correctSeason').text(that.selectedVegetable.season);
      that.score += points;
    }
    else {
      console.log("Too bad");
      $('.answerRight').hide();
      $('.answerWrong').show();
      $('.answer').css('background-color','rgba(251, 137, 137, 0.99)');
      $('.vegetableName').text(that.selectedVegetable.name);
      $('.vegetableImage').attr('src', 'images/FruitsVegetables/'+ that.selectedVegetable.img);
      $('.wrongMessage').text(_.sample(lose));
      $('.correctSeason').text(that.selectedVegetable.season);
    }

    $('.points').text(that.score);
    $('.answer').show();
    $('.next-button').show();
  };

  $(".seasonsOptions").click(isAnswerCorrect);
  $(".next-button").click(function(){
    that.loadVegetable();
  });
};

SeasonGame.prototype.play = function () {
    var timer = new Timer(this.duration,function(){
      $(".gameOver").show();
    });

    $(".seasonsOptions").click(timer.isPaused);

    this.score = 0;
    $('.points').text(this.score);
    this.vegetablesList = _.shuffle(vegetables);
    this.selectedVegetable = null;
    this.loadVegetable();

};


var sumOfArray = function(array,indexStart,indexEnd) {
  var sum = 0;
  for(var i = indexStart; i<=indexEnd; i++) {
    sum += array[i];
  }
  return sum;
};
