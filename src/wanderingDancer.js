var WanderingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  //var dancers = ['wanderingDancer.gif', 'wanderingDancer2.gif'];
  this.$node = $('<div id="container>"<span class="wanderingDancer"><img src="src/wanderingDancer.gif"></span></div>');
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
    var newq = makeNewPosition( $(window));
    var speed = 5000;
    $('.wanderingDancer').animate({
      top: newq[0],
      left: newq[1]
    }, speed, function() {
      animateDiv();
    });

  };

  $(document).ready(function() {
    animateDiv();
  });
};