(function () {

	const el_btn = document.querySelector('#result_btn');
	const el_input = document.querySelectorAll('form input');

	el_btn.addEventListener('click', function () {
		calculate();
	});

	el_input.forEach(function (el) {
		el.addEventListener('input', function () {
			if (isNaN(Number(el.value))) { el.classList.toggle('err', false | true) };
		});
	});

	function inputVerification(value) {
		let result = parseFloat(value);
		return result >= 0 ? true : false;
	}

	function calculate() {
		const first_number = Number(document.querySelector('#first_number').value);
		const second_number = Number(document.querySelector('#second_number').value);

		if (!inputVerification(first_number) || !inputVerification(second_number)) {
			alert('Ошибка вычисления!');
			return;
		} else {
			let result = first_number + second_number;
			alert(Math.round(result * 100) / 100);
		}
		return;
	}

})();