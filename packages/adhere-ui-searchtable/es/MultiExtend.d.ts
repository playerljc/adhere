import { Component } from 'react';
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
declare function MultiExtendFactory<P, S>(BaseClass: Component<P, S, any>, SuperClasses: Function[], ConstructorMethod: (superClassesObjs: any[]) => void, Methods: () => {
    [prop: string]: Function;
}, StaticMethods: () => {
    [prop: string]: Function;
}): any;
export default MultiExtendFactory;
