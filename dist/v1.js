"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = exports.get = exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _axios.default.create({
  baseURL: "http://localhost:9000" //<--host url

});

exports.default = _default;
var get = "/persons";
exports.get = get;
var post = "/persons"; // export const put = ""
// export const delete = ""

exports.post = post;
//# sourceMappingURL=v1.js.map