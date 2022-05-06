"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _useCustomGet2 = _interopRequireDefault(require("../api/useCustomGet"));

var _react = _interopRequireWildcard(require("react"));

require("./table.css");

var _MakePersonRows = _interopRequireDefault(require("./MakePersonRows"));

var _ReqNotification = _interopRequireDefault(require("../api/ReqNotification"));

var _reactToastify = require("react-toastify");

var _v = require("../api/v1");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableContent = function TableContent() {
  var _useCustomGet = (0, _useCustomGet2.default)(_v.get),
      data = _useCustomGet.data,
      status = _useCustomGet.status,
      loading = _useCustomGet.loading;

  if (loading) return /*#__PURE__*/_react.default.createElement("h1", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _MakePersonRows.default)(data), /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, null), (0, _ReqNotification.default)(status));
};

var _default = TableContent;
exports.default = _default;
//# sourceMappingURL=TableContent.js.map