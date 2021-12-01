$('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
        $("#username").hide();
    }
    else if($(this).is(":not(:checked)")){
      $("#username").show();
    }
  });
  