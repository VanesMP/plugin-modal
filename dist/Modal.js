"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**Render of the modal when the form is validated
 * @function Modal
 * @param {JSX} children
 * @returns {JSX}
 */
var Modal = function Modal(_ref) {
  var message = _ref.message,
      closeUp = _ref.closeUp;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: "confirmation",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "textModal",
      children: message
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      type: "button",
      className: "btnClose",
      onClick: closeUp,
      children: "X"
    })]
  });
};

exports.Modal = Modal;