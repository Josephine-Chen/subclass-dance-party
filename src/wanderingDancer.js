var WanderingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  var dancers = ['wanderingDancer.gif', 'wanderingDancer2.gif'];
  this.$node = $('<div id="container>"<span class="wanderingDancer"><img src="src/' + dancers[Math.floor(Math.random() * dancers.length)] + '"></span></div>');
  // Dancer.prototype.setPosition.call(this, top, left);
  this.left = left;
  this.top = top;
};

WanderingDancer.prototype = Object.create(Dancer.prototype);
WanderingDancer.prototype.constructor = WanderingDancer;

WanderingDancer.prototype.step = function() {
  // Dancer.prototype.step.call(this);
  // this.$node.toggle();

  $(document).ready(function() {
    animateDiv();

  });

  function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    $container = ($container || $(window))
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

  }

  function animateDiv() {
    var $target = $('.wanderingDancer');
    var newq = makeNewPosition($target.parent());
    //var oldq.top = top;
    //var oldq.left = left;
    var speed = calcSpeed([this.top, this.left], newq);

    $('.wanderingDancer').animate({
      top: newq[0],
      left: newq[1]
    }, speed, function() {
      animateDiv();
    });

  };

  function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.5;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

  }
};