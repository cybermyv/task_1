(function () {
	const el_btn = document.querySelector('#result_btn');

	el_btn.addEventListener('click', calculate);

	function calculate() {
		const first_number = Number(document.querySelector('#first_number').value);
		const second_number = Number(document.querySelector('#second_number').value);

		let result = first_number + second_number;
		alert(result.toFixed(2));
	}
})();
