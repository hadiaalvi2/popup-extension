(function() {
  'use strict';
  
  const colors = ["yellow", "green", "pink", "blue", "lavender"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  function applyBackground() {
   
    if (document.documentElement) {
      document.documentElement.style.backgroundColor = randomColor;
    }
    
    if (document.body) {
      document.body.style.backgroundColor = randomColor;
     
      document.body.style.minHeight = '100vh';
      document.body.style.margin = '0';
    }
  }
  
  if (document.body) {
    applyBackground();
  } else {
   
    window.addEventListener('DOMContentLoaded', applyBackground);
  }
})();