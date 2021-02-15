var __assign =
  (this && this.__assign) ||
  function () {
    return (__assign =
      Object.assign ||
      function (t) {
        for (var e, r = 1, s = arguments.length; r < s; r++)
          for (const n in (e = arguments[r]))
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
      }).apply(this, arguments);
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const intl_1 = require('../intl');

const local = intl_1.getLocal([
  '输入的值在1~200之间',
  '输入的内容在100个字符之内',
  '全部',
  '是',
  '否',
  '男',
  '女',
  '有',
  '无',
  '提示',
  '操作成功',
  '系统异常',
  '确定',
  '取消',
  '确定删除吗',
  '真的要执行此操作码',
  '糟糕！，出了些问题',
  '新北区',
  '请求发生错误',
  '请求超时',
  '请求终止',
  '已提出请求，但未收到任何回复',
  '加载中',
]);

exports.default = { ...local };
// # sourceMappingURL=pt_PT.js.map
