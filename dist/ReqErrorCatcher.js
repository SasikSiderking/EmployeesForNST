"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ReqNotification = _interopRequireDefault(require("./ReqNotification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReqErrorCatcher = function ReqErrorCatcher(err) {
  if (err.response) {
    // console.log(err.response.data);
    // console.log(err.response.status);
    // console.log(err.response.headers);
    (0, _ReqNotification.default)(err.response.status);
  } else {
    (0, _ReqNotification.default)(404); //   console.log(`Error: ${err}`);
  }
};

var _default = ReqErrorCatcher;
exports.default = _default;
//# sourceMappingURL=ReqErrorCatcher.js.map