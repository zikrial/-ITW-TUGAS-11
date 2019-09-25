var tombol1 = document.getElementById('tombol1');
var kotak = document.getElementById('kotak');

tombol1.addEventListener('click', function() {
	kotak.style.backgroundColor = "#bada55";
	kotak.style.transition = '1s';
});