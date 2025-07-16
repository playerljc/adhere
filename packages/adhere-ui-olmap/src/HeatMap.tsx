import { Heatmap as HeatMapLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source.js';

import { OlMap } from './OLMap';
import Util from './Util';
import type { HeatMapConfig, HeatMapProps } from './types';

/**
 * 热力图图层配置接口
 */
export interface HeatMapLayerConfig extends HeatMapConfig {
  /** 图层层级 */
  zIndex?: number;
  /** 图层是否可见 */
  visible?: boolean;
}

/**
 * 热力图组件
 * @class HeatMap
 * @classdesc OpenLayers中的热力图组件，继承自OlMap
 */
export class HeatMap extends OlMap {
  /** 热力图向量源 */
  private vectorSource: VectorSource | undefined;
  /** 热力图图层 */
  private layer: HeatMapLayer | undefined;
  /** 热力图配置 */
  private readonly heatMapConfig: HeatMapConfig | undefined;

  constructor(props: HeatMapProps) {
    super(props);
    this.heatMapConfig = props.heatMapConfig;
  }

  /**
   * 组件挂载后初始化热力图
   */
  componentDidMount(): void {
    super.componentDidMount();

    // 如果有热力图配置，在地图加载完成后添加热力图
    if (this.heatMapConfig) {
      this.addHeatMapLayer(this.heatMapConfig);
    }
  }

  /**
   * addLayer - 添加一个热力图图层
   */
  addLayer(heatMapLayerConfig = {}) {
    const { layer, vectorSource } = Util.createHeatMapLayer(heatMapLayerConfig ?? {});

    this.layer = layer;
    this.vectorSource = vectorSource;

    this.map.addLayer(this.layer);
  }

  /**
   * 添加热力图图层
   * @param config - 热力图配置
   * @returns 热力图图层和向量源
   */
  addHeatMapLayer(config: HeatMapConfig): { layer: HeatMapLayer; vectorSource: VectorSource } {
    if (!this.map) {
      throw new Error('地图实例未初始化，请确保组件已挂载');
    }

    // 如果已存在热力图图层，先移除
    this.removeHeatMapLayer();

    const { layer, vectorSource } = Util.createHeatMapLayer(config);

    this.layer = layer;
    this.vectorSource = vectorSource;

    this.map.addLayer(this.layer);

    return { layer, vectorSource };
  }

  /**
   * 移除热力图图层
   */
  removeHeatMapLayer(): void {
    if (this.layer && this.map) {
      this.map.removeLayer(this.layer);
      this.layer = undefined;
    }

    if (this.vectorSource) {
      this.vectorSource.clear();
      this.vectorSource = undefined;
    }
  }

  /**
   * 获取热力图图层
   * @returns 热力图图层实例
   */
  getHeatMapLayer(): HeatMapLayer | undefined {
    return this.layer;
  }

  /**
   * 获取热力图向量源
   * @returns 热力图向量源实例
   */
  getHeatMapVectorSource(): VectorSource | undefined {
    return this.vectorSource;
  }

  /**
   * 更新热力图数据
   * @param features - 要添加的要素数组
   */
  updateHeatMapData(features: any[]): void {
    if (!this.vectorSource) {
      throw new Error('热力图向量源未初始化');
    }

    this.vectorSource.clear();
    this.vectorSource.addFeatures(features);
  }

  /**
   * 清空热力图数据
   */
  clearHeatMapData(): void {
    if (this.vectorSource) {
      this.vectorSource.clear();
    }
  }

  /**
   * 设置热力图图层可见性
   * @param visible - 是否可见
   */
  setHeatMapLayerVisible(visible: boolean): void {
    if (this.layer) {
      this.layer.setVisible(visible);
    }
  }

  /**
   * 设置热力图图层透明度
   * @param opacity - 透明度值 (0-1)
   */
  setHeatMapLayerOpacity(opacity: number): void {
    if (this.layer) {
      this.layer.setOpacity(opacity);
    }
  }

  /**
   * 组件卸载时清理资源
   */
  componentWillUnmount(): void {
    this.removeHeatMapLayer();
    super.componentWillUnmount?.();
  }

  /**
   * 重写清空方法，确保热力图也被清空
   */
  clear(): void {
    this.removeHeatMapLayer();
    super.clear();
  }
}

export default HeatMap;
