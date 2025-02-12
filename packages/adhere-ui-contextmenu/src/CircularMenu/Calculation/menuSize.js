export default function (config) {
  let l = config.diameter;
  let m = -config.diameter / 2;

  l += 'px';
  m += 'px';

  return {
    width: l,
    height: l,
    marginLeft: m,
    marginTop: m,
  };
}
