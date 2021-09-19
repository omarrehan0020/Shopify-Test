

  var opacity = 0;
  var intervalID = 0;
  window.onload = fadeIn;
  
  function fadeIn() {
      setInterval(show, 50);
  }
  
  function show() {

      if (opacity < 1) {
          opacity += 0.1;
          document.getElementById('prices').style.opacity = opacity
      } else {
          clearInterval(intervalID);
      }
  }
  