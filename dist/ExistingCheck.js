"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NetworkRequest = _interopRequireDefault(require("../api/NetworkRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExistingCheck = function ExistingCheck(Object) {
  var data = (0, _NetworkRequest.default)("get", Object);
  return !!data;
};

var _default = ExistingCheck;
exports.default = _default;
//# sourceMappingURL=ExistingCheck.js.map