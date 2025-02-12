import style from './style';

export default function (styles) {
  if (!styles instanceof Object) return this;

  for (let k in styles) {
    if (styles.hasOwnProperty(k)) style(this._container, k, styles[k]);
  }

  return this;
}
