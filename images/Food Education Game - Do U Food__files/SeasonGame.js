var SeasonGame = function() {
  this.vegetablesList = _.shuffle(vegetables);
  this.selectedVegetable = null;
  this.init();
  this.score;
};

var sumOfArray = function(array,indexStart,indexEnd) {
  var sum = 0;
  for(var i = indexStart;i<=indexEnd;i++){
      sum += array[i];
  }
  return sum;
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
    var seasonVal = $(this).attr("val");

    var isWinterCorrect = (sumOfArray(that.selectedVegetable.months,0,2)>=1);
    // if (isWinterCorrect) {
    //   if (seasonVal === "winter") {
    //     console.log("You're a star");
    //   }
    //   else {
    //     console.log("Too bad");
    //   }
    // }
    //
    var isSpringCorrect = (sumOfArray(that.selectedVegetable.months,3,5)>=1);
    // if (isSpringCorrect) {
    //   if (seasonVal === "spring") {
    //     console.log("You're a star");
    //   }
    //   else {
    //     console.log("Too bad");
    //   }
    // }
    //
    var isSummerCorrect = (sumOfArray(that.selectedVegetable.months,6,8)>=1);
    // if (isSummerCorrect) {
    //   if (seasonVal === "summer") {
    //     console.log("You're a star");
    //   }
    //   else {
    //     console.log("Too bad");
    //   }
    // }
    //
    var isAutomnCorrect = (sumOfArray(that.selectedVegetable.months,9,11)>=1);
    // if (isAutomnCorrect) {
    //   if (seasonVal === "automn") {
    //     console.log("You're a star");
    //   }
    //   else {
    //     console.log("Too bad");
    //   }
    // }

    if ((seasonVal === "winter" && isWinterCorrect) ||
          (seasonVal === "spring" && isSpringCorrect)  ||
          (seasonVal === "summer" && isSummerCorrect) ||
          (seasonVal === "automn" && isAutomnCorrect)) {
            console.log("You're a star");
          }
          else {
            console.log("Too bad");
    }
  });


};


SeasonGame.prototype.play = function () {

};



  // The user clicks on the associated season and gets points depending on how right he is. He can be :
  // - right 100% (there is only 1 season and he gets it right or there are 2 to 4 right seasons and he gets 1 right)
  // - right 50% (there are 1 or more full season(s) and he picks a month in an uncomplete season)
  // - right 0% (he doesn't select a right month)


  function choseSeason (){



  }

  // The user clicks on the associated season and gets points depending on how right he is. He can be :

  function correctAnswer(){

  }
