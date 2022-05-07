"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ReqNotification = _interopRequireDefault(require("./ReqNotification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorCatcher = function ErrorCatcher(err, status) {
  if (err.response) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    (0, _ReqNotification.default)(err.response.status);
  } else {
    (0, _ReqNotification.default)(status);
    console.log("Error: " + err);
  }
};

var _default = ErrorCatcher;
exports.default = _default;
//# sourceMappingURL=ErrorCatcher.js.map