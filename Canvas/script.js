

var myCanvas = document.querySelector('#my_canvas');
var conText = myCanvas.getContext('2d');



conText.fillStyle = 'green';
conText.fillRect(12, 12, 370, 280);

var centerX = myCanvas.width / 2;
var centerY = myCanvas.height / 2;

conText.beginPath();
conText.arc(centerX, centerY, 50, 0,2*Math.PI, false);
conText.fillStyle = 'red';
conText.fill();