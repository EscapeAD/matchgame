$(function() {
  var squares = $('.square');
  var gameOn = false;
  const numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

init();

  squares.hover(function(){
    // var mouse = $(this).hasClass('backsplash');
    if($(this).hasClass('backsplash') || $(this).hasClass('flash')){
      $(this).toggleClass('flash');
    };
  });

  console.log('ready 1');

  $('.start').click(function(event){
    event.preventDefault();
    start();
    console.log(start);
  });

  $('.reset').click(function(event){
    event.preventDefault();
    reset();
    console.log('reset');
  });

  $('.square').click(function(event){
    event.preventDefault();
    if(gameOn){
      console.log('clicked');
    // $(this).css('background-color', 'white');
    if($(this).hasClass('backsplash')){
    $(this).removeClass('backsplash');
    $(this).addClass('selected');
    selected();
    check();
  }
  }
  });

// functions

function start(){
  gameOn = true;
  reset();
  squares.each(function(){
    $(this).removeClass('flash');
    $(this).addClass('backsplash');
  });
}

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
        console.log('correct');
    })
      } else {
      select.each(function(){
        $(this).removeClass('selected');
        $(this).addClass('backsplash');
        console.log('wrong');
    });
    }
  }
}

function reset(){
  generate();
  setNumbers();
  $('.square').each(function(){
    $(this).removeClass('backsplash');
    $(this).removeClass('win');
      });
  }

function generate(){
for(let i = 0; i < 100; i++){
  numbers.splice((Math.floor(Math.random() * 16) + 1), 0, numbers[0]);
  numbers.shift();
  }
}

function init(){
  generate();
  setNumbers();
}

function setNumbers(){
  for(let i = 0; i < squares.length; i++){
    $( "td:nth(" + i + ")").text(numbers[i]);

  }
}

});
