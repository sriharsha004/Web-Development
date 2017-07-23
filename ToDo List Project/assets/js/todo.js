//strike off todos wheck clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on - to delete ToDo
$("ul").on("click", "span", function(event){
	//removes the parent li of span
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	}); 
	//stops bubbling of actions on the parent elements
	event.stopPropagation();
});

//adding the new todo
$("input[type='text']").keypress(function(event){
	//checking the event to be a 'enter' key and grab the input value
	if(event.which === 13){
		var newToDo = $(this).val();
		$(this).val("");
		//create a new li and add to existing ul
		$("ul").append("<li><span><i class='fa fa-minus-circle' aria-hidden='true'></i></span> "+ newToDo +"</li>");
	}
});

//show the input box when + is pressed
$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});