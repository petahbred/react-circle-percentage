"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.resizeCanvas = resizeCanvas;

var _react = require("react");

const useCanvas = function useCanvas(draw) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const canvasRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;
    options.predraw(context, canvas);

    const render = () => {
      if (frameCount >= options.maxFrames) {
        window.cancelAnimationFrame(animationFrameId);
        return;
      }

      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();
    options.postdraw(context);
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  return canvasRef;
};

function resizeCanvas(context, canvas) {
  const {
    width,
    height
  } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const {
      devicePixelRatio: ratio = 1
    } = window;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    return true;
  }

  return false;
}

var _default = useCanvas;
exports.default = _default;