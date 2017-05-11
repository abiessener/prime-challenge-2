	// var rawData = document.getElementById('rawText').value;
	// var rawArray = rawData.split("\n");

	var producerFile = new XMLHttpRequest();

	producerFile.open("GET", "producer.txt", true);

	producerFile.send();

	var rawData = producerFile.responseText;
	window.alert(rawData);

	//var rawArray = rawData.split("\n");

	// maxLines = rawArray.length;

	// lineNumber = 5;
	// currentLineData = rawArray[lineNumber].slice(2)

	// // while (lineNumber <= maxLines) {

	// // }

	// //window.alert(rawArray[3]);
	// window.alert(currentLineData);
	// document.getElementById("test").innerHTML = maxLines;

