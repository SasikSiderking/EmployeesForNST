"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _v = _interopRequireDefault(require("../v1"));

var _ErrorCatcher = _interopRequireDefault(require("../../ErrorCatching/ErrorCatcher"));

var _ReqNotification = _interopRequireDefault(require("../../ErrorCatching/ReqNotification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CustomPost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, Person) {
    var status, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            status = null;
            _context.prev = 1;
            _context.next = 4;
            return _v.default.post(req, Person);

          case 4:
            response = _context.sent;
            status = response.status;
            (0, _ReqNotification.default)(status);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            (0, _ErrorCatcher.default)(_context.t0, status);

          case 12:
            return _context.abrupt("return", status);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function CustomPost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = CustomPost;
exports.default = _default;
//# sourceMappingURL=CustomPost.js.map