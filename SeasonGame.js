var SeasonGame = function() {
  this.vegetablesList = _.shuffle(vegetables);
  this.selectedVegetable = null;
  this.score = 0;
  this.init();
};

// SeasonGame.prototype.init = function () {
//
//   var time = Date.now();
//   var running = setInterval(run, 10);
//
//   setTimeout(function() {
//     clearInterval(running);
//     alert('Game over!');
//   }, 30000);

  var that = this;

  var loadVegetable = function() {
    var selectedVegetable = that.vegetablesList[0];
    $('#vegetableImage').attr('src', 'images/FruitsVegetables/'+ selectedVegetable.img);
    $('#vegetableImage').attr('alt', selectedVegetable.name);
    $('#vegetableName').text(selectedVegetable.name);
    $(".foodGame").show();
    $('.answer').hide();
    $('.instructions').hide();
    that.vegetablesList.splice(0,1);
    that.selectedVegetable = selectedVegetable;
  };

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
      that.score += points;
    }
    else {
      console.log("Too bad");
      $('.answerRight').hide();
      $('.answerWrong').show();
    }
    $('.points').text(that.score);
    $('.answer').show();
    $('.next-button').show();
  };

  $(".start-button").click(loadVegetable);
  $(".seasonsOptions").click(isAnswerCorrect);
  // setTimeout(function() { prompt("You're a star"); }, 1);
  $(".next-button").click(loadVegetable);
};



var sumOfArray = function(array,indexStart,indexEnd) {
  var sum = 0;
  for(var i = indexStart; i<=indexEnd; i++) {
    sum += array[i];
  }
  return sum;
};
