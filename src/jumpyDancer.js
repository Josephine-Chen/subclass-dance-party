var JumpyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="jumpyDancer"><img src="src/jumpyDancer.gif"></span>');
  Dancer.prototype.setPosition.call(this, top, left);
};

JumpyDancer.prototype = Object.create(Dancer.prototype);
JumpyDancer.prototype.constructor = JumpyDancer;

JumpyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var doBounce = function(element, times, distance, speed) {
    for (i = 0; i < times; i++) {
      element.animate({
        marginTop: '-=' + distance
      }, speed)
        .animate({
          marginTop: '+=' + distance
        }, speed);
    }
  };
  $('.jumpyDancer').click(function() {
    doBounce($(this), 20, 50 * Math.random(), 300);
  });
};