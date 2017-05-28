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
      var xClick = parseInt( e.pageX - $(this).offset().left ) / $(this).width() ;
      xClick =  parseInt(xClick*100)
      var yClick = parseInt( e.pageY - $(this).offset().top) / $(this).height() ;
      yClick =  parseInt(yClick*100)
      var board_id = $(".board").attr("id")
      $.ajax({
        url: 'target',
        type: 'GET',
        data: {board_id: board_id , xClick: xClick, yClick: yClick },
        success: function(res){
            alert(res.success);
        }
      })
    });


    $('.file_feld').change(function(){
      var val = $(this).val();
      var split = val.split("\\")
      $('.file_feld_support').val(split[split.length-1])
      $('.row > img').attr("src", "/images/" + split[split.length-1] )
      });

      var selecting = ''

      $('.begin').on('click', function(){
        selecting = 'begin'
        $('.begin').addClass('select')
        $('.end').removeClass('select')
      })

      $('.end').on('click', function(){
        selecting = 'end'
        $('.end').addClass('select')
        $('.begin').removeClass('select')
      })

      $('.row > img').on('click', function(e){
        var xClick = parseInt( e.pageX - $(this).offset().left ) / $(this).width() ;
        xClick =  parseInt(xClick*100)
        var yClick = parseInt( e.pageY - $(this).offset().top) / $(this).height() ;
        yClick =  parseInt(yClick*100)

        if (selecting == "begin") {
          $(".begin > .input_x").val(xClick)
          $(".begin > .input_y").val(yClick)
        }

        if (selecting == "end") {
          $(".end > .input_x").val(xClick)
          $(".end > .input_y").val(yClick)
        }

      })



})
