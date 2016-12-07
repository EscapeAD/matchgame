$(function() {
  var squares = $('.square');

  function start(){

    squares.each(function(){
      $(this).css('background-color', 'red');
    })
    // for(var i = 0; i < squares.length; i++){
    //   squares[i].style.background = 'blue';
    // }
  }


  console.log('ready 1');
  $('.start').click(function(event){
    event.preventDefault();
    start();
    console.log(start);
  });
  $('.square').click(function(event){
    event.preventDefault();
    console.log('clicked');
    $(this).css('background-color', 'white');
  });



});
