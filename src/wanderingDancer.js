var WanderingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  var dancers = ['wanderingDancer.gif', 'wanderingDancer2.gif'];
  this.$node = $('<div id="container>"<span class="wanderingDancer"><img src="src/' + dancers[Math.floor(Math.random() * dancers.length)] + '"></span></div>');
  this.top = top;
  this.left = left;
  // Dancer.prototype.setPosition.call(this, top, left);
};

WanderingDancer.prototype = Object.create(Dancer.prototype);
WanderingDancer.prototype.constructor = WanderingDancer;

WanderingDancer.prototype.step = function() {
  // Dancer.prototype.step.call(this);
  // this.$node.toggle();

  var makeNewPosition = function($container) {

    // Get viewport dimensions (remove the dimension of the div)
    $container = ($(window));
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

  };

  var animateDiv = function() {
    var $target = $('.wanderingDancer');
    var newq = makeNewPosition( $(window));
    //var oldq.top = $target.offset();
    //var speed = calcSpeed([this.top, this.left], newq);
    var speed = 5000;
    $('.wanderingDancer').animate({
      top: newq[0],
      left: newq[1]
    }, speed, function() {
      animateDiv();
    });

  };

  var calcSpeed = function(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.5;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;


  };
  $(document).ready(function() {
    animateDiv();
  });
};