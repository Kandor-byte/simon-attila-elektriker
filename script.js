document.addEventListener("DOMContentLoaded", function () {
  const wireContainer = document.getElementById('wire-container');
  const nameElement = document.querySelector('.fade-name');
  const emailElement = document.querySelector('.fade-email');
  const phoneElement = document.querySelector('.fade-phone');
  const graphicElement = document.querySelector('.icon');
  const querryElement = document.querySelector('.icon_querry');
  const fadeElements = [nameElement, emailElement, phoneElement];
  const fadeElements2 = [graphicElement, querryElement];
  const numWires = 5;

  // Function to handle the fade-in effect
  function fadeIn() {
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateX(0)';
      }, index * 500); // Adjust delay times (in milliseconds)
    });
  }

  function fadeIn2() {
    fadeElements2.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = 0.3;
        element.style.transform = 'translateX(0)';
      }, index * 500); // Adjust delay times (in milliseconds)
    });
  }

  setTimeout(fadeIn, 100);
   setTimeout(fadeIn2, 100);

  // Call the fadeIn function after a short delay
 // setTimeout(fadeIn, 100);

});
