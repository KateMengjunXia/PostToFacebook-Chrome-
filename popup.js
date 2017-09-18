function postToFB() {
    chrome.tabs.getSelected(null, function(tab) {
	    // info of the active tab
	    var currentTITLE = tab.title;
	    var currentURL = tab.url;
	    // ask to confirm
	    var ans = confirm("Post " + currentTITLE + " to Facebook?");
	    if (ans) {
	    // get the share RUL
	    var shareURL = "https://www.facebook.com/sharer/sharer.php?u=" + currentURL;
	    // opens a new tab
	    chrome.tabs.create({ url: shareURL });
	    }
	    });		
}

document.addEventListener('DOMContentLoaded', postToFB);

