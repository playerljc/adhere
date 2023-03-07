import cloneDeep from 'lodash.clonedeep';
import type { Component } from 'react';
import React from 'react';

/**
 * MultiExtendFactory
 * @description 实现多继承
 * @param BaseClass 原始基类
 * @param SuperClasses 父类集合
 * @param ConstructorMethod 构造方法
 * @param Methods 原型方法
 * @param StaticMethods
 * @constructor
 */
function MultiExtendFactory<P, S>(
  BaseClass: Component<P, S, any>,
  SuperClasses: Function[],
  ConstructorMethod: (superClassesObjs: any[]) => void,
  Methods: () => { [prop: string]: Function },
  StaticMethods: () => { [prop: string]: Function },
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

  // 父类的方法
  SuperClasses.forEach((SuperClass) => {
    for (const p in SuperClass.prototype) {
      if (!(p in Wrap.prototype)) {
        Wrap.prototype[p] = SuperClass.prototype[p];
      }
    }
  });

  // 当前的方法
  const methods = Methods();
  for (const method in methods) {
    Wrap.prototype[method] = methods[method];
  }

  // 静态的方法
  const staticMethods = StaticMethods();
  for (const staticMethod in staticMethods) {
    Wrap[staticMethod] = staticMethods[staticMethod];
  }

  return Wrap;
}

export default MultiExtendFactory;
