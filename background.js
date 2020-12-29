
var listsShow = ['https://www.youtube.com/'];

findURL = function changeURL(url, tabid) {
	var toggle = getToggle()
	console.log('findURL', toggle)
	if (listsShow.indexOf(url) >= 0 && toggle) {
		console.log('IN HERE', tabid);
		chrome.tabs.remove(tabid);
	}
};



const getToggle = function getToggle(){
	// var get=false
	chrome.storage.local.get('key', function(result) {
		console.log('getToggle',result.key)
		var get = true;
		if (result.key==undefined){
			get= true
			chrome.storage.local.set({key: get})
		}
		else get = result.key
		return get
	  });
}

const setToggle = function setToggle(){
	var temp = getToggle()
	console.log('setToggle', temp)
	if (temp ==undefined){

	}
	chrome.storage.local.set({'key': !temp})
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
	console.log('eve', window.location.href)
	if (block){
		var toggleVal = getToggle()
		console.log('onClick',toggleVal)
		block.addEventListener('click', function () {
			if (toggleVal){
				block.innerText = "On"
				setToggle()
			}
			else{
				block.innerText = "Off"
				setToggle()
			}
		});
	}
});