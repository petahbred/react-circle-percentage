import React from 'react';
import useCanvas, { resizeCanvas } from '../hooks/useCanvas';

const _predraw = (context, canvas) => {
  context.save();
  resizeCanvas(context, canvas);
};

const _postdraw = (context) => {
  context.restore();
};

const Canvas = (props) => {
  const {
    draw,
    drawOnce = () => null,
    maxFrames = -1,
    predraw = _predraw,
    postdraw = _postdraw,
    ...rest
  } = props;

  const canvasRef = useCanvas(draw, {
    predraw(context, canvas) {
      predraw(context, canvas);
      drawOnce(context);
    },
    postdraw,
    maxFrames,
  });

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;
