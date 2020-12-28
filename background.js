var toggle = true;
var listsShow = ['https://www.reddit.com/','https://www.youtube.com/']

findURL = function changeURL() {
	var current = window.location.href;
	if (listsShow.indexOf(current)>=0  && toggle == true) {
		window.location.replace(
			'https://www.notion.so/fb38a7d0c8454758a34aa99a694e557c'
		);
	}
};


async function showList(){
	var listsShowEl = document.getElementById('lists');
	if (listsShow.length ==0){
		console.log('lists', listsShowEl)
		listsShowEl.innerHTML =""
	}
	console.log(listsShow)
	if (listsShowEl.getElementsByTagName("li").length !=listsShow.length && listsShow.length>0){
		listsShow.forEach(function (item) {
			let li = document.createElement('li');
			li.appendChild(document.createTextNode(item))
			listsShowEl.appendChild(li);
			// listsShowEl.innerHTML += item;
		});
	}
}

document.addEventListener('DOMContentLoaded', function () {

	var add = document.getElementById('add');
	var clear = document.getElementById('clear');
	var listsShowEl = document.getElementById('lists');
	var txtBox = document.getElementById('txtbox');
	add.addEventListener('click', function () {
		console.log(listsShowEl.getElementsByTagName("li").length)
		txt = txtBox.value;
		console.log(txt)
		listsShow.push(txt)
		 showList();
	});
	
	clear.addEventListener('click', function(){
		listsShow = [];
		console.log(listsShow)
		 showList();
	})
	findURL();

});
