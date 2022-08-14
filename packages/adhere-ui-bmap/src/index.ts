let isLoad = false;

/**
 * {
  BMap,
  BMapWindLayer,
  BMapAirPressureLayer,
  HeatMapLayer,
  Vector,
  Util,
}
 */

/**
 * importBMapJS
 * @return Promise<any>
 */
function importBMapJS(ak: string): Promise<any> {
  function importReal(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.onload = () => {
        // @ts-ignore
        resolve(typeof window !== 'undefined' && window.BMap);
      };
      script.src = src;
      // @ts-ignore
      document.querySelector('head').appendChild(script);
    });
  }

  return new Promise((resolve) => {
    const preWrite = document.write;

    document.write = (html) => {
      const el = document.createElement('div');
      el.innerHTML = html;
      const first = el.firstElementChild;

      if (
        first?.tagName.toLowerCase() === 'script' &&
        first?.getAttribute('src')?.indexOf('http://api.map.baidu.com') !== -1
      ) {
        importReal(first.getAttribute('src')).then((res) => {
          resolve(res);
        });
      } else {
        preWrite(html);
      }
    };

    const script = document.createElement('script');
    script.src = `http://api.map.baidu.com/api?v=3.0&ak=${ak}`;
    document?.querySelector('head')?.appendChild(script);
  });
}

let BMap;
let BMapWindLayer;
let BMapAirPressureLayer;
let HeatMapLayer;
let Vector;
let Util;

export default (ak = 'bxFuXXDt1oKdlgu6mXCCnK51cDgDGBLp') =>
  new Promise((resolve) => {
    if (isLoad) {
      resolve({
        BMap,
        BMapWindLayer,
        BMapAirPressureLayer,
        HeatMapLayer,
        Vector,
        Util,
      });

      return;
    }

    importBMapJS(ak).then(() => {
      isLoad = true;

      Promise.all([
        import('./bmap'),
        import('./airpressurelayer'),
        import('./heatmaplayer'),
        import('./windlayer'),
        import('./util'),
        import('./vector'),
      ]).then(([_BMap, _BMapAirPressureLayer, _HeatMapLayer, _BMapWindLayer, _Util, _Vector]) => {
        BMap = _BMap.default;
        BMapWindLayer = _BMapWindLayer.default;
        BMapAirPressureLayer = _BMapAirPressureLayer.default;
        HeatMapLayer = _HeatMapLayer.default;
        Vector = _Vector;
        Util = _Util.default;

        resolve({
          BMap,
          BMapWindLayer,
          BMapAirPressureLayer,
          HeatMapLayer,
          Vector,
          Util,
        });
      });
    });
  });
