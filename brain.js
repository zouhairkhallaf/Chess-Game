$(document).ready(function(){
        var pickedUp = false;
        var currentPiece;
        var lastPos;
        var lastColor;
        $('.cell').click(function(){
          if (pickedUp == false){
            if($(this).html() != ""){
              lastPos = $(this);
              lastColor = $(this).css("background-color");
                $(this).css("background-color", "lime");
                currentPiece = $(this).html();
                pickedUp = true;
              }
          }else{
            $(this).html(currentPiece);
            currentPiece = null;
            pickedUp = false;
            $(lastPos).css("background-color", lastColor);
            $(lastPos).html("");
          }
        })
      })
      