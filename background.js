var toggle = true;

findURL = function changeURL(text) {
	console.log('this');
	var current = window.location.href;
	if (current === text && toggle == true) {
		window.location.replace(
			'https://www.notion.so/fb38a7d0c8454758a34aa99a694e557c'
		);
	}
};

findURL('https://www.youtube.com/');

document.addEventListener('DOMContentLoaded', function () {
	// var contents = document.getElementById('pleaseClose')
	var close = document.getElementById('pleaseClose');

	close.addEventListener('click', function () {

	findURL = function changeURL(text) {  
      toggle = !toggle;
			console.log('this');
			var current = window.location.href;
			if (current === text && toggle == true) {
				window.location.replace(
					'https://www.notion.so/fb38a7d0c8454758a34aa99a694e557c'
				);
			}
		};

		findURL('https://www.youtube.com/');
		findURL('https://www.reddit.com/');
	});
	findURL('https://www.youtube.com/');
	findURL('https://www.reddit.com/');
});
