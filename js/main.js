//Trianglify
var options = { 
      width: window.innerWidth, 
      height: window.innerHeight, 
      cell_size: 40, 
      variance: 1, 
      color_space: 'lab', 
      color_function: false, 
      stroke_width: 1.51, 
      seed: null 
};

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function makePoly(pattern) {
  $(".poly").each(function() {
    $(this).css({"background-image": "url(" + pattern.png() + ")", "background-repeat": "no-repeat", "background-size": "cover"});
  });
}
makePoly( Trianglify(options) );

// RESIZE TIMEOUT
$(window).resize(function(){
  clearTimeout(this.id);
  this.id = setTimeout(doneResizing, 200);
});

// GENERATE PATTERN WHEN RESIZING FINISHED
function doneResizing(){
  var pattern = Trianglify(options);
  makePoly(pattern);
}