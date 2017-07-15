
function Timer (time,callback) {
  this.time = time;
  var that = this;
  this.interval = setInterval(function(){
    that.time -= 100;
    $(".timer").text(millisecondsToMinAndSec(that.time));
    if (that.time <=0){
      callback();
      clearInterval(that.interval);
    }
  },100);
  this.pause = function() {
    clearInterval(that.time);
  };
}

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
