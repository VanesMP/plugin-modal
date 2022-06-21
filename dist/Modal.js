"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

require("../lib/modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**Render of the modal when the form is validated
 * @function Modal
 * @param {JSX} children
 * @returns {JSX}
 */
var Modal = function Modal(_ref) {
  var message = _ref.message,
      closeUp = _ref.closeUp;
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "confirmation"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "textModal"
  }, message), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btnClose",
    onClick: closeUp
  }, "X"));
};

exports.Modal = Modal;