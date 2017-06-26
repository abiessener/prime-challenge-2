function getTxt(url) {
	var contentFile = new XMLHttpRequest()
	var contentText = "butts"

	contentFile.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	contentText = this.responseText;
		    //var contentArray = contentText.split("\n");
    		window.alert(contentText);	    
		    return contentText;
		}
	}

	contentFile.open("POST", url, true);
	contentFile.send();

}

