var setStyle = function(selectedStyle) {
  $('.chapter').removeClass('print');
  $('#print-switch button').removeClass('selected');

  if(selectedStyle === 'print-style') {
    $('.chapter').addClass('print');
    $('#print-style').addClass('selected');
  } else {
    $('#default-style').addClass('selected');
  }
};

var toggleSwitch = function(event) {
  $('#print-switch button').toggleClass('hidden');
};

$(document).ready(function() {
  $('#print-switch').click(toggleSwitch);

  // Simulate a click so we start in a collaped state.
  $('#print-switch').click();

  // begin with the default button "selected"
  $('#default-style').addClass('selected');

  $('#print-switch button').click(function(event) {
    event.stopPropagation();
    var selectedStyle = event.target.id;
    setStyle(selectedStyle);
  });
});
