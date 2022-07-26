import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { IBMapProps, IBMapState } from './types';

const selectorPrefix = 'adhere-ui-bmap';

// 加载瓦片的延时的背景图
const loadGridIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUdJREFUeNrs2sENwyAQRcE4ckf0RBv04Z7ck30wFXBi/4wU5bScXhQk9hhj9B+xzu/7WjijvZ/b/Jbz/e83kE0AAkAACAABIAAEgAAQAAJAAAgAAVDYfA5ui+eY33R+BuA9PXO++QtwB0AACAABIAAEgAAQAAJAAAgAASAAqrIPED5vH8A+AO4ACAABIAAEgAAQAAJAAAgAASAABEBJ9gHC5+0D2AfAHQABIAAEgAAQAAJAAAgAASAABIAAKMk+QPi8fQD7ALgDIAAEgAAQAAJAAAgAASAABIAAEAAl2QcIn7cPYB8AdwAEgAAQAAJAAAgAASAABIAAEAACoCT7AOHz9gHsA+AOgAAQAAJAAAgAASAABIAAEAACQACUZB8gfN4+gH0A3AEQAAJAAAgAASAABIAAEAACQABUNV8D++I5nmM3nX8EGADa0U/2xPbBVwAAAABJRU5ErkJggg==';

/**
 * BMap
 * @class BMap
 * @classdesc 百度地图的React组件
 */
// @ts-ignore
class BMap extends React.Component<IBMapProps, IBMapState> {
  static defaultProps: any;
  static propTypes: any;

  protected BMap: any = null;

  protected map: any = null;

  protected isLoad: boolean = false;

  state: IBMapState = {
    isReady: false,
  };

  ref = React.createRef();

  /**
   * getMap
   */
  getMap() {
    return this.map;
  }

  /**
   * componentDidMount
   */
  protected componentDidMount() {
    // @ts-ignore
    this.BMap = typeof window !== 'undefined' && window.BMap;

    this.setState(
      {
        isReady: true,
      },
      () => {
        this.initMap();
      },
    );
  }

  /**
   * initMap
   */
  protected initMap(): void {
    const { BMap } = this;

    const { config, zoom, onBMapInitReady, center } = this.props;

    this.map = new BMap.Map(this.ref.current, {
      // @ts-ignore
      enableMapClick: false,
      ...config,
    });

    this.initMapControl();

    this.map.centerAndZoom(new BMap.Point(center?.lon, center?.lat), zoom);

    this.map.addEventListener('tilesloaded', () => {
      if (this.isLoad) return;

      this.isLoad = true;

      const logoEl = document.querySelector('.anchorBL');
      logoEl && logoEl?.parentElement?.removeChild(logoEl);

      setTimeout(() => {
        // @ts-ignore
        this?.ref?.current?.style?.background = `url("${loadGridIcon}") repeat #fff;`;
      }, 2000);
    });

    onBMapInitReady && onBMapInitReady();
  }

  protected initMapControl() {
    const { BMap } = this;

    // 添加比例尺控件
    this.map.addControl(new BMap.NavigationControl());

    //开启鼠标滚轮缩放
    this.map.enableScrollWheelZoom(true);

    // this.map.disableScrollWheelZoom();
    // this.map.disableDoubleClickZoom();
    // this.map.disableKeyboard();
    // this.map.disableContinuousZoom();
    // this.map.disableAutoResize();
  }

  /**
   * renderLoading
   */
  protected renderLoading() {
    return <div>loading</div>;
  }

  /**
   * render
   */
  protected render() {
    const { className, style } = this.props;

    const { isReady } = this.state;

    return (
      /* @ts-ignore */
      <ConditionalRender conditional={isReady} noMatch={() => this.renderLoading()}>
        {() => (
          <div
            className={classNames(selectorPrefix, className?.split(/\s+/))}
            style={{ ...style }}
            /* @ts-ignore */
            ref={this.ref}
          />
        )}
      </ConditionalRender>
    );
  }
}

BMap.defaultProps = {
  className: '',
  style: {},
  config: {
    minZoom: 2,
    maxZoom: 20,
    enableHighResolution: true,
    enableAutoResize: true,
    enableMapClick: false,
  },
  zoom: 5,
  center: {
    lon: 116.404,
    lat: 39.915,
  },
};

BMap.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  zoom: PropTypes.number,
  center: PropTypes.object,
  config: PropTypes.shape({
    // 地图允许展示的最小级别
    minZoom: PropTypes.number,
    // 地图允许展示的最大级别
    maxZoom: PropTypes.number,
    // 是否启用使用高分辨率地图。在iPhone4及其后续设备上，可以通过开启此选项获取更高分辨率的底图，v1.2,v1.3版本默认不开启，v1.4默认为开启状态
    // 地图类型，默认为BMAP_NORMAL_MAP
    mapType: PropTypes.object,
    enableHighResolution: PropTypes.bool,
    // 是否自动适应地图容器变化，默认启用
    enableAutoResize: PropTypes.bool,
    // 是否开启底图可点功能，默认启用
    enableMapClick: PropTypes.bool,
  }),
  // 百度地图组件初始化完成
  onBMapInitReady: PropTypes.func,
};

export default BMap;
