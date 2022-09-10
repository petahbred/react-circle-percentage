"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.resizeCanvas = resizeCanvas;

var _react = require("react");

var useCanvas = function useCanvas(draw) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var canvasRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var canvas = canvasRef.current;
    var context = canvas.getContext('2d');
    var frameCount = 0;
    var animationFrameId;
    options.predraw(context, canvas);

    var render = function render() {
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
    return function () {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  return canvasRef;
};

function resizeCanvas(context, canvas) {
  var _canvas$getBoundingCl = canvas.getBoundingClientRect(),
      width = _canvas$getBoundingCl.width,
      height = _canvas$getBoundingCl.height;

  if (canvas.width !== width || canvas.height !== height) {
    var _window = window,
        _window$devicePixelRa = _window.devicePixelRatio,
        ratio = _window$devicePixelRa === void 0 ? 1 : _window$devicePixelRa;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    return true;
  }

  return false;
}

var _default = useCanvas;
exports.default = _default;