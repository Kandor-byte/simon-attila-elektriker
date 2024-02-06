document.addEventListener("DOMContentLoaded", function () {
  // Selecting elements for the fade-in effect
  const nameElement = document.querySelector('.fade-name');
  const nameElement2 = document.querySelector('.fade-name2');
  const emailElement = document.querySelector('.fade-email');
  const phoneElement = document.querySelector('.fade-phone');
  const graphicElement = document.querySelector('.icon');
  const querryElement = document.querySelector('.icon_querry');
  const fadeElements = [nameElement, nameElement2, emailElement, phoneElement];
  const fadeElements2 = [graphicElement, querryElement];

  // Function to handle the fade-in effect
  function fadeIn() {
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateX(0)';
      }, index * 1000); // Adjust delay times (in milliseconds)
    });
  }

  // Function to handle another fade-in effect
  function fadeIn2() {
    fadeElements2.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = 0.3;
        element.style.transform = 'translateX(0)';
      }, index * 500); // Adjust delay times (in milliseconds)
    });
  }

  // Set a short delay and then trigger the fade-in functions
  setTimeout(fadeIn, 100);
  setTimeout(fadeIn2, 100);
});
