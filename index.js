(function () {
  const projects = document.querySelector(".projects");

  let targetelem = "";

  projects.addEventListener("mouseenter", mouseInhandler);
  projects.addEventListener("mousemove", mouseMovehandler);

  // handlers ---------------------------------------------------------------------

  function mouseInhandler(e) {
    check(e.target) && updateStyle((e.offsetX )/ 100, e.offsetY / 100, e.target);
  }

  function mouseMovehandler(e) {
    targetelem = e.target;
    check(e.target) && updateStyle(e.offsetX / 100, e.offsetY / 100, e.target);
    targetelem.addEventListener("mouseleave", mouseleavehandler);
  }

  function mouseleavehandler(e) {
    check(e.target) && updateStyle(0, 0, targetelem);
  }

  //  checking and updating------------------------------------------------------------

  function check(elem) {
    if (elem.className === "project-img") {
      return true;
    }
    return false;
  }

  function updateStyle(x, y, e) {
    // console.log(e, x, y);
    e.style.transform = `perspective(300px) rotateX(${x}deg) rotateY(${y}deg)`;
  }
})();
