var toggle = true;
var lists = ['https://www.reddit.com/','https://www.youtube.com/']
findURL = function changeURL() {
	console.log('this');
	var current = window.location.href;
	if (lists.indexOf(current)>=0  && toggle == true) {
		window.location.replace(
			'https://www.notion.so/fb38a7d0c8454758a34aa99a694e557c'
		);
	}
};

findURL('https://www.youtube.com/');

document.addEventListener('DOMContentLoaded', function () {
	// var contents = document.getElementById('pleaseClose')
	var close = document.getElementById('pleaseClose');
	var lists = document.getElementById('lists');
	close.addEventListener('click', function () {

	findURL = function changeURL() {  
      toggle = !toggle;
			console.log('this');
			var current = window.location.href;
			if (lists.indexOf(current)>=0 && toggle == true) {
				window.location.replace(
					'https://www.notion.so/fb38a7d0c8454758a34aa99a694e557c'
				);
			}
		};
		if (lists.indexOf(str) >= 0) {
			//do something
		}
		findURL();
	});
	findURL();

});
