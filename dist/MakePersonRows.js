"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PersonRow = _interopRequireDefault(require("./PersonRow"));

var _type = require("@testing-library/user-event/dist/type");

var _BrokenRow = _interopRequireDefault(require("../ErrorCatching/BrokenRow"));

var _generateUniqueID = require("web-vitals/dist/modules/lib/generateUniqueID");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MakePersonRows = function MakePersonRows(persons, deleteButtonHandler, editButtonHandler) {
  var createPersonRow = function createPersonRow(person) {
    if (typeof person.id !== "number" || person.firstName === "" || person.lastName === "" || typeof person.firstName !== "string" || typeof person.lastName !== "string") return /*#__PURE__*/_react.default.createElement(_BrokenRow.default, {
      key: _generateUniqueID.generateUniqueID // id={person.id}
      ,
      firstName: person.firstName,
      lastName: person.lastName
    });
    return /*#__PURE__*/_react.default.createElement(_PersonRow.default, {
      key: person.id,
      id: person.id,
      firstName: person.firstName,
      lastName: person.lastName,
      deleteButtonHandler: deleteButtonHandler,
      editButtonHandler: editButtonHandler
    });
  };

  return /*#__PURE__*/_react.default.createElement("main", null, persons.map(createPersonRow));
};

var _default = MakePersonRows;
exports.default = _default;
//# sourceMappingURL=MakePersonRows.js.map