$( document ).ready(function() {
       
  $("#txt").keyup(function() {   
    $('#binary').val(ABC.toBinary($('#txt').val()));
  });    
    
});

