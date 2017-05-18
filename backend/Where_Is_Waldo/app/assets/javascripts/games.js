$('dicument').ready(function(){



    $('.games>.row>img').on("click",function(){

        var img = $(this).attr('src');

        $('.board>img').attr('src',img);
         var options = { percent: 10 };
         $( ".board" ).show( "scale" , options ,500 );

    });

    $('body').on("keydown",function(event){
       if (event.which == 27){
          $( ".board" ).removeAttr( "style" ).fadeOut();
       };
    });

})
