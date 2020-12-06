

document.addEventListener('DOMContentLoaded', function () {
    var contents = document.getElementById('content')
    var close = document.getElementById('pleaseClose')
    function remove(){
            contents.remove()
            console.log('sdf')
    }
	close.addEventListener('click', function () {
		remove();
	});

})