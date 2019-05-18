// document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer;

function autoSlider() {
	timer = setTimeout(function() {
		var stripe = document.getElementById('stripe');
		left -= 128;
	 	if(left < -512) {
			left = 0;
			clearTimeout(timer);
		}
			stripe.style.left = left + 'px';
			autoSlider();
	}, 3000);
}