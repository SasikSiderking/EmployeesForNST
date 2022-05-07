"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _NetworkRequest = _interopRequireDefault(require("../api/NetworkRequest"));

var _PersonContext = _interopRequireDefault(require("../Context/PersonContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var EditEmployeeForm = function EditEmployeeForm(_ref) {
  var setActive = _ref.setActive,
      id = _ref.id,
      firstName = _ref.firstName,
      setFirstName = _ref.setFirstName,
      lastName = _ref.lastName,
      setLastName = _ref.setLastName;

  var _useContext = (0, _react.useContext)(_PersonContext.default),
      persons = _useContext.persons,
      setPersons = _useContext.setPersons;

  var handleEdit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, id, firstName, lastName) {
      var updatedPerson, responseData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              updatedPerson = {
                id: id,
                firstName: firstName,
                lastName: lastName
              };
              _context.next = 4;
              return (0, _NetworkRequest.default)("put", updatedPerson);

            case 4:
              responseData = _context.sent;

              if (responseData !== undefined) {
                setPersons(persons.map(function (person) {
                  return person.id === id ? _objectSpread({}, responseData) : person;
                }));
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleEdit(_x, _x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement("form", {
    className: "Employee-Form-Wrapper",
    onSubmit: function onSubmit(e) {
      return handleEdit(e, id, firstName, lastName);
    }
  }, /*#__PURE__*/_react.default.createElement("header", null, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430"), /*#__PURE__*/_react.default.createElement("div", {
    className: "Form-Content"
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: function onClick() {
      setActive(false);
    },
    className: "Back-Button"
  }, "\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443"), /*#__PURE__*/_react.default.createElement("input", {
    autoFocus: true,
    type: "text",
    required: true,
    value: firstName,
    onChange: function onChange(e) {
      return setFirstName(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    required: true,
    value: lastName,
    onChange: function onChange(e) {
      return setLastName(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "Save-Button"
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")));
};

var _default = EditEmployeeForm;
exports.default = _default;
//# sourceMappingURL=EditEmployeeForm.js.map