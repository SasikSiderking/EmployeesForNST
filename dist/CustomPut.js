"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("../v1"));

var _ReqErrorCatcher = _interopRequireDefault(require("../../ErrorCatching/ReqErrorCatcher"));

var _ReqNotification = _interopRequireDefault(require("../../ErrorCatching/ReqNotification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CustomPut = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, updatedPerson, id) {
    var responseData, status, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _v.default.put("".concat(req, "/").concat(id), updatedPerson);

          case 3:
            response = _context.sent;
            status = response.status;
            (0, _ReqNotification.default)(status);
            responseData = response.data;
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            (0, _ReqErrorCatcher.default)(_context.t0, status);

          case 12:
            return _context.abrupt("return", responseData);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function CustomPut(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = CustomPut;
exports.default = _default;
//# sourceMappingURL=CustomPut.js.map