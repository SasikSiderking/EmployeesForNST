"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./table.css");

var _MakePersonRows = _interopRequireDefault(require("./MakePersonRows"));

var _Modal = _interopRequireDefault(require("../ModalW/Modal"));

var _DeleteEmployeeForm = _interopRequireDefault(require("../Forms/DeleteEmployeeForm"));

var _EditEmployeeForm = _interopRequireDefault(require("../Forms/EditEmployeeForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TableContent = function TableContent(_ref) {
  var persons = _ref.persons,
      loading = _ref.loading;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      id = _useState2[0],
      setId = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      firstName = _useState4[0],
      setFirstName = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      lastName = _useState6[0],
      setLastName = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      modalDeleteActive = _useState8[0],
      setModalDeleteActive = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      modalEditActive = _useState10[0],
      setModalEditActive = _useState10[1];

  var deleteButtonHandler = function deleteButtonHandler(id, firstName, lastName) {
    setId(id);
    setFirstName(firstName);
    setLastName(lastName);
    setModalDeleteActive(true);
  };

  var editButtonHandler = function editButtonHandler(id, firstName, lastName) {
    setId(id);
    setFirstName(firstName);
    setLastName(lastName);
    setModalEditActive(true);
  };

  if (loading) return /*#__PURE__*/_react.default.createElement("h1", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _MakePersonRows.default)(persons, deleteButtonHandler, editButtonHandler), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    active: modalDeleteActive,
    form: /*#__PURE__*/_react.default.createElement(_DeleteEmployeeForm.default, {
      id: id,
      firstName: firstName,
      lastName: lastName,
      setActive: setModalDeleteActive
    })
  }), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    active: modalEditActive,
    form: /*#__PURE__*/_react.default.createElement(_EditEmployeeForm.default, {
      id: id,
      firstName: firstName,
      setFirstName: setFirstName,
      lastName: lastName,
      setLastName: setLastName,
      setActive: setModalEditActive
    })
  }));
};

var _default = TableContent;
exports.default = _default;
//# sourceMappingURL=TableContent.js.map