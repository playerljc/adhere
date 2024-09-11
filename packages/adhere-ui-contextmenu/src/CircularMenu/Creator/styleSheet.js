const UID = {
  _current: 0,
  getNew: function () {
    this._current++;
    return this._current;
  },
};
export default function (element, prop, value, pseudo) {
  const _this = element;
  const _sheetId = 'sheetStyles';
  const _head = document.head || document.getElementsByTagName('head')[0];
  const _sheet = document.getElementById(_sheetId) || document.createElement('style');
  _sheet.id = _sheetId;
  const className = 's-S' + UID.getNew();

  _this.className += ' ' + className;

  _sheet.innerHTML +=
    ' .' + className + (pseudo ? ':' + pseudo : '') + '{' + prop + ':' + value + '}';
  _head.appendChild(_sheet);
  return this;
}
