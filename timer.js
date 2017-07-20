
function Timer (time,callback) {
  this.time = time;
  var that = this;
  this.interval = setInterval(function(){
    if(!that.isPaused){
      that.time -= 100;
      // clearInterval(that.time);
    }
    $(".timer").text(millisecondsToMinAndSec(that.time));
    if (that.time <=0){
      callback();
      clearInterval(that.interval);
    }
  },100);
  this.isPaused = false;
  // var setPause = function(isPaused){
  //   $(".seasonsOptions").click(this.isPaused);
  // };
}

Timer.prototype.setPause = function(isPaused) {
  this.isPaused = isPaused;
};



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
