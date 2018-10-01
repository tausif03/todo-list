// Toogle input form
$('.fa-edit').on("click", function(){
	$('input').fadeToggle(500);
});

// Add new Todos
$('input').on("keypress", function(event){
	if(event.which === 13){
		$('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + $(this).val() + '</li>')
		$(this).val("");
	}
});

// Check Off Specific Todos By Clicking
$('ul').on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click to delete Todo
$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
});




