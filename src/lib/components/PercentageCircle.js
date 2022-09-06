import Canvas from './Canvas';

const PercentageCircle = ({ percentage, ...rest }) => {
  const { textColor = 'black', lineWidth = 1 } = rest;

  function getColor() {
    if (percentage > 70) {
      return '#4dc97d';
    } else if (percentage <= 70 && percentage > 60) {
      return '#ff9e3d';
    } else {
      return '#ff3d3d';
    }
  }

  function draw(context) {
    const p = percentage / 100;
    var degrees = p * 360.0;
    var radians = (degrees - 90) * (Math.PI / 180);

    var x = 25;
    var y = 25;
    var r = 12.5;
    var s = (-90 * Math.PI) / 180;

    context.beginPath();
    context.translate(0.5, 0.5);
    context.strokeStyle = getColor();
    context.lineWidth = lineWidth;
    context.arc(x, y, r, s, radians, false);

    context.stroke();
    context.translate(-0.5, -0.5);

    context.font = 'bold 12px Helvetica';
    context.fillStyle = textColor;
    context.fillText(percentage.toString(), 18, 30);
  }

  return <Canvas draw={draw} width='50px' height='50px'></Canvas>;
};

export default PercentageCircle;
