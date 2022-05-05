"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _useCustomGet2 = _interopRequireDefault(require("../api/useCustomGet"));

var _react = _interopRequireDefault(require("react"));

require("./table.css");

var _MakePersonRows = _interopRequireDefault(require("./MakePersonRows"));

var _ReqNotification = _interopRequireDefault(require("../api/ReqNotification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableContent = function TableContent() {
  var get = "/persons";

  var _useCustomGet = (0, _useCustomGet2.default)(get),
      data = _useCustomGet.data,
      status = _useCustomGet.status,
      loading = _useCustomGet.loading;

  if (loading) return /*#__PURE__*/_react.default.createElement("h1", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _MakePersonRows.default)(data), (0, _ReqNotification.default)(status));
};

var _default = TableContent;
exports.default = _default;
//# sourceMappingURL=TableContent.js.map