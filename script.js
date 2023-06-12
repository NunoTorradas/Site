document.addEventListener("DOMContentLoaded", function() {
    const risco = document.querySelector(".risco");
    const bodyWidth = document.body.clientWidth;
  
    function moveRiscoAleatoriamente() {
      const randomLeft = Math.floor(Math.random() * bodyWidth);
      risco.style.left = randomLeft + "px";
    }
  
    setInterval(moveRiscoAleatoriamente, 5000);
  });
  