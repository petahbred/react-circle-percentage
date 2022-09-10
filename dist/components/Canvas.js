"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _useCanvas = _interopRequireWildcard(require("../hooks/useCanvas"));

var _excluded = ["draw", "drawOnce", "maxFrames", "predraw", "postdraw"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _predraw = function _predraw(context, canvas) {
  context.save();
  (0, _useCanvas.resizeCanvas)(context, canvas);
};

var _postdraw = function _postdraw(context) {
  context.restore();
};

var Canvas = function Canvas(props) {
  var draw = props.draw,
      _props$drawOnce = props.drawOnce,
      drawOnce = _props$drawOnce === void 0 ? function () {
    return null;
  } : _props$drawOnce,
      _props$maxFrames = props.maxFrames,
      maxFrames = _props$maxFrames === void 0 ? -1 : _props$maxFrames,
      _props$predraw = props.predraw,
      _predraw2 = _props$predraw === void 0 ? _predraw : _props$predraw,
      _props$postdraw = props.postdraw,
      postdraw = _props$postdraw === void 0 ? _postdraw : _props$postdraw,
      rest = _objectWithoutProperties(props, _excluded);

  var canvasRef = (0, _useCanvas.default)(draw, {
    predraw: function predraw(context, canvas) {
      _predraw2(context, canvas);

      drawOnce(context);
    },
    postdraw: postdraw,
    maxFrames: maxFrames
  });
  return /*#__PURE__*/_react.default.createElement("canvas", _extends({
    ref: canvasRef
  }, rest));
};

var _default = Canvas;
exports.default = _default;