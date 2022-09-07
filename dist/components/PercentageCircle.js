"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Canvas = _interopRequireDefault(require("./Canvas"));

const _excluded = ["percentage"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const PercentageCircle = _ref => {
  let {
    percentage
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    textColor = 'black',
    lineWidth = 2,
    width = 60,
    height = 60
  } = rest;

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
    var s = -90 * Math.PI / 180;
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
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    width: "".concat(width, "px"),
    height: "".concat(height, "px")
  };
  const textStyles = {
    position: 'absolute',
    color: textColor
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrapperStyles
  }, /*#__PURE__*/React.createElement("span", {
    style: textStyles
  }, percentage), /*#__PURE__*/React.createElement(_Canvas.default, {
    draw: draw,
    maxFrames: percentage,
    width: width,
    height: height
  }));
};

var _default = PercentageCircle;
exports.default = _default;