import React, { Component } from 'react';

import MultiExtend from '../../MultiExtend';
import SearchTable from '../../SearchTable';

function Factory<P, S>(BaseClass: Component<P, S>, SuperClasses: any[], RenderBaseClass: any): any {
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
    () => ({
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

      render: function () {
        return RenderBaseClass.prototype.render.call(this);
      },
    }),
  );
}

export default Factory;
