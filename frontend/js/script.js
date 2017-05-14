$('dicument').ready(function(){
    
    $('body').click(function(){
        
         var options = { percent: 10 };
         $( ".board" ).show( "scale" , options ,500 , callback);
        
            function callback() {
              setTimeout(function() {
                $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
              }, 1000 );
            };
        
    })
 
})
   