'use strict';
require('core-js/modules/es.object.define-property.js');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _slider = _interopRequireDefault(require('antd/lib/slider'));
require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.split.js');
var _tslib = require('tslib'),
  _react = _interopRequireDefault(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _classnames = _interopRequireDefault(require('classnames')),
  _omit = _interopRequireDefault(require('omit.js')),
  _adhereUtilIntl = _interopRequireDefault(require('@baifendian/adhere-util-intl')),
  selectorPrefix = 'adhere-ui-fontsizesetting',
  FontSizeSetting = (function (t) {
    function e(e) {
      e = t.call(this, e) || this;
      return (e.state = { value: e.props.value }), e;
    }
    return (
      (0, _tslib.__extends)(e, t),
      (e.prototype.componentWillReceiveProps = function (e, t) {
        e.value !== this.state.value && this.setState({ value: e.value });
      }),
      (e.prototype.render = function () {
        var t = this,
          e = this.props,
          a = e.className,
          e = e.style;
        return _react.default.createElement(
          'div',
          {
            className: (0, _classnames.default)(selectorPrefix, a.split(/\s+/)),
            style: (0, _tslib.__assign)({}, e),
            ref: function (e) {
              return (t.el = e);
            },
          },
          _react.default.createElement(
            'div',
            { className: ''.concat(selectorPrefix, '-rangeWrap') },
            _react.default.createElement(
              'div',
              { className: ''.concat(selectorPrefix, '-separatedtool') },
              _react.default.createElement(
                'div',
                { className: ''.concat(selectorPrefix, '-separated') },
                _react.default.createElement('span', null, _adhereUtilIntl.default.v('小')),
              ),
              _react.default.createElement(
                'div',
                { className: ''.concat(selectorPrefix, '-separated') },
                _react.default.createElement('span', null, _adhereUtilIntl.default.v('中')),
              ),
              _react.default.createElement(
                'div',
                { className: ''.concat(selectorPrefix, '-separated') },
                _react.default.createElement('span', null, _adhereUtilIntl.default.v('大')),
              ),
              _react.default.createElement(
                'div',
                { className: ''.concat(selectorPrefix, '-separated') },
                _react.default.createElement('span', null, _adhereUtilIntl.default.v('特大')),
              ),
            ),
            _react.default.createElement(
              _slider.default,
              (0, _tslib.__assign)(
                {},
                (0, _omit.default)(this.props, ['className', 'style', 'value', 'onChange']),
                {
                  value: this.state.value,
                  onChange: function (e) {
                    t.setState({ value: e }, function () {
                      t.props.onChange(e);
                    });
                  },
                },
              ),
            ),
          ),
        );
      }),
      e
    );
  })(_react.default.Component);
(FontSizeSetting.defaultProps = { className: '', style: {} }),
  (FontSizeSetting.propTypes = {
    className: _propTypes.default.string,
    style: _propTypes.default.object,
    min: _propTypes.default.number,
    max: _propTypes.default.number,
    step: _propTypes.default.number,
    value: _propTypes.default.number,
    onChange: _propTypes.default.func,
  });
var _default = FontSizeSetting;
exports.default = _default;
//# sourceMappingURL=fontsizesetting.js.map
