import CMenu from './CMenu';

export default function (selector) {
  return typeof selector === 'string'
    ? new CMenu(document.querySelector(selector))
    : new CMenu(selector);
}
