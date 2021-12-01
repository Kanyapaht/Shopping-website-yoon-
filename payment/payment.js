$(document).ready(function(){
    $("#promptpay").click(function(){
      var hide =  $("#promptpayQRCode").is(":hidden")
      $("#promptpayQRCode").toggleClass('hidden')
      $("#promptpayQRCode").attr('hidden',!hide)
    });
});