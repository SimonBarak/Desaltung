import "./index.css";

(function () {
  function throttle(fn, ms) {
    // Ryan Taylor comment - https://remysharp.com/2010/07/21/throttling-function-calls
    var time,
      last = 0;
    return function () {
      var a = arguments,
        t = this,
        now = +new Date(),
        exe = function () {
          last = now;
          fn.apply(t, a);
        };
      clearTimeout(time);
      now >= last + ms ? exe() : (time = setTimeout(exe, ms));
    };
  }
  function hasClass(el, cls) {
    if (el.className.match("(?:^|\\s)" + cls + "(?!\\S)")) {
      return true;
    }
  }
  function addClass(el, cls) {
    if (!el.className.match("(?:^|\\s)" + cls + "(?!\\S)")) {
      el.className += " " + cls;
    }
  }
  function delClass(el, cls) {
    el.className = el.className.replace(
      new RegExp("(?:^|\\s)" + cls + "(?!\\S)"),
      ""
    );
  }

  document.documentElement.className += " js"; // adds class="js" to <html> element

  function elementFromTop(elem, classToAdd, distanceFromTop, unit) {
    var winY = window.innerHeight || document.documentElement.clientHeight,
      elemLength = elem.length,
      distTop,
      distPercent,
      distPixels,
      distUnit,
      i;

    for (i = 0; i < elemLength; ++i) {
      distTop = elem[i].getBoundingClientRect().top;
      distPercent = Math.round((distTop / winY) * 100);
      distPixels = Math.round(distTop);
      distUnit = unit == "percent" ? distPercent : distPixels;
      if (distUnit <= distanceFromTop) {
        if (!hasClass(elem[i], classToAdd)) {
          addClass(elem[i], classToAdd);
        }
      } else {
        delClass(elem[i], classToAdd);
      }
    }
  }
  // params: element, classes to add, distance from top, unit ('percent' or 'pixels')

  const p = document.querySelectorAll("#main-article > p");
  const h1 = document.querySelectorAll("#main-article > h1");
  const h2 = document.querySelectorAll("#main-article > h2");
  const h3 = document.querySelectorAll("#main-article > h3");
  const video = document.querySelectorAll("#main-article > video");

  const checkIfElementAreInView = (params) => {
    elementFromTop(p, "inView", 100, "percent");
    elementFromTop(h1, "inView", 100, "percent");
    elementFromTop(h2, "inView", 100, "percent");
    elementFromTop(h3, "inView", 100, "percent");
    elementFromTop(video, "inView", 100, "percent");
  };

  window.addEventListener(
    "scroll",
    throttle(function () {
      checkIfElementAreInView();
    }, 100),
    false
  );

  checkIfElementAreInView();
})();
