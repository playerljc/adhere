import Base from './base';
import Color from './color';
import Dom from './dom';
import Math from './math';
import clientDetection from './clientDetection';
import SystemManager from './systemmanager';

export default {
  /**
   * 函数节流
   */
  ...Base,
  ...Color,
  ...Dom,
  ...Math,
  ...clientDetection,
  ...SystemManager,
};
