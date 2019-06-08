$(document).ready(function() {
  $("#button1").click(function() {
    $("#div1").fadeOut();
  });

  $("#button2").click(function() {
    $("#div2").fadeOut();
  });

  $("#button3").click(function() {
    $("#div3").fadeOut();
  });

$('.minus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }
  $input.val(value);
});

$('.plus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value <= 4) {
    value = value + 1;
  } else {
    value <= 4;
    document.getElementById("input-1").style.color = "red";
  }
  $input.val(value);
});

$('.like-btn').on('click', function() {
  $(this).toggleClass('is-active');
});
});
