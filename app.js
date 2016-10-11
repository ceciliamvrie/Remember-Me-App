$(function() {

    var $newItem = $('.show');
    var $textInput = $('input:text');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

     $('input').after(' <input class="hide submit" type="submit" id="hide" value="Submit">');


     $($newItem).on('click', function() {
        $('input').removeClass('hide');
        $($newItem).hide();
   });

     $('input.submit').on('click' , function(e) {
        e.preventDefault();
         var newText = $textInput.val();
     if(newText != "") {
         $('input:text').val('');
     } else {
       alert('This is not an event.');
       e.stop();
     }
    var time = prompt('What time do you want this to start?');
      if(time != null) {
        time = hours - time;
        $('ul').append('<li class="box">' + newText +' '+ hours + ':' + minutes + '</li>');

     } else {
          alert("What was that again?");
     }

   });

     $('input').on('blur' , function() {
        $('input:').addClass('hide');
        $($newItem).show();
     });

   });
