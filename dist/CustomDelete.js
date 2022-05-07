"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _v = _interopRequireDefault(require("../v1"));

var _ReqNotification = _interopRequireDefault(require("../../ErrorCatching/ReqNotification"));

var _ErrorCatcher = _interopRequireDefault(require("../../ErrorCatching/ErrorCatcher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CustomDelete = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, id) {
    var responseData, status, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            responseData = undefined;
            status = undefined;
            _context.prev = 2;
            _context.next = 5;
            return _v.default.delete(req + "/" + id);

          case 5:
            response = _context.sent;
            status = response.status;
            (0, _ReqNotification.default)(status);
            responseData = response.data;
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            (0, _ErrorCatcher.default)(_context.t0, status);

          case 14:
            return _context.abrupt("return", responseData);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 11]]);
  }));

  return function CustomDelete(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = CustomDelete;
exports.default = _default;
//# sourceMappingURL=CustomDelete.js.map