
document.addEventListener("DOMContentLoaded", function() {
  var barsButton = document.getElementById('bars');
  var menu2 = document.getElementById('manu2');

  barsButton.addEventListener("click", function() {
    if (menu2.style.display === "none") {
      menu2.style.display = "block";
    } else {
      menu2.style.display = "none";
    }
  });

  document.addEventListener("click", function(event) {
    if (
      event.target !== barsButton &&
      !menu2.contains(event.target)
    ) {
      menu2.style.display = "none";
    }
  });
});












// function myFunction() {
//     if (manu2.style.display === "none") {
//       manu2.style.display = "block";
//     } else {
//       manu2.style.display = "none";
//     }
//   };
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  }else {
    mybutton.style.display = "none";
  }
}
s
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
