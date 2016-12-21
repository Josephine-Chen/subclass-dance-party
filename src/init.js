$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    if (dancerMakerFunctionName === 'startRace') {
      for (var i = 0; i < 10; i++) {
        var dancer = new RunningDancer(i * 100, 0, Math.random() * 1000);
        $('body').append(dancer.$node);
      }
    }
    if (dancerMakerFunctionName === 'lineUp') {
      for (var i = 0; i < window.dancers.length; i++) {
        Dancer.prototype.lineUp.call(window.dancers[i]);
        //window.dancers[i].prototype.lineUp();
      }
    }
    if (dancerMakerFunctionName === 'WanderingDancer') {
      var dtop = ($('body').height() - 500) * Math.random();
      var dleft = ($('body').width() - 500) * Math.random();
      var dancer = new WanderingDancer(dtop, dleft, Math.random() * 1000);
      $('body').append(dancer.$node);
      window.dancers.push(dancer);
      for (var i = 0; i < window.dancers.length; i++) {
        var top = window.dancers[i].top;
        var left = window.dancers[i].left;
        var dist = Math.sqrt((dtop - top) ** 2 + (dleft - left) ** 2);
        console.log(dist);
        if (dist > 100) {
          console.log('flipped');
          console.log(dancer.$node);
          dancer.$node.html('<div id="container>"<span class="wanderingDancer"><img src="src/wanderingDancer2.gif"></span></div>');
        }
      }
    } else {
      var dancer = new dancerMakerFunction(
      ($('body').height() - 500) * Math.random(),
      ($('body').width() - 500) * Math.random(),
      Math.random() * 1000);
      $('body').append(dancer.$node);
      window.dancers.push(dancer);
    }
  });
});

