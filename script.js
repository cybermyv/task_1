window.onload = function() {
	const el_btn = document.querySelector('#result_btn');
	const el_input = document.querySelectorAll('form input');

	if (el_btn) {
		el_btn.addEventListener('click', function() {
			calculate();
		});
	}

	if (el_input) {
		el_input.forEach(function(el) {
			el.addEventListener('input', function() {
                isFloat(el.value)? el.classList.remove('err'):el.classList.add('err');
                
                console.log(el.hasChildNodes() );
                
                // closest('label').classList.add('err');
				console.log(el.value);
			});
		});
	}
};

function isFloat(value) {
	if (value === null) value = 0;
	let result = parseFloat(value);
	return result >= 0 ? result : false;
}

function calculate() {
	const first_number = isFloat(document.querySelector('#first_number').value);
	const second_number = isFloat(document.querySelector('#second_number').value);

	if (!first_number || !second_number) {
		alert('Не число');
		return;
	} else {
		let result = first_number + second_number;
		alert(Math.round(result * 100) / 100);
	}

	return;
}
