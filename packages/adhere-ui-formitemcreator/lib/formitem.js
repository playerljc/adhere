'use strict';
require('core-js/modules/es.object.define-property.js');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.default = void 0),
  require('core-js/modules/es.array.map.js');
var _upload = _interopRequireDefault(require('antd/lib/upload')),
  _rate = _interopRequireDefault(require('antd/lib/rate')),
  _slider = _interopRequireDefault(require('antd/lib/slider')),
  _treeSelect = _interopRequireDefault(require('antd/lib/tree-select')),
  _switch = _interopRequireDefault(require('antd/lib/switch')),
  _timePicker = _interopRequireDefault(require('antd/lib/time-picker')),
  _inputNumber = _interopRequireDefault(require('antd/lib/input-number')),
  _select = _interopRequireDefault(require('antd/lib/select')),
  _input = _interopRequireDefault(require('antd/lib/input')),
  _datePicker = _interopRequireDefault(require('antd/lib/date-picker')),
  _radio = _interopRequireDefault(require('antd/lib/radio')),
  _checkbox = _interopRequireDefault(require('antd/lib/checkbox')),
  _tslib = require('tslib'),
  _react = _interopRequireDefault(require('react')),
  _adhereUtilIntl = _interopRequireDefault(require('@baifendian/adhere-util-intl')),
  CheckboxGroup = _checkbox.default.Group,
  RadioGroup = _radio.default.Group,
  RangePicker = _datePicker.default.RangePicker,
  TextArea = _input.default.TextArea,
  Option = _select.default.Option,
  renderText = function (e) {
    e.value;
    e = (0, _tslib.__rest)(e, ['value']);
    return _react.default.createElement(
      _input.default,
      (0, _tslib.__assign)({}, e, { readOnly: !0 }),
    );
  },
  renderInput = function (e) {
    var r = e.type,
      t = e.maxLength,
      a = void 0 === t ? 100 : t,
      t = e.placeholder,
      t = void 0 === t ? _adhereUtilIntl.default.v('请输入') : t,
      e = (0, _tslib.__rest)(e, ['type', 'maxLength', 'placeholder']);
    return _react.default.createElement(
      _input.default,
      (0, _tslib.__assign)(
        { autoComplete: 'off', type: r, maxLength: a || 100, placeholder: t },
        e,
      ),
    );
  },
  renderSearch = function (e) {
    var r = e.maxLength,
      t = void 0 === r ? 800 : r,
      r = e.placeholder,
      r = void 0 === r ? _adhereUtilIntl.default.v('请输入') : r,
      e = (0, _tslib.__rest)(e, ['maxLength', 'placeholder']);
    return _react.default.createElement(
      _input.default.Search,
      (0, _tslib.__assign)({ autoComplete: 'off', maxLength: t || 800, placeholder: r }, e),
    );
  },
  renderInputArea = function (e) {
    var r = e.maxLength,
      t = void 0 === r ? 500 : r,
      a = e.rows,
      r = void 0 === a ? 4 : a,
      a = e.placeholder,
      a = void 0 === a ? _adhereUtilIntl.default.v('请输入') : a,
      e = (0, _tslib.__rest)(e, ['maxLength', 'rows', 'placeholder']);
    return _react.default.createElement(
      TextArea,
      (0, _tslib.__assign)(
        { autoComplete: 'off', maxLength: t || 500, rows: r, placeholder: a },
        e,
      ),
    );
  },
  renderPassword = function (e) {
    var r = e.type,
      t = e.maxLength,
      a = void 0 === t ? 800 : t,
      t = e.placeholder,
      t = void 0 === t ? _adhereUtilIntl.default.v('请输入') : t,
      e = (0, _tslib.__rest)(e, ['type', 'maxLength', 'placeholder']);
    return _react.default.createElement(
      _input.default.Password,
      (0, _tslib.__assign)(
        { autoComplete: 'off', type: r, maxLength: a || 800, placeholder: t },
        e,
      ),
    );
  },
  renderInputNumber = function (e) {
    var r = e.placeholder,
      t = void 0 === r ? '请输入' : r,
      a = e.max,
      r = void 0 === a ? 1 / 0 : a,
      a = e.min,
      a = void 0 === a ? -1 / 0 : a,
      e = (0, _tslib.__rest)(e, ['placeholder', 'max', 'min']);
    return _react.default.createElement(
      _inputNumber.default,
      (0, _tslib.__assign)(
        { autoComplete: 'off', placeholder: t, max: r || 1 / 0, min: a || -1 / 0 },
        e,
      ),
    );
  },
  renderRadio = function (e) {
    e = (0, _tslib.__rest)(e, []);
    return _react.default.createElement(RadioGroup, (0, _tslib.__assign)({}, e));
  },
  renderCheckbox = function (e) {
    var r = e.options,
      e = (0, _tslib.__rest)(e, ['options']);
    return r.length && 1 === r.length
      ? _react.default.createElement(_checkbox.default, (0, _tslib.__assign)({}, e), r[0].label)
      : _react.default.createElement(CheckboxGroup, (0, _tslib.__assign)({ options: r }, e));
  },
  renderSelect = function (e) {
    function r(e) {
      return (e || []).map(function (e) {
        return _react.default.createElement(
          Option,
          { value: e.value, key: e.value, disabled: e.disabled },
          l ? l(e) : e.label,
        );
      });
    }
    var t = e.optGroup,
      a = e.options,
      n = e.placeholder,
      n = void 0 === n ? _adhereUtilIntl.default.v('请选择') : n,
      l = e.renderOption,
      e = (0, _tslib.__rest)(e, ['optGroup', 'options', 'placeholder', 'renderOption']);
    return _react.default.createElement(
      _select.default,
      (0, _tslib.__assign)({ placeholder: n }, e),
      t && t.length ? t.map(r) : r(a),
    );
  },
  renderRangePicker = function (e) {
    var r = e.format,
      e = (0, _tslib.__rest)(e, ['format']);
    return _react.default.createElement(RangePicker, (0, _tslib.__assign)({ format: r }, e));
  },
  renderDatePicker = function (e) {
    var r = e.format,
      e = (0, _tslib.__rest)(e, ['format']);
    return _react.default.createElement(
      _datePicker.default,
      (0, _tslib.__assign)({ format: r }, e),
    );
  },
  renderTimePicker = function (e) {
    e = (0, _tslib.__rest)(e, []);
    return _react.default.createElement(_timePicker.default, (0, _tslib.__assign)({}, e));
  },
  renderSwitch = function (e) {
    return _react.default.createElement(_switch.default, (0, _tslib.__assign)({}, e));
  },
  renderTreeSelect = function (e) {
    var r = e.data,
      t = e.allowClear,
      e = (0, _tslib.__rest)(e, ['data', 'allowClear']);
    return _react.default.createElement(
      _treeSelect.default,
      (0, _tslib.__assign)({ allowClear: t, treeData: r }, e),
    );
  },
  renderSlider = function (e) {
    e = (0, _tslib.__rest)(e, []);
    return _react.default.createElement(_slider.default, (0, _tslib.__assign)({}, e));
  },
  renderRate = function (e) {
    e = (0, _tslib.__rest)(e, []);
    return _react.default.createElement(_rate.default, (0, _tslib.__assign)({}, e));
  },
  renderUpload = function (e) {
    e = (0, _tslib.__rest)(e, []);
    return _react.default.createElement(_upload.default, (0, _tslib.__assign)({}, e));
  },
  _default = {
    renderText: renderText,
    renderInput: renderInput,
    renderSearch: renderSearch,
    renderPassword: renderPassword,
    renderInputArea: renderInputArea,
    renderInputNumber: renderInputNumber,
    renderRadio: renderRadio,
    renderCheckbox: renderCheckbox,
    renderSelect: renderSelect,
    renderDatePicker: renderDatePicker,
    renderRangePicker: renderRangePicker,
    renderTimePicker: renderTimePicker,
    renderSwitch: renderSwitch,
    renderTreeSelect: renderTreeSelect,
    renderSlider: renderSlider,
    renderRate: renderRate,
    renderUpload: renderUpload,
  };
exports.default = _default;
//# sourceMappingURL=formitem.js.map
