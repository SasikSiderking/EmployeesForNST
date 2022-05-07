"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CustomGet = _interopRequireDefault(require("./CRUD/CustomGet"));

var _CustomPost = _interopRequireDefault(require("./CRUD/CustomPost"));

var _CustomDelete = _interopRequireDefault(require("./CRUD/CustomDelete"));

var _CustomPut = _interopRequireDefault(require("./CRUD/CustomPut"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NetworkRequest = function NetworkRequest(request, Person) {
  switch (request) {
    case "get":
      return (0, _CustomGet.default)("/persons", Person ? Person.id : null);

    case "post":
      return (0, _CustomPost.default)("/persons", Person);

    case "delete":
      return (0, _CustomDelete.default)("/persons", Person.id);

    case "put":
      return (0, _CustomPut.default)("/persons", Person);
  }
};

var _default = NetworkRequest;
exports.default = _default;
//# sourceMappingURL=NetworkRequest.js.map