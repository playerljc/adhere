import Base from './base';
import clientDetection from './clientDetection';
import Color from './color';
import Date from './date';
import Dom from './dom';
import Encrypt from './encrypt';
import Format from './format';
import Geometry from './geometry';
import Math from './math';
import SystemManager from './systemmanager';
import Tree from './tree';
import Url from './url';

export default {
  /**
   * 函数节流
   */
  ...Base,
  ...Color,
  ...Dom,
  ...Math,
  ...Geometry,
  ...clientDetection,
  ...SystemManager,
  ...Tree,
  ...Url,
  ...Date,
  ...Encrypt,
  ...Format,
};
