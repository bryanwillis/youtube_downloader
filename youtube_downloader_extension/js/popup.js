var submit    = document.getElementById('submit_button');


$(submit).on("click", function(){
	chrome.extension.sendRequest({download: true}, function(response) {
        downloadFileFromText(response.filename, format_to_link(response.content));
	});
});

function downloadFileFromText(filename, content) {
    var a = document.createElement('a');
    var blob = new Blob([ content ], {type : "text/plain;charset=UTF-8"});
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click(); //this is probably the key - simulating a click on a download link
    delete a;// we don't need this anymore
}

function format_to_link(array){
    var links = "";
    for(var i in array){
        links += array[i] + "\n";
    }
    return links;
}

