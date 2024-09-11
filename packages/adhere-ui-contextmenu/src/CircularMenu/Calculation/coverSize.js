const antialiasing = 3;

export function coverRadius(radius, percent) {
  const square = radius * radius * 2;
  return Math.sqrt(square) * percent + antialiasing;
}

export default function (coverRadius) {
  let l = coverRadius * 2;
  let m = -l / 2;

  l += 'px';
  m += 'px';

  return {
    width: l,
    height: l,
    marginLeft: m,
    marginTop: m,
  };
}
