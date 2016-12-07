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
    $(this).addClass('selected');
    selected();
    check();

  }
  });


function check(){
  if($('.win').length === 16){
    gameOn = false;
    alert('winner');
  }
}
function ranNum(){

}

function selected(){
  var select = $('.selected');
  if(select.length >= 2){
    if(select.first().text() == select.last().text()){
      console.log('YES!');
      select.each(function(){
        $(this).removeClass('selected');
        $(this).addClass('win');
    })
      } else {
      select.each(function(){
        $(this).removeClass('selected');
        $(this).addClass('backsplash');
    });
    }
  }
}

});
