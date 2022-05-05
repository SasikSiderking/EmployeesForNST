"use strict";

require("core-js/stable");

require("react-app-polyfill/ie11");

require("react-app-polyfill/stable");

require("core-js/stable/symbol");

var _react = _interopRequireDefault(require("react"));

var _client = require("react-dom/client");

require("./index.css");

var _App = _interopRequireDefault(require("./App"));

var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = document.getElementById('root');
var root = (0, _client.createRoot)(container);
root.render( /*#__PURE__*/_react.default.createElement(_App.default, {
  tab: "home"
})); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

(0, _reportWebVitals.default)();
//# sourceMappingURL=index.js.map