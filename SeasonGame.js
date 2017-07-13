var SeasonGame = function() {
  this.vegetablesList = _.shuffle(vegetables);
  this.selectedVegetable = null;
  this.init();
  this.score = 0;
};

SeasonGame.prototype.init = function () {

  var that = this;
  $(".next-button").click(function() {
    var selectedVegetable = that.vegetablesList[0];
    $('#vegetableImage').attr('src', 'images/FruitsVegetables/'+ selectedVegetable.img);
    $('#vegetableImage').attr('alt', selectedVegetable.name);
    $('#vegetableName').text(selectedVegetable.name);
    that.vegetablesList.splice(0,1);
    that.selectedVegetable = selectedVegetable;
  });

  $(".seasonsOptions").click(function(){
    that.selectedVegetable.months;
    var points = that.selectedVegetable.difficultyRange;
    that.score;
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
            // setTimeout(function() { prompt("You're a star"); }, 1);
            that.score += points;
          }
          else {
            console.log("Too bad");
    }
    $('.points').text(that.score);
  });
};

var sumOfArray = function(array,indexStart,indexEnd) {
  var sum = 0;
  for(var i = indexStart; i<=indexEnd; i++) {
      sum += array[i];
  }
  return sum;
};