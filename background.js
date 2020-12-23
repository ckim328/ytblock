var toggle = true;
var lists = ['https://www.reddit.com/','https://www.youtube.com/']
findURL = function changeURL() {
	var current = window.location.href;
	if (lists.indexOf(current)>=0  && toggle == true) {
		window.location.replace(
			'https://www.notion.so/fb38a7d0c8454758a34aa99a694e557c'
		);
	}
};

findURL('https://www.youtube.com/');

async function showList(){
	if (listsShow.getElementsByTagName("li").length !=lists.length){
		lists.forEach(function (item) {
			let li = document.createElement('li');
			listsShow.appendChild(li);
			listsShow.innerHTML += item;
		});
	}
}
document.addEventListener('DOMContentLoaded', function () {

	var add = document.getElementById('add');
	var clear = document.getElementById('clear');
	var listsShow = document.getElementById('lists');
	var txtBox = document.getElementById('txtbox');
	add.addEventListener('click', function () {
		console.log(listsShow.getElementsByTagName("li").length)
		txt = txtBox.value;
		console.log(txt)
		lists.append(txt)
		await showList();
	});
	
	clear.addEventListener('click', function(){
		await showList();
	})
	findURL();

});
