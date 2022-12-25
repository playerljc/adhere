import React, { Component } from 'react';

import MultiExtend from '../../MultiExtend';
import SearchTable from '../../SearchTable';

/**
 * RowDragSortMultiExtend
 * @description 多继承
 * @param BaseClass
 * @param SuperClasses
 * @param RenderBaseClass
 * @param Methods
 * @param StaticMethods
 * @constructor
 */
function RowDragSortMultiExtend<P, S>(
  BaseClass: Component<P, S>,
  SuperClasses: Function[],
  RenderBaseClass?: Function,
  Methods?: () => { [prop: string]: Function },
  StaticMethods?: () => { [prop: string]: Function },
): any {
  return MultiExtend(
    BaseClass,
    SuperClasses,
    function (this: SearchTable, superClassesObjs) {
      this.cellConfigReducers = superClassesObjs
        .map((superClassesObj) => superClassesObj.cellConfigReducers)
        .flat();
      this.rowConfigReducers = superClassesObjs
        .map((superClassesObj) => superClassesObj.rowConfigReducers)
        .flat();
    },
    () => {
      const defaultMethods = {
        onTableRowComponentReducers: function (columns) {
          const res = new Set(
            SuperClasses.map((SuperClass) =>
              SuperClass.prototype.onTableRowComponentReducers.call(this, columns),
            ).flat(),
          );

          return [...Array.from(res)];
        },

        onTableCellComponentReducers: function (columns) {
          const res = new Set(
            SuperClasses.map((SuperClass) =>
              SuperClass.prototype.onTableCellComponentReducers.call(this, columns),
            ).flat(),
          );

          return [...Array.from(res)];
        },
      };

      const res: { [prop: string]: Function } = {
        ...defaultMethods,
        ...(Methods || {}),
      };

      if (RenderBaseClass) {
        res.render = function () {
          return RenderBaseClass?.prototype?.render?.call?.(this);
        };
      }

      return res;
    },
    () => StaticMethods || {},
  );
}

export default RowDragSortMultiExtend;
