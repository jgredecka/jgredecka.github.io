// Function that opens side menu when toggle button is clicked.
function openNav() {
  document.getElementById("verticalMenu").style.width = "310px";
  document.getElementById("bodyText").style.marginLeft = "310px";
  document.getElementById("close-btn").style.display = "block";
}

// Function that closes side menu when close button is clicked.
function closeNav() {
  document.getElementById("verticalMenu").style.width = "0";
  document.getElementById("bodyText").style.marginLeft= "15px";
  document.getElementById("bodyText").style.marginRight= "15px";
}

// Function that displays/hides side menu depending on the viewport width.
function checkViewport(x) {
  if (x.matches) { // hide side navigation if media query matches
    document.getElementById("verticalMenu").style.width = "0";
    document.getElementById("bodyText").style.marginLeft= "15px";
    document.getElementById("bodyText").style.marginRight= "15px";
  } 
  else { // show side navigation otherwise
    document.getElementById("verticalMenu").style.width = "310px";
    document.getElementById("bodyText").style.marginLeft = "310px";
    document.getElementById("close-btn").style.display = "none";
  }
}

// Function for interactive education info text boxes.
function qmulShow() {
  var v = document.getElementById("qmulInfo")

  if (v.style.display === "none") {
    document.getElementById("bioInfo").style.backgroundColor = "#4287f5";
    document.getElementById("bioInfo").style.color = "white";
    document.getElementById("bioInfo").style.border = "1px solid #4287f5";
    document.getElementById("qmul-extend").style.display = "none";
    document.getElementById("qmul-collapse").style.display = "block";
    v.style.display = "block";
  }
  else {
    document.getElementById("bioInfo").style.backgroundColor = "#edeef0";
    document.getElementById("bioInfo").style.color = "black";
    document.getElementById("bioInfo").style.border = "1px solid #e0e0e0";
    document.getElementById("qmul-collapse").style.display = "none";
    document.getElementById("qmul-extend").style.display = "block";
    v.style.display = "none";
  }
}

function aruShow() {
  var w = document.getElementById("aruInfo")

  if (w.style.display === "none") {
    document.getElementById("bioMed").style.backgroundColor = "#4287f5";
    document.getElementById("bioMed").style.color = "white";
    document.getElementById("bioMed").style.border = "1px solid #4287f5";
    document.getElementById("aru-extend").style.display = "none";
    document.getElementById("aru-collapse").style.display = "block";
    w.style.display = "block";
  }
  else {
    document.getElementById("bioMed").style.backgroundColor = "#edeef0";
    document.getElementById("bioMed").style.color = "black";
    document.getElementById("bioMed").style.border = "1px solid #e0e0e0";
    document.getElementById("aru-collapse").style.display = "none";
    document.getElementById("aru-extend").style.display = "block";
    w.style.display = "none";
  }
}

function mrcShow() {
  var m = document.getElementById("mrcInfo")

  if (m.style.display === "none") {
    document.getElementById("mrc").style.backgroundColor = "#4287f5";
    document.getElementById("mrc").style.color = "white";
    document.getElementById("mrc").style.border = "1px solid #4287f5";
    document.getElementById("mrc-extend").style.display = "none";
    document.getElementById("mrc-collapse").style.display = "block";
    m.style.display = "block";
  }
  else {
    document.getElementById("mrc").style.backgroundColor = "#edeef0";
    document.getElementById("mrc").style.color = "black";
    document.getElementById("mrc").style.border = "1px solid #e0e0e0";
    document.getElementById("mrc-collapse").style.display = "none";
    document.getElementById("mrc-extend").style.display  = "block";
    m.style.display = "none";

  }
}

function isTouchDevice() {
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}