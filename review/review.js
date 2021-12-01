var tags = $("#tags").tagsInit({
  theme:'blue',  
});
function tagsAdd1(){
	tags.tagsAdd("Exellent transport service",tags);
}
function tagsAdd2(){
	tags.tagsAdd("The product is exactly as discribed",tags);
}
function tagsAdd3(){
	tags.tagsAdd("Good quality product",tags);
}
function tagsAdd4(){
	tags.tagsAdd("The response from the company is good",tags);
}
function tagsAdd5(){
	tags.tagsAdd("Fast shiping",tags);
}
function tagsAdd6(){
	tags.tagsAdd("The company is reponsible for the product",tags);
}

$('input[type="checkbox"]').click(function(){
  if($(this).is(":checked")){
      $("#username").hide();
  }
  else if($(this).is(":not(:checked)")){
    $("#username").show();
  }
});
