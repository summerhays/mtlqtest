---
---
const mq = window.matchMedia( "(min-width: {{ site.breakpoint }})" );
var obs1 = document.getElementById("intersectionObserver1");
var target1 = document.getElementById("special1");
var target2 = document.getElementById("special2");
var mybutton = document.getElementById("myBtn");
var y = document.getElementById("myNavbar");
var btn = document.getElementById("searchbutton");
var media = document.getElementById("media");

// Instead of using a calculation on scroll, this new backend (2021) uses intersectionObserver
let observer1 = new IntersectionObserver(callback1);
// start observing the target element
observer1.observe(obs1);

// Scroll to top button
function callback1(entries, observer1) {
	entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Show button
      mybutton.style.display = "none";
    } else {
      // Hide button
      mybutton.style.display = "block";
    }
  });
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Sticky navbar on widescreens
if (mq.matches) {
  let observer2 = new IntersectionObserver(callback2);
  observer2.observe(target1);

  function callback2(entries, observer2) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (y.classList.contains("sticky")) {
  	y.classList.add("return_color");
          y.classList.remove("sticky");
  	target2.classList.remove("stickyOffset");
        }
      } else {
          y.classList.remove("return_color");
  	y.classList.add("sticky");
  	target2.classList.add("stickyOffset");
      }
    });
  }
}
else {
  // When the user clicks on the button, toggle between hiding and showing the dropdown content
  function responsiveClick(id) {
   var x = document.getElementById(id);
   x.classList.toggle("show_block");
   var truth = x.previousElementSibling.firstChild.classList.contains('fa-caret-right')
   if (truth) {
      x.previousElementSibling.firstChild.className = "fa fa-caret-down";
   }
   if (!truth) {
      x.previousElementSibling.firstChild.className = "fa fa-caret-right";
   }
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
     var openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show_block')) {
      openDropdown.classList.remove('show_block');
      openDropdown.previousElementSibling.firstChild.className = "fa fa-caret-right";
      y = openDropdown.previousElementSibling.firstChild.className;
    }
   }
  }
 }
}


function respondBar() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function flipIcon () {
  var i = document.getElementById("flippy");
  var i2 = document.getElementById("flippy2");
  // Clear automatic routing of the homepage to a language
  var choice = null;
  localStorage.setItem('lang',choice)
  if (i2.classList.contains("searchy")) {
    i.classList.add("rotate-hor-center");
    const parsedUrl = new URL(window.location.href);
    var newstring = parsedUrl.pathname + "?q=";
    var newurl = new URL(i2.href);
    var param = parsedUrl.searchParams.get("q");
    newurl.searchParams.set('q',param);
    i2 = newurl;
    console.log(newurl); // "hi"
    setTimeout(function clicky() {window.location.replace(i2);}, 145);
  } else {
    i.classList.add("rotate-hor-center");
    setTimeout(function clicky() {window.location.replace(i2);}, 145);
  }
}

var unf = document.getElementById("unfold");
var sub = document.getElementById("searchsubmit");
var inp = document.getElementById("inputsearch");
var form = document.getElementById("formy");
function unfoldSearch () {
  unf.classList.add("hide");
   if (sub.classList.contains("hide")) {
  unf.classList.remove("show");
  sub.classList.remove("hide");
  inp.classList.remove("input_narrow");
  inp.classList.remove("input_hide");
   }
  sub.classList.add("show");
  inp.classList.add("input_show");
  inp.focus();
}

function foldSearch () {
  setTimeout(function foldy() {
    if (sub.classList.contains("show")) {
      sub.classList.remove("show");
      inp.classList.remove("input_show");
      unf.classList.remove("hide");
    }
    unf.classList.add("show");
    sub.classList.add("hide");
    inp.classList.add("input_narrow");
    setTimeout(function () {
      inp.classList.add("input_hide");
    }, 350);
  }, 100);
}
