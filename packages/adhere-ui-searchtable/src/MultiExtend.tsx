import cloneDeep from 'lodash.clonedeep';
import React, { Component } from 'react';

/**
 * MultiExtendFactory
 * @description 实现多继承
 * @param BaseClass 原始基类
 * @param SuperClasses 父类集合
 * @param ConstructorMethod 构造方法
 * @param Methods 原型方法
 * @constructor
 */
function MultiExtendFactory<P, S>(
  BaseClass: Component<P, S, any>,
  SuperClasses: Function[],
  ConstructorMethod: (superClassesObjs: any[]) => void,
  Methods: () => { [prop: string]: Function },
): any {
  // @ts-ignore
  class Wrap extends BaseClass {
    constructor(props) {
      super(props);

      const SuperClassesObjs: any[] = [];

      SuperClasses.forEach((SuperClass) => {
        SuperClass.call(this, props);
        SuperClassesObjs.push(cloneDeep(this));
      });

      ConstructorMethod.call(this, SuperClassesObjs);
    }
  }

  const methods = Methods();

  for (const method in methods) {
    Wrap.prototype[method] = methods[method];
  }

  SuperClasses.forEach((SuperClass) => {
    for (const p in SuperClass.prototype) {
      if (!(p in Wrap.prototype)) {
        Wrap.prototype[p] = SuperClass.prototype[p];
      }
    }
  });

  return Wrap;
}

export default MultiExtendFactory;
