//  controller for text slider //

var slider = document.getElementById('slider');
var active = document.getElementById('active');
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');

line1.addEventListener('click', function() {
  slider.style.transform = 'translate(0)';
  active.style.top='0px';
});

line2.addEventListener('click', function() {
  slider.style.transform = 'translate(-33.33%)';
  active.style.top='106.66px';
});

line3.addEventListener('click', function() {
  slider.style.transform = 'translate(-66.66%)';
  active.style.top='213.33px';
});

// for progress barr //
const progText = document.querySelectorAll(".progText");
const progress = document.querySelectorAll(".progress");
const progContainer = document.querySelector(".skills");
let bol = false;

window.addEventListener("scroll", function() {
  if (pageYOffset > progContainer.offsetTop - 600 && !bol) {
    for (let i = 0; i < progText.length; i++) {
      let count = 0;
      progress[i].style.height = "100%";
      progress[i].style.bottom = "100%";
      progress[i].style.bottom = 100 - parseInt(progText[i].dataset.count) + "%";

      function updateCount() {
        const target = parseInt(progText[i].dataset.count);
        if (count < target) {
          count++;
          progText[i].innerText = count + "%";
          setTimeout(updateCount, 50);
        } else {
          progText[i].innerText = target + "%";
        }
      }

      updateCount();
      bol = true;
    }
  }
});