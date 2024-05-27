export function getEvnVars() {
  return CustomEvnVars;
}

export function isUseMedia() {
  return getEvnVars().media === 'true';
}
