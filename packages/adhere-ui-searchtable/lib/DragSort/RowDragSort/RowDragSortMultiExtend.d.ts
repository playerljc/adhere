import { Component } from 'react';
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
declare function RowDragSortMultiExtend<P, S>(BaseClass: Component<P, S>, SuperClasses: Function[], RenderBaseClass?: Function, Methods?: () => {
    [prop: string]: Function;
}, StaticMethods?: () => {
    [prop: string]: Function;
}): any;
export default RowDragSortMultiExtend;
