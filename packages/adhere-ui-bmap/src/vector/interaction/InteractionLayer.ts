import VectorLayer from '../VectorLayer';
import { IVectorLayerConfig } from '../types';

/**
 * InteractionLayer
 * @class InteractionLayer
 * @classdesc 交互绘制层
 */
class InteractionLayer extends VectorLayer {
  constructor(map, config: IVectorLayerConfig) {
    super(map, config);
  }
}

export default InteractionLayer;
