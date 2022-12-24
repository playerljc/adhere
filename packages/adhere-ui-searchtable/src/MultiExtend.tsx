import cloneDeep from 'lodash.clonedeep';
import React, { Component } from 'react';

function Factory<P, S>(
  BaseClass: Component<P, S>,
  SuperClasses: any[],
  ConstructorMethod: (superClassesObjs: any[]) => void,
  Methods: () => { [prop: string]: Function },
): any {
  // @ts-ignore
  class Wrap extends BaseClass<P, S> {
    constructor(props) {
      super(props);

      const SuperClassesObjs: any[] = [];

      SuperClasses.forEach((SuperClass) => {
        // @ts-ignore
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

export default Factory;
