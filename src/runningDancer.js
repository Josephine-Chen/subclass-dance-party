var RunningDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  var dancers = ['runningDancer.gif', 'runningDancerLong.gif'];
  this.$node = $('<span class="runningDancer"><img src="src/' + dancers[Math.floor(Math.random() * dancers.length)] + '"></span>');
  Dancer.prototype.setPosition.call(this, top);
};

RunningDancer.prototype = Object.create(Dancer.prototype);
RunningDancer.prototype.constructor = RunningDancer;

RunningDancer.prototype.step = function() {
  //Dancer.prototype.step.call(this);
  var animateMe = function(targetElement, speed) {
    $(targetElement).css({
      right: 0
    });
    $(targetElement).animate({
      'right': $(document).width()
    }, {
      duration: speed,
      complete: function() {
        animateMe(this, speed);
      }
    });
  };
  animateMe($('.runningDancer'), 5000 * Math.random());
};

