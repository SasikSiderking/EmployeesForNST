"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putReq = exports.postReq = exports.getReq = exports.deleteReq = exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _axios.default.create({
  baseURL: 'http://localhost:9000' // <--host url

});

exports.default = _default;
var getReq = '/persons'; // <-- route for get persons

exports.getReq = getReq;
var postReq = '/persons'; // <-- route for post person

exports.postReq = postReq;
var putReq = '/persons'; // <-- route for update person

exports.putReq = putReq;
var deleteReq = '/persons'; // <-- route for delete person

exports.deleteReq = deleteReq;
//# sourceMappingURL=v1.js.map