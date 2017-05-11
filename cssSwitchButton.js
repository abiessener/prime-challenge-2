  var currentStyle = "light"

  function switchCSS() {
    if (currentStyle == "light") {
      enableDark();
    }
    else enableLight();
  }

  function enableLight() {
    var stylesheet = document.getElementById("stylesheet");
    stylesheet.setAttribute('href', "solarized_light.css");
    document.getElementById("buttonImage").src = "lightswitch_70px_on.png";
    currentStyle = "light";
  }

  function enableDark() {
    var stylesheet = document.getElementById("stylesheet");
    stylesheet.setAttribute('href', "solarized_dark.css");
    document.getElementById("buttonImage").src = "lightswitch_70px_off.png";
    currentStyle = "dark";
  }