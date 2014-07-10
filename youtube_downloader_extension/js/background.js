var links = [];


// The onClicked callback function.
function onClickHandler(info, tab) {
    var dict = JSON.parse(JSON.stringify(tab));
    console.log("link: " + dict["url"]); 
    links.push(dict["url"]);
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({"title": "Download mp3", "id": "download"});
});

chrome.extension.onRequest.addListener(
   function(request, sender, sendResponse) {
        sendResponse({
            filename : "youtube.links",
            content : links
        });
   }
);


