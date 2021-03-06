const heightInput = $('#height_input');
const widthInput = $('#width_input');
const colorInput = $('#color_Picker');

//this makeGrid function removes the previous table and also creates a new one using the n by m axis

makeGrid = () => {

  let heightValue = heightInput.val();
  let widthValue = widthInput.val();

  let pixelCanvas = $('#pixelCanvas');
  pixelCanvas.children().remove(); // removes previous table grid


// grid building

  for (let n = 0; n < heightValue; n++) {
    pixelCanvas.append("<tr></tr>");
  }
  for (let m = 0; m < widthValue; m++) {
    $('tr').append("<td></td>");
  }
}


//change cell colour when chosen

$('table').on('click', 'td', function() {
  $(this).css('backgroundColor', colorInput.val() );
});


// this calls the make grid function after a size is submitted

form = $('#sizePicker');
form.submit(function(event) {
    event.preventDefault(); // stops page from refreshing upon submit
    makeGrid();
});
