$(function() {
  $('#lastName').focus(function(){
    $('#lastName').css('border','1px solid green');
  });
  $('#lastName').focusout(function(){
    $('#lastName').css('border-color','red');
  });
  $('#firstName').focus(function(){
    $('#firstName').css('border','1px solid green');
  });
  $('#firstName').focusout(function(){
    $('#firstName').css('border-color','red');
  });
});
