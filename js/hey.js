// • On clicking of the 'Sign up' button:
// - Display an alert that says "We are not currently taking sign ups"
// - Then change the text of the button to say "No Sign Ups!”

console.log('test')

$('button').on('click', function (){
	$('button').text ('No Sign Ups!');
	alert('We are not currently taking sign ups');
})

// • If a user clicks "Read More":
// - Have an extra paragraph show using $.slideDown() or $.show() and change the link to say “Read Less”
// • If a user clicks "Read Less":
// - Have an extra paragraph hide using $.slideUp() or $.hide() and change the link to say “Read More”

var readMoreon = true;

$('.paragraph-link').on('click', function (){
	if (readMoreon) {
		readMoreon = false;
		$('.hiddenp').slideDown(1000);
		$('.paragraph-link').text('Read less >');
	}
	else {
		readMoreon = true;
		$('.hiddenp').slideUp(1000);
		$('.paragraph-link').text('Read more >');
	}
})


// • If a user clicks “Learn More” in the sidebar:
// - Have an extra paragraph show using $.slideDown() or $.show() and change the link to say “Learn Less”
// • If a user clicks "Learn Less” in the sidebar:
// - Have an extra paragraph hide using $.slideUp() or $.hide() and change the link to say “Learn More”

var learnMoreon = true;

$('.sidebar-link2').on('click', function (){
	if (learnMoreon) {
		learnMoreon = false;
		$('.side_p_hidden').slideDown(1000);
		$('.sidebar-link2').text('Learn less');
	}
	
	else {
		learnMoreon = true;
		$('.side_p_hidden').slideUp(1000);
		$('.sidebar-link2').text('Learn more');
	}
})