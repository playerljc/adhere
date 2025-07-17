export function getEvnVars() {
  return CustomEvnVars;
}

export function isUseMedia() {
  return getEvnVars().media === 'true';
}

/**
 * initDirection
 * @description 初始化方向
 */
export function initDirection(direction) {
  document.body.removeAttribute('dir');
  document.body.setAttribute('dir', direction);
}
