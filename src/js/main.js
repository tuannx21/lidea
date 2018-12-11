window.addEventListener('DOMContentLoaded', function () {
  console.log('loaded');

  var toggleShowMore = Array.prototype.slice.call(document.querySelectorAll(".card-introduce .content .body-sp"));
  toggleShowMore.forEach(function(tg) {
    tg.addEventListener('click',function() {
      let targetArrow = document.querySelector("#"+tg.getAttribute("arrow-target"));
      let targetContent = document.querySelector("#"+tg.getAttribute("content-target"));
      
      if (targetContent.style.display==="block") {
        targetContent.style.display="none";
        targetArrow.src="images/icon/arrow_open.png";
      } else {
        targetContent.style.display="block";
        targetArrow.src="images/icon/arrow_close.png";
      }
    });
  });
})
