import type { OperatorItem } from '../types';

/**
 * ElasticSearch查询运算符配置
 * 包含常用的ElasticSearch查询语法运算符
 */
const ElasticSearchOperators: OperatorItem[] = [
  {
    label: '()',
    value: '()',
    type: 'brackets',
  },
  {
    label: 'AND',
    value: 'AND',
    type: 'binary',
  },
  {
    label: 'OR',
    value: 'OR',
    type: 'binary',
  },
  {
    label: 'NOT',
    value: 'NOT',
    type: 'unary',
  },
];

export default ElasticSearchOperators;
