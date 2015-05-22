$( document ).ready(function() {
  $("#txt").keyup(function() {
  
    $('#ascii').val(
      $('#txt').val().split('').map(function(key){ 
        return key.charCodeAt(0)
      }).join(" ")
    );
     

    $('#binary').val(ABC.toBinary($('#txt').val()));
    
   
    $('#ternary').val(    
      $('#binary').val().split(" ").map(function(key){
        
        console.log(key);
        
        console.log(parseInt(key,2))
        
 //       return parseInt(key).toString(3);
        
        
    }).join(" ")
      
    );
  
  
  });      
});

