$(function() {
  let squares         = $('.square');
  let gameOn          = false;
  const numbers       = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
  let timer           = false;
  let mins            = $('#mins');
  let hrs             = $('#hours');
  let goTime;

init();

  squares.hover(function(){
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
  squares.each(function(){
    $(this).removeClass('flash');
    $(this).addClass('backsplash');
  });
  if(timer === false){
    timer  = true;
    goTime = setInterval(counter, 1000);
  }
}


function check(){
  if($('.backsplash').length === 0 && $('.selected').length === 0){
    gameOn = false;
    clearInterval(goTime);
    alert('CONGRATS!');
    var score = hrs.text() + mins.text();
    let name      = prompt('whats your name?');
    console.log(score);
    $.ajax({
      url: '/games',
      method: 'POST' ,
      data: {highscore: {name: name, score: parseInt(score)}},
      dataType: JSON
    }).success(function(ha){
      console.log("ha");
    })
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
  timer  = false;
  clearInterval(goTime);
  mins.text('00');
  hrs.text('00');
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
  $('#name').text(name);
}

function setNumbers(){
  for(let i = 0; i < squares.length; i++){
    $( "td:nth(" + i + ")").text(numbers[i]);

  }
}
function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

function counter(){
  if(timer){
    if(mins.text() == 59){
      hrs.text(pad(parseInt(hrs.text())+1));
      mins.text(00);
    } else {
      mins.text(pad(parseInt(mins.text(), 10)+1));
    }
  }
}

$('.win').click(function(){
  check();
})
});
