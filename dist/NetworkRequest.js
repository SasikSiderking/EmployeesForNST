"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CustomGet = _interopRequireDefault(require("./CustomGet"));

var _CustomPost = _interopRequireDefault(require("./CustomPost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NetworkRequest = function NetworkRequest(request, firstName, lastName) {
  switch (request) {
    case "get":
      return (0, _CustomGet.default)("/persons");

    case "post":
      return (0, _CustomPost.default)("/persons", firstName, lastName);
  }
};

var _default = NetworkRequest;
exports.default = _default;
//# sourceMappingURL=NetworkRequest.js.map