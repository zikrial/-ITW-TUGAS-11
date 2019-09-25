var hasil = document.getElementById('hasil');
var inputBaris = document.getElementById('input-baris');
var tombolTampilkan = document.getElementById('tombol-tampilkan');

tombolTampilkan.addEventListener('click', function() {
	hasil.innerHTML = '';

	for (var i = 1; i <= inputBaris.value; i++) {

		for (var j = i; j <= inputBaris.value; j++) {
			var box = document.createElement('div');
			box.className = 'box';
			box.innerHTML = j;
			hasil.appendChild(box);
		}
		for (var j = i; j>=1; j--) {
			var box2 = document.createElement('div');
			box2.className = 'box2';
			box2.innerHTML = j;
			hasil.appendChild(box2);
		}
		var br = document.createElement('br');
		hasil.appendChild(br);
	}
	inputBaris.value = '';
});