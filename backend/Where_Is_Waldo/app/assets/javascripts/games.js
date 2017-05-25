$('dicument').ready(function(){



    $('.games>.row>img').on("click",function(){

        var img = $(this).attr('src');
        var board_id = $(this).parent().attr('id')


        $('.board>img').attr('src',img);
        $('.board').attr("id",board_id);
         var options = { percent: 10 };
         $( ".board" ).show( "scale" , options ,500 );

    });

    $('body').on("keydown",function(event){
       if (event.which == 27){
          $( ".board" ).removeAttr( "style" ).fadeOut();
       };
    });

    $(".board>img").click(function(e){
      var xClick = e.pageX - $(this).offset().left;
      var yClick = e.pageY - $(this).offset().top;
      
      var board_id = $(".board").attr("id")

      $.ajax({
        url: 'target',
        type: 'GET',
        data: {board_id: board_id , xClick: xClick, yClick: yClick }
      })
    });

})
