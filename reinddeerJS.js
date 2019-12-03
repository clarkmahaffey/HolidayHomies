$(document).ready(function() {
  animateDeer("#a");
  animateDeer("#b");
  animateDeer("#c");
  animateDeer("#d");
  animateDeer("#e");
  animateDeer("#f");
  animateDeer("#g");
  animateDeer("#h");
  animateDeer("#i");
    

});

function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  var h = 450;
  var w = 1000;

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
document.getElementById("demo").innerHTML = "Get all the reindeer to Santa's Sleigh: " + count;
function functionA() { 
	document.getElementById("a").style.display="none";
    count = count + 1;
    document.getElementById("demo").innerHTML = "Get all the reindeer to Santa's Sleigh: " + count;
    if (count > 8) {
        youWin()
    }
}
function functionB() { 
	document.getElementById("b").style.display="none";
    count = count + 1;
    document.getElementById("demo").innerHTML = "Get all the reindeer to Santa's Sleigh: " + count;
    if (count > 8) {
        youWin()
    }
}
function functionC() { 
	document.getElementById("c").style.display="none";
    count = count + 1;
    document.getElementById("demo").innerHTML = "Get all the reindeer to Santa's Sleigh: " + count;
    if (count > 8) {
        youWin()
    }
}
function functionD() { 
	document.getElementById("d").style.display="none";
    count = count + 1;
    document.getElementById("demo").innerHTML = "Get all the reindeer to Santa's Sleigh: " + count;
    if (count > 8) {
        youWin()
    }
}
function functionE() { 
	document.getElementById("e").style.display="none";
    count = count + 1;
    document.getElementById("demo").innerHTML = "Get all the reindeer to Santa's Sleigh: " + count;
    if (count > 8) {
        youWin()
    }
}
function functionF() { 
	document.getElementById("f").style.display="none";
    count = count + 1;
    document.getElementById("demo").innerHTML = "Get all the reindeer to Santa's Sleigh: " + count;
    if (count > 8) {
        youWin()
    }
}
function functionG() { 
	document.getElementById("g").style.display="none";
    count = count + 1;
    document.getElementById("demo").innerHTML = "Get all the reindeer to Santa's Sleigh: " + count;
    if (count > 8) {
        youWin()
    }
}
function functionH() { 
	document.getElementById("h").style.display="none";
    count = count + 1;
    document.getElementById("demo").innerHTML = "Get all the reindeer to Santa's Sleigh: " + count;
    if (count > 8) {
        youWin()
    }
}
function functionI() { 
	document.getElementById("i").style.display="none";
    count = count + 1;
    document.getElementById("demo").innerHTML = "Get all the reindeer to Santa's Sleigh: " + count;
    if (count > 8) {
        youWin()
    }
}
function youWin() {
    document.body.style.backgroundImage = "url('winScreen-01.png')";
}
