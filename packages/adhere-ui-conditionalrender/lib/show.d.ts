import { FC } from 'react';
import type { ConditionalRenderShowProps } from './types';
/**
 * ConditionalRenderShow - 知识用于切换css的display
 * @class ConditionalRenderShow
 * @classdesc 只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
 * 根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
 */
declare const ConditionalRenderShow: FC<ConditionalRenderShowProps>;
export default ConditionalRenderShow;
