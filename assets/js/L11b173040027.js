var tombol1 = document.getElementById('tombol1');
var kotak = document.getElementById('kotak');

tombol1.addEventListener('click', function() {
	kotak.style.backgroundColor = "#bada55";
	kotak.style.transition = '1s';
});


var tombol2 = document.getElementById('tombol2');
var kotak = document.getElementById('kotak');

tombol2.addEventListener('click', function() {
	kotak.style.transform = "rotate(360deg)";
	kotak.style.width = "0";
	kotak.style.height = "0";
	kotak.style.opacity = "0";
	kotak.style.top = "100px";
	kotak.style.left = "100px";
	kotak.style.transition = '1s';
});


var tombol3 = document.getElementById('tombol3');
var kotak = document.getElementById('kotak');

tombol3.addEventListener('click', function() {
	kotak.style.top = "200px";
	kotak.style.opacity = "0";
	kotak.style.transition = '1s';


});
var tombol4 = document.getElementById('tombol4');
var kotak = document.getElementById('kotak');

tombol4.addEventListener('click', function() {
	kotak.style.top = "100px";
	kotak.style.height = "1px";
	kotak.style.transform = "scale(0,0)";
	kotak.style.transition = "top 1s, height 1s, transform .5s linear 1s";
});