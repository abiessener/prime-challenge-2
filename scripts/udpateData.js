function getTxt(url) { 
  var contentText = "";

  $(document).ready(function(){
    $.get(url, function (data){ 
        var contentText = data;
        var contentArray = contentText.split("\n");
        updateData(contentArray);
      }
    )
  })

  function updateData(contentArrayParam) {

    // name
    var startRow = 0;
    var endRow = 1;

    document.getElementById("title_name").innerHTML = contentArrayParam[startRow];

    startRow++;
    endRow++;

    // contact info
    document.getElementById("contact_info").innerHTML = contentArrayParam[startRow];

    startRow++;
    endRow++;


    // tabs - HARD-CODED to actual "Skills" "Technical Skills" "Education" strings

    // skills
    for (var i = 0; i < contentArrayParam.length; i++) {
      if (contentArrayParam[i].search("Skills") == 0) {
        var startRow = i + 1;
      }
      if (contentArrayParam[i].search("Technical Skills") == 0) {
        var endRow = i;
      }
    }

    var skillsText = document.getElementById("skills_text");

    for (var j = startRow; j < endRow; j++) {
      var li = document.createElement("li");
      var text = document.createTextNode(contentArrayParam[j].slice(2));
      li.appendChild(text);
      skillsText.appendChild(li);
    }

    // tech skills
    for (var i = 0; i < contentArrayParam.length; i++) {
      if (contentArrayParam[i].search("Technical Skills") == 0) {
        var startRow = i + 1;
      }
      if (contentArrayParam[i].search("Education") == 0) {
        var endRow = i;
      }
    }

    var techskillsText = document.getElementById("techskills_text");

    for (var j = startRow; j < endRow; j++) {
      var li = document.createElement("li");
      var text = document.createTextNode(contentArrayParam[j].slice(2));
      li.appendChild(text);
      techskillsText.appendChild(li);
    }

    // education - hard-coded to 1 entry
    for (var i = 0; i < contentArrayParam.length; i++) {
      if (contentArrayParam[i].search("Education") == 0) {
        var startRow = i + 1;
        var endRow = startRow + 1;
      }
    }

    var educationText = document.getElementById("education_text");

    for (var j = startRow; j < endRow; j++) {
      var li = document.createElement("li");
      contentArrayParam[j] = contentArrayParam[j].replace(/\uFFFD/g,"\u2013");
      var text = document.createTextNode(contentArrayParam[j]);

      li.appendChild(text);
      educationText.appendChild(li);
    }

    // title & summary - hard-coded to end of Education

    document.getElementById("header_title").innerHTML = contentArrayParam[endRow];
    endRow++;
    document.getElementById("header_text").innerHTML = contentArrayParam[endRow];
    startRow = endRow + 2;
    endRow = startRow + 1;

    // career summary 

    document.getElementById("role1_title").innerHTML = contentArrayParam[startRow];
    startRow++;
    endRow++;

    var emptyFound = false;
    for (var i = startRow; i < 300; i++) {
      if (contentArrayParam[i].length < 3) {
        emptyFound = true;
        break;
      }
      endRow++;
    }

    var role1Text = document.getElementById("role1_text");

    for (var j = startRow; j < (endRow - 1); j++) {
      var li = document.createElement("li");
      var text = contentArrayParam[j].slice(2);
      var breakIndex = text.search("\uFFFD");
      var strongText = document.createTextNode(text.slice(0, breakIndex - 1));
      var regText = text.slice(breakIndex + 1);
      var strongObj = document.createElement("strong");
      strongObj.appendChild(strongText);
      li.appendChild(strongObj);
      text = " \u2013 " + regText;
      var insertText = document.createTextNode(text);
      li.appendChild(insertText);
      role1Text.appendChild(li);
    }

    // role2

    startRow = endRow;
    endRow = startRow + 1;

   document.getElementById("role2_title").innerHTML = contentArrayParam[startRow];
    startRow++;
    endRow++;

    var emptyFound = false;
    for (var i = startRow; i < 300; i++) {
      if (contentArrayParam[i].length < 3) {
        emptyFound = true;
        break;
      }
      endRow++;
    }

    var role2Text = document.getElementById("role2_text");

    for (var j = startRow; j < (endRow - 1); j++) {
      var li = document.createElement("li");
      var text = contentArrayParam[j].slice(2);
      var breakIndex = text.search("\uFFFD");
      var strongText = document.createTextNode(text.slice(0, breakIndex - 1));
      var regText = text.slice(breakIndex + 1);
      var strongObj = document.createElement("strong");
      strongObj.appendChild(strongText);
      li.appendChild(strongObj);
      text = " \u2013 " + regText;
      var insertText = document.createTextNode(text);
      li.appendChild(insertText);
      role2Text.appendChild(li);
    }

    // role3

    startRow = endRow;
    endRow = startRow + 1;

    document.getElementById("role3_title").innerHTML = contentArrayParam[startRow];
    startRow++;
    endRow++;

    var emptyFound = false;
    for (var i = startRow; i < 300; i++) {
      if (contentArrayParam[i].length < 3) {
        emptyFound = true;
        break;
      }
      endRow++;
    }

    var role3Text = document.getElementById("role3_text");

    for (var j = startRow; j < (endRow - 1); j++) {
      var li = document.createElement("li");
      var text = contentArrayParam[j].slice(2);
      var breakIndex = text.search("\uFFFD");
      var strongText = document.createTextNode(text.slice(0, breakIndex - 1));
      var regText = text.slice(breakIndex + 1);
      var strongObj = document.createElement("strong");
      strongObj.appendChild(strongText);
      li.appendChild(strongObj);
      text = " \u2013 " + regText;
      var insertText = document.createTextNode(text);
      li.appendChild(insertText);
      role3Text.appendChild(li);
    }
}