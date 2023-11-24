export function getValue(isUseMedia, rootValue, size) {
  return isUseMedia ? createPxReplace(rootValue, size, 5, 0) : `${size}px`;
}

export function createPxReplace(rootValue, pixels, unitPrecision, minPixelValue) {
  if (pixels < minPixelValue) return pixels;
  const fixedVal = toFixed(pixels / rootValue, unitPrecision);
  return fixedVal === 0 ? '0' : fixedVal + 'rem';
}

export function toFixed(number, precision) {
  const multiplier = Math.pow(10, precision + 1),
    wholeNumber = Math.floor(number * multiplier);
  return (Math.round(wholeNumber / 10) * 10) / multiplier;
}
