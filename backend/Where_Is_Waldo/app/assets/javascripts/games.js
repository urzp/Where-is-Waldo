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

    $(".board>img").click(function(e){
      var xClick = e.pageX - $(this).offset().left;
      var yClick = e.pageY - $(this).offset().top;
      $.ajax({
        url: 'target',
        type: 'GET',
        data: { xClick: xClick, yClick: yClick }
      })
    });

})
