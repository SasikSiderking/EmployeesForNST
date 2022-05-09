"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CustomGet = _interopRequireDefault(require("./CRUD/CustomGet"));

var _CustomPost = _interopRequireDefault(require("./CRUD/CustomPost"));

var _CustomDelete = _interopRequireDefault(require("./CRUD/CustomDelete"));

var _CustomPut = _interopRequireDefault(require("./CRUD/CustomPut"));

var _v = require("./v1");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NetworkRequest = function NetworkRequest(request, Person, id) {
  switch (request) {
    case 'get':
      return (0, _CustomGet.default)(_v.getReq, Person ? Person.id : null);

    case 'post':
      return (0, _CustomPost.default)(_v.postReq, Person);

    case 'delete':
      return (0, _CustomDelete.default)(_v.deleteReq, Person.id);

    case 'put':
      return (0, _CustomPut.default)(_v.putReq, Person, id);

    default:
      {
        return 0;
      }
  }
};

var _default = NetworkRequest;
exports.default = _default;
//# sourceMappingURL=NetworkRequest.js.map