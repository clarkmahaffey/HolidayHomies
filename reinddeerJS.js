$(document).ready(function() {
  animateDeer("#a");
  animateDeer("#b");
  animateDeer("#c");
  animateDeer("#d");
    

});

function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDeer(myclass) {
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 2000, function() {
    animateDeer(myclass);
  });
}

var count = 0;
function functionA() { 
	document.getElementById("a").style.display="none";
    count = count + 1;
}
function functionB() { 
	document.getElementById("b").style.display="none";
    count = count + 1;
}
function functionC() { 
	document.getElementById("c").style.display="none";
    count = count + 1;
}
function functionD() { 
	document.getElementById("d").style.display="none";
    count = count + 1;
}
