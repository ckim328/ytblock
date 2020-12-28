var toggle = true;
var listsShow = ['https://www.youtube.com/'];

findURL = function changeURL(url, tabid) {
	var block = document.getElementById('add');
	if (listsShow.indexOf(url) >= 0 && block.innerText=="On") {
		console.log('IN HERE', tabid);
		chrome.tabs.remove(tabid);
	}
};

const getToggle = function getToggle(){
	chrome.storage.local.get(['key'], function(result) {
		console.log('Value currently is ' + result.key);
	  });
	
}

const setToggle = function setToggle(){
	var currToggle = null
	chrome.storage.local.get(['key'], function(result) {
		currToggle = result.key
		console.log('Value currently is ' + result.key);
	  });
	if (currToggle==undefined){
		currToggle = true
	}
	chrome.storage.local.set({key: !currToggle}, function() {
		console.log('Value is set to ' + !currToggle);
	  });
}
const getActiveUrl = (tabid, changeInfo, tab) => {
	const url = changeInfo.url;

	// url is likely to be empty, and filter chrome:// and about:// URLs
	if (!url || ['chrome://', 'about://'].some((p) => url.startsWith(p)))
		return;

	// filtering is not an active tab
	if (!tab.active) return;

	// the url address you need
	console.log('getactive', changeInfo);
	findURL(url, tab.id);
};

chrome.tabs.onUpdated.addListener(getActiveUrl);

chrome.tabs.onActivated.addListener(function (activeInfo) {
	chrome.tabs.get(activeInfo.tabId, function (tab) {
		y = tab.url;
		console.log('you are here: ' + tab);
		findURL(y, activeInfo.tabId);
	});
});

chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ url: chrome.runtime.getURL("notes.html") });
});


document.addEventListener('DOMContentLoaded', function () {

	var block = document.getElementById('add');
	var toggleVal = getToggle()
	console.log('eve', window.location.href)
	if (block ){

		block.addEventListener('click', function () {
			if (toggleVal){
				block.innerText = "On"

			}
			else{
				block.innerText = "Off"

			}
			setToggle()
		});
	}
});