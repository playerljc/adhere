import type { OperatorItem } from '../types';

/**
 * SQL查询运算符配置
 * 包含常用的SQL语法关键字和运算符
 */
const SqlOperators: OperatorItem[] = [
  // 基础查询关键字
  { label: 'select', value: 'select', type: 'binary' },
  { label: 'from', value: 'from', type: 'binary' },
  { label: 'where', value: 'where', type: 'binary' },
  
  // 逻辑运算符
  { label: 'and', value: 'and', type: 'binary' },
  { label: 'or', value: 'or', type: 'binary' },
  
  // 条件运算符
  { label: 'in', value: 'in', type: 'binary' },
  { label: 'like', value: 'like', type: 'binary' },
  { label: 'exists', value: 'exists', type: 'binary' },
  { label: 'between', value: 'between', type: 'binary' },
  
  // 查询修饰符
  { label: 'distinct', value: 'distinct', type: 'binary' },
  
  // 排序和分组
  { label: 'order by', value: 'order by', type: 'binary' },
  { label: 'asc', value: 'asc', type: 'binary' },
  { label: 'desc', value: 'desc', type: 'binary' },
  { label: 'group by', value: 'group by', type: 'binary' },
  { label: 'having', value: 'having', type: 'binary' },
  
  // 数据操作
  { label: 'insert into', value: 'insert into', type: 'binary' },
  { label: 'update', value: 'update', type: 'binary' },
  { label: 'set', value: 'set', type: 'binary' },
  { label: 'delete', value: 'delete', type: 'binary' },
  
  // 表连接
  { label: 'join', value: 'join', type: 'binary' },
  { label: 'left join', value: 'left join', type: 'binary' },
  { label: 'right join', value: 'right join', type: 'binary' },
  { label: 'union', value: 'union', type: 'binary' },
  
  // 表操作
  { label: 'create table', value: 'create table', type: 'binary' },
  { label: 'drop', value: 'drop', type: 'binary' },
  { label: 'alert table', value: 'alert table', type: 'binary' },
  
  // 括号
  { label: '()', value: '()', type: 'brackets' },
  
  // 聚合函数
  { label: 'count', value: 'count', type: 'binary' },
  { label: 'first', value: 'first', type: 'binary' },
  { label: 'last', value: 'last', type: 'binary' },
  { label: 'max', value: 'max', type: 'binary' },
  { label: 'min', value: 'min', type: 'binary' },
  { label: 'sum', value: 'sum', type: 'binary' },
  { label: 'avg', value: 'avg', type: 'binary' },
  
  // 字符串和数值函数
  { label: 'len', value: 'len', type: 'binary' },
  { label: 'round', value: 'round', type: 'binary' },
  { label: 'now', value: 'now', type: 'binary' },
  { label: 'format', value: 'format', type: 'binary' },
  
  // 比较运算符
  { label: '=', value: '=', type: 'binary' },
  { label: '!=', value: '!=', type: 'binary' },
  { label: 'not null', value: 'not null', type: 'binary' },
  { label: '&#62;', value: '&#62;', type: 'binary' }, // >
  { label: '&#60;', value: '&#60;', type: 'binary' }, // <
  { label: '&#8924;', value: '&#8924;', type: 'binary' }, // ≤
  { label: '&#8925;', value: '&#8925;', type: 'binary' }, // ≥
];

export default SqlOperators;
