"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _v = _interopRequireDefault(require("./v1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function CustomPost(_x, _x2, _x3) {
  return _CustomPost.apply(this, arguments);
}

function _CustomPost() {
  _CustomPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, firstName, lastName) {
    var Person, status, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Person = {
              firstName: firstName,
              lastName: lastName
            };
            status = null;
            _context.prev = 2;
            _context.next = 5;
            return _v.default.post(req, Person);

          case 5:
            response = _context.sent;
            status = response.status;
            console.log(status);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            console.log("Error: " + _context.t0);

          case 13:
            return _context.abrupt("return", status);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));
  return _CustomPost.apply(this, arguments);
}

var _default = CustomPost;
exports.default = _default;
//# sourceMappingURL=CustomPost.js.map