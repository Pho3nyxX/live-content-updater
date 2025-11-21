document.addEventListener("DOMContentLoaded", (event) => {
	const btn = document.getElementById("updateUIBtn");
	const txt = document.querySelector(".content input[type=text]");
	const span = document.getElementById("updateSpan");

	btn.addEventListener("click", (event) => {
		let inputVal = txt.value;
		if(inputVal.trim() === "" || inputVal === null){
            return;
        }else{
            span.innerHTML = inputVal;
        }
	});
});