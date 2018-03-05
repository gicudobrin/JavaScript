const $odd = $('a:odd');
// $odd.hide();
const $secureLinks = $('a[href^="https://"]');
// $secureLinks.hide();

const $pdfs = $('a[href$=".pdf')
//$pdfs.hide();

//$odd.css('backgroundColor', 'red');
$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
	if ($(':checked').length === 0) {
	event.preventDefault();
	alert('Please check the box to allow pdf downloads');

	}
})

//Each method;

// $collection.each(function(index, element){

// })

$('a').each(function(index, element){
	console.log(index, $(element).attr('href'));
})