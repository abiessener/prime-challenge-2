  var currentStyle = "light"

  function switchCSS() {
    if (currentStyle == "light") {
      enableDark();
    }
    else enableLight();
  }

  function enableLight() {
    var stylesheet = document.getElementById("stylesheet");
    stylesheet.setAttribute('href', "styles/solarized_light.css");
    document.getElementById("buttonImage").src = "assets/lightswitch_70px_on.png";
    currentStyle = "light";
  }

  function enableDark() {
    var stylesheet = document.getElementById("stylesheet");
    stylesheet.setAttribute('href', "styles/solarized_dark.css");
    document.getElementById("buttonImage").src = "assets/lightswitch_70px_off.png";
    currentStyle = "dark";
  }
