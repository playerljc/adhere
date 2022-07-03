'use strict';
require('core-js/modules/es.array.iterator.js'),
  require('core-js/modules/es.object.to-string.js'),
  require('core-js/modules/es.string.iterator.js'),
  require('core-js/modules/es.weak-map.js'),
  require('core-js/modules/esnext.weak-map.delete-all.js'),
  require('core-js/modules/web.dom-collections.iterator.js'),
  require('core-js/modules/es.object.define-property.js'),
  require('core-js/modules/es.object.get-own-property-descriptor.js');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault'),
  _typeof = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.default = void 0),
  require('core-js/modules/es.object.assign.js');
var _configProvider = _interopRequireDefault(require('antd/lib/config-provider')),
  _form = _interopRequireDefault(require('antd/lib/form')),
  _button = _interopRequireDefault(require('antd/lib/button')),
  _tslib = require('tslib'),
  _adhereUiFormitemcreator = _interopRequireDefault(
    require('@baifendian/adhere-ui-formitemcreator'),
  ),
  _adhereUtilIntl = _interopRequireDefault(require('@baifendian/adhere-util-intl')),
  _adhereUtilResource = _interopRequireDefault(require('@baifendian/adhere-util-resource')),
  _react = _interopRequireDefault(require('react')),
  _reactDom = _interopRequireDefault(require('react-dom')),
  _modal = _interopRequireWildcard(require('./modal'));
function _getRequireWildcardCache(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (_getRequireWildcardCache = function (e) {
    return e ? r : t;
  })(e);
}
function _interopRequireWildcard(e, t) {
  if (!t && e && e.__esModule) return e;
  if (null === e || ('object' !== _typeof(e) && 'function' != typeof e)) return { default: e };
  t = _getRequireWildcardCache(t);
  if (t && t.has(e)) return t.get(e);
  var r,
    i,
    o = {},
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (r in e)
    'default' !== r &&
      Object.prototype.hasOwnProperty.call(e, r) &&
      ((i = a ? Object.getOwnPropertyDescriptor(e, r) : null) && (i.get || i.set)
        ? Object.defineProperty(o, r, i)
        : (o[r] = e[r]));
  return (o.default = e), t && t.set(e, o), o;
}
var DEFAULT_LOCAL = 'zh_CN',
  LOCAL = _adhereUtilResource.default.Dict.value.LocalsAntd.value,
  PromptLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };
function renderByIcon(e, t) {
  return _react.default.createElement(
    'div',
    { className: ''.concat(_modal.selectorPrefix, '-renderByIcon') },
    _react.default.createElement(
      'div',
      { className: ''.concat(_modal.selectorPrefix, '-renderByIcon-fixed') },
      e,
    ),
    _react.default.createElement(
      'div',
      { className: ''.concat(_modal.selectorPrefix, '-renderByIcon-auto') },
      t,
    ),
  );
}
var MessageDialogFactory = {
    Confirm: function (e) {
      var t = e.title,
        r = e.text,
        i = void 0 === r ? null : r,
        o = e.width,
        a = e.zIndex,
        l = e.local,
        r = e.icon,
        r = void 0 === r ? null : r,
        n = e.onSuccess,
        c = this.Modal({
          config: {
            title: t,
            centered: !0,
            width: (void 0 === o ? 300 : o) || 300,
            closable: !1,
            zIndex: void 0 === a ? 1e3 : a,
            footer: [
              _react.default.createElement(
                _button.default,
                {
                  key: 'submit',
                  type: 'primary',
                  title: _adhereUtilIntl.default.v('确定'),
                  onClick: function () {
                    n
                      ? n().then(function () {
                          c();
                        })
                      : c();
                  },
                },
                _adhereUtilIntl.default.v('确定'),
              ),
            ],
          },
          local: l,
          children: r ? renderByIcon(r, i) : i,
        }).close;
    },
    Alert: function (e) {
      var t = e.title,
        r = e.text,
        i = void 0 === r ? null : r,
        o = e.width,
        a = e.zIndex,
        r = e.local,
        e = e.icon;
      this.Modal({
        config: {
          title: t,
          centered: !0,
          width: (void 0 === o ? 300 : o) || 300,
          closable: !1,
          zIndex: void 0 === a ? 1e3 : a,
        },
        local: r,
        children: e ? renderByIcon(e, i) : i,
      });
    },
    Prompt: function (e) {
      var t = e.title,
        r = e.config,
        i = e.layout,
        o = void 0 === i ? PromptLayout : i,
        a = e.width,
        l = e.zIndex,
        i = e.local,
        n = e.onSuccess,
        c = _react.default.createRef(),
        u = this.Modal({
          config: {
            title: t,
            centered: !0,
            width: (void 0 === a ? 300 : a) || 300,
            closable: !1,
            zIndex: void 0 === l ? 1e3 : l,
            footer: [
              _react.default.createElement(
                _button.default,
                {
                  key: 'submit',
                  type: 'primary',
                  title: _adhereUtilIntl.default.v('确定'),
                  onClick: function () {
                    n
                      ? c.current.validateFields().then(function (e) {
                          n(e.value).then(function () {
                            u();
                          });
                        })
                      : u();
                  },
                },
                _adhereUtilIntl.default.v('确定'),
              ),
            ],
          },
          local: i,
          children: _react.default.createElement(
            _form.default,
            { name: 'Prompt', ref: c, style: { width: '100%' } },
            _react.default.createElement(_adhereUiFormitemcreator.default, {
              columns: [
                (0, _tslib.__assign)(
                  (0, _tslib.__assign)(
                    {},
                    r || {
                      label: 'normal',
                      type: _adhereUiFormitemcreator.default.TEXT,
                      initialValue: '',
                    },
                  ),
                  { name: 'value' },
                ),
              ],
              layout: o || PromptLayout,
            }),
          ),
        }).close;
    },
    InputPrompt: function (e) {
      var t = e.config,
        e = (0, _tslib.__rest)(e, ['config']);
      MessageDialogFactory.Prompt(
        (0, _tslib.__assign)((0, _tslib.__assign)({}, e), {
          config: (0, _tslib.__assign)((0, _tslib.__assign)({}, t), {
            type: _adhereUiFormitemcreator.default.INPUT,
          }),
        }),
      );
    },
    TextAreaPrompt: function (e) {
      var t = e.config,
        e = (0, _tslib.__rest)(e, ['config']);
      MessageDialogFactory.Prompt(
        (0, _tslib.__assign)((0, _tslib.__assign)({}, e), {
          config: (0, _tslib.__assign)((0, _tslib.__assign)({}, t), {
            type: _adhereUiFormitemcreator.default.TEXTAREA,
          }),
        }),
      );
    },
    PassWordPrompt: function (e) {
      var t = e.config,
        e = (0, _tslib.__rest)(e, ['config']);
      MessageDialogFactory.Prompt(
        (0, _tslib.__assign)((0, _tslib.__assign)({}, e), {
          config: (0, _tslib.__assign)((0, _tslib.__assign)({}, t), {
            type: _adhereUiFormitemcreator.default.PASSWORD,
          }),
        }),
      );
    },
    NumberPrompt: function (e) {
      var t = e.config,
        e = (0, _tslib.__rest)(e, ['config']);
      MessageDialogFactory.Prompt(
        (0, _tslib.__assign)((0, _tslib.__assign)({}, e), {
          config: (0, _tslib.__assign)((0, _tslib.__assign)({}, t), {
            type: _adhereUiFormitemcreator.default.NUMBER,
          }),
        }),
      );
    },
    Modal: function (e) {
      var t = e.config,
        r = e.children,
        i = void 0 === r ? null : r,
        r = e.defaultCloseBtn,
        r = void 0 === r || r,
        e = e.local,
        e = void 0 === e ? DEFAULT_LOCAL : e,
        t = Object.assign({ maskClosable: !1 }, void 0 === t ? {} : t),
        o = document.createElement('div');
      function a() {
        var e, t;
        _reactDom.default.unmountComponentAtNode(o) &&
          null !==
            (t =
              null === (e = null == o ? void 0 : o.parentElement) || void 0 === e
                ? void 0
                : e.removeChild) &&
          void 0 !== t &&
          t.call(e, o);
      }
      return (
        _reactDom.default.render(
          _react.default.createElement(
            _configProvider.default,
            { locale: LOCAL[e || DEFAULT_LOCAL] },
            _react.default.createElement(_modal.default, { close: a, config: t, closeBtn: r }, i),
          ),
          o,
        ),
        document.body.appendChild(o),
        { el: o, close: a }
      );
    },
    close: function (e) {
      var t, r;
      _reactDom.default.unmountComponentAtNode(e) &&
        null !==
          (r =
            null === (t = null == e ? void 0 : e.parentElement) || void 0 === t
              ? void 0
              : t.removeChild) &&
        void 0 !== r &&
        r.call(t, e);
    },
  },
  _default = MessageDialogFactory;
exports.default = _default;
//# sourceMappingURL=messagedialog.js.map
