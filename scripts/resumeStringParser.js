function inputData() {
	var startPos = 0
	var endPos = 0
	var bulletFound = 0
	var newlineFound = 0

	// while (bulletFound == 0) {
	// 	startPos = endPos + 1;
	// 	if (rawData.charCodeAt(startPos) == 0x8226 {
	// 		bulletFound = 1;
	// 		endPos = startPos + 1;
	// 		while (newlineFound == 0) {
	// 			if (rawData.charCodeAt(endPos) == 0x000A {
	// 				newlineFound = 1;
	// 			} else endPos = endPos + 1;
	// 		}

	// 	}
	// }
	
	var rawData = document.getElementById('rawText').value;

	var rawArray = rawData.split("\n");

	document.getElementById("demo").value = arr[0];
}