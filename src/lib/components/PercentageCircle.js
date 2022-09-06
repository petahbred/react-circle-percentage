import Canvas from './Canvas';

const PercentageCircle = ({ percentage, ...rest }) => {
  const { textColor = 'black', lineWidth = 2, width = 60, height = 60 } = rest;

  function getColor() {
    if (percentage > 70) {
      return '#4dc97d';
    } else if (percentage <= 70 && percentage > 60) {
      return '#ff9e3d';
    } else {
      return '#ff3d3d';
    }
  }

  function draw(context, frameCount) {
    const p = frameCount / 100;
    var degrees = p * 360.0;
    var radians = (degrees - 90) * (Math.PI / 180);

    var x = width / 2;
    var y = height / 2;
    var r = x / 2;
    var s = (-90 * Math.PI) / 180;

    context.translate(0.5, 0.5);
    context.beginPath();
    context.strokeStyle = getColor();
    context.lineWidth = lineWidth;
    context.arc(x, y, r, s, radians, false);

    context.stroke();
    context.translate(-0.5, -0.5);
  }

  const wrapperStyles = {
    position: 'relative',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'font-size': '12px',
    'font-weight': 'bold',
    width: `${width}px`,
    height: `${height}px`
  };

  const textStyles = {
    position: 'absolute',
    color: textColor,
  };

  return (
    <div style={wrapperStyles}>
      <span style={textStyles}>{percentage}</span>
      <Canvas
        draw={draw}
        maxFrames={percentage}
        width={width}
        height={height}
      ></Canvas>
    </div>
  );
};

export default PercentageCircle;
