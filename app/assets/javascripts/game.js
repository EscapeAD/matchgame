$(function() {
  var squares = $('.square');
  var gameOn = false;
  var numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

  function start(){
    gameOn = true;
    var newnum = numbers;
    squares.each(function(){
      // $(this).css('background-color', 'red').slideUp( 3000 ).fadeIn( 400 );
      $(this).removeClass('flash');
      $(this).addClass('backsplash');
      $(this).text(newnum[0]);
      newnum.shift();
    });

  }
  squares.hover(function(){
    // var mouse = $(this).hasClass('backsplash');
      $(this).toggleClass('flash');
  });

  console.log('ready 1');
  $('.start').click(function(event){
    event.preventDefault();
    start();
    console.log(start);
  });

  $('.square').click(function(event){
    event.preventDefault();
    if(gameOn){
      console.log('clicked');
    // $(this).css('background-color', 'white');
    $(this).removeClass('backsplash');
    check();
  }
  });


function check(){
  if($('.backsplash').length === 0){
    gameOn = false;
  }
}
function ranNum(){

}

});
