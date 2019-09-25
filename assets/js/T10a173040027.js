var nrp = document.getElementById('nrp');
var jurusan = document.getElementById('jurusan');

nrp.addEventListener('keyup', function() {
	var nrpp = nrp.value;
	if (nrpp.match(/(301)/)) {
		jurusan.selectedIndex = 1;
	}
	else if (nrpp.match(/(302)/)) {
		jurusan.selectedIndex = 2;
	}
	else if (nrpp.match(/(303)/)) {
		jurusan.selectedIndex = 3;
	}
	else if (nrpp.match(/(304)/)) {
		jurusan.selectedIndex = 4;
	}
	else if (nrpp.match(/(305)/)) {
		jurusan.selectedIndex = 5;
	}
	else if (nrpp.match(/(306)/)) {
		jurusan.selectedIndex = 6;
	}
});

function nnrp(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode
		if (charCode > 31 && (charCode < 48 || charCode > 57))
			return false;
			return true;
};