
function Timer (time,callback) {
  this.time = time;
  var that = this;
  this.interval = setInterval(function(){
    that.time -= 100;
    if(that.isPaused){
      clearInterval(that.time);
    }
    $(".timer").text(millisecondsToMinAndSec(that.time));
    if (that.time <=0){
      callback();
      clearInterval(that.interval);
    }
  },100);
  this.isPaused = false;
  var setPause = function(isPaused){
    $(".seasonsOptions").click(this.isPaused);
  };
}


// - Propriété `this.isPaused` de `Timer` par défaut à `false`
// - méthode `setPause = function(isPaused)` qui permet de mettre en pause ou non le timer
// - Je rajouterai une condition `if (that.isPaused)` quand tu fais `that.time -= 100`

function millisecondsToMinAndSec(time) {
    var min = Math.floor(time/1000/60);
    var sec = Math.floor(time/1000%60);
    if (sec<10) {
    return min + ":0" + sec;
  }
  else {
    return min + ":" + sec;
  }
}
//
// function pauseTimer() {
//   clearInterval(that.time);
// }
