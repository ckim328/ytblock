
var listsShow = ['https://www.youtube.com/'];

findURL = function changeURL(url, tabid) {
	getToggle().then(result=>{

		console.log('findURL', result)
		if (listsShow.indexOf(url) >= 0 && result) {
			console.log('IN HERE', tabid);
			chrome.tabs.remove(tabid);
		}
	})
};



const getToggle = function getToggle(){
	return new Promise(resolve =>{

		chrome.storage.local.get('key', function(result) {
			console.log('getToggle',result.key)
			var get = true;
			if (result.key==undefined){
				get= true
				chrome.storage.local.set({key: get})
			}
			else get = result.key
			resolve(get)
		});
	})
}

const setToggle = function setToggle(){
	getToggle().then(result =>{
		console.log('setToggle', result)
		if (result ==undefined){
			result = false
			
		}
		chrome.storage.local.set({'key': !result},function(){
			console.log('set key to ', result)
		})
	})
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
	if (block){
		block.addEventListener('click', function () {
			getToggle().then(result =>{
				console.log('onClick',result)
	
				if (result){
					block.innerText = "Block"
					setToggle()
				}
				else{
					block.innerText = "Unblock"
					setToggle()
				}
			})

		});
	}
});