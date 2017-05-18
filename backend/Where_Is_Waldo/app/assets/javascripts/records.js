$('dicument').ready(function(){


    var options = { percent: 10 };
    $('.records>.row>img').on("click",function(){

         $( ".main" ).hide( "scale" , options ,500 );
         $( ".table" ).show( "scale" , options ,500 );

    });

    $('body').on("keydown",function(event){
       if (event.which == 27){

          $( ".main" ).show( "scale" , options ,500 );
          $( ".table" ).removeAttr( "style" ).fadeOut();

       };
    });


})
