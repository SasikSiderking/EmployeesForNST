"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./table.css");

var _MakePersonRows = _interopRequireDefault(require("./MakePersonRows"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableContent = function TableContent(_ref) {
  var persons = _ref.persons,
      loading = _ref.loading;
  if (loading) return /*#__PURE__*/_react.default.createElement("h1", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _MakePersonRows.default)(persons));
};

var _default = TableContent;
exports.default = _default;
//# sourceMappingURL=TableContent.js.map