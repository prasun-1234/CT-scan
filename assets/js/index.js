function navbar() {
  const header = document.querySelector(".ct-head");

  let headerOffset = header.offsetTop;

  function stickyHeader() {
    if (window.pageYOffset > headerOffset) {
      header.classList.add("sticky-nav");
    } else {
      header.classList.remove("sticky-nav");
    }
  }

  window.onscroll = function () {
    stickyHeader();
  };
}
navbar();

function counterAnimation() {
  document.addEventListener("DOMContentLoaded", function () {
    var counters = document.querySelectorAll(".counter-text");
    var animationStarted = false;
    function runCounter(counterElement, endValue) {
      let count = 0;
      const step = endValue / 200;
      const numberElement = counterElement.querySelector(".counter-value");

      const counter = setInterval(() => {
        count += step;
        if (count < endValue) {
          numberElement.textContent = Math.ceil(count).toString() + "k";
        } else {
          numberElement.textContent = endValue.toString() + "k";
          clearInterval(counter);
        }
      }, 10);
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted) {
            counters.forEach((counter) => {
              const endValue = parseInt(
                counter.getAttribute("data-target"),
                10
              );
              runCounter(counter, endValue);
            });
            animationStarted = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  });
}

counterAnimation();
