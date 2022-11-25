import '@baifendian/adhere-ui-bmap/lib/heatmap.js';

import citys from './data.json';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

class HeatMapLayer {
  constructor(map) {
    this.map = map;
    this.init();
  }

  init() {
    const points = citys.map((t) => {
      return {
        lng: t[0],
        lat: t[1],
        count: getRandomArbitrary(1, 100),
      };
    });
    this.heatmapOverlay = new BMapLib.HeatmapOverlay({ radius: 20 });
    this.map.addOverlay(this.heatmapOverlay);
    this.heatmapOverlay.setDataSet({ data: points, max: 100 });
    this.heatmapOverlay.show();
  }
}

export default HeatMapLayer;
