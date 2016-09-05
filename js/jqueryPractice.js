$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow"); // {}? WHY curly brace here
  return false;
});

if (typeof jQuery == 'undefined') {
    console.log('jQuery has not loaded. ');
}

$("#disable_menu").bind("contextmenu",function(e){
  return false;
});

$("#broken_fix").error(function(){
  $(this).hide();
});

function blink_text() {
  $('.blink').fadeOut(100);
  $('.blink').fadeIn(100);
}
setInterval (blink_text, 200);

var maxLength = 15;
$('textarea').keyup(function() { // keyup/ keydown
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
});
