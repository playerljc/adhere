/**
 * Collection 模块测试文件
 * @description 测试异步队列处理功能
 */
import Collection from '../src/collection';

/**
 * 测试函数1 - 成功执行
 * @param {number} a - 第一个参数
 * @param {number} b - 第二个参数
 * @returns {Promise<number>} 返回两数之和
 */
function fun1(a, b) {
  console.log('fun1 执行中...');
  return Promise.resolve(a + b);
}

/**
 * 测试函数2 - 模拟失败
 * @param {number} a - 第一个参数
 * @param {number} b - 第二个参数
 * @returns {Promise<never>} 抛出异常
 */
function fun2(a, b) {
  console.log('fun2 执行中...');
  return Promise.reject(new Error('fun2 执行失败'));
}

/**
 * 测试函数3 - 成功执行
 * @param {number} a - 第一个参数
 * @param {number} b - 第二个参数
 * @returns {Promise<number>} 返回两数之和
 */
function fun3(a, b) {
  console.log('fun3 执行中...');
  return Promise.resolve(a + b);
}

// 定义异步任务队列
const tasks = [
  {
    argv: [1, 2],
    run: fun1,
    success: (res) => {
      console.log('fun1 成功:', res);
    },
    fail: (error) => {
      console.error('fun1 失败:', error);
    },
  },
  {
    argv: [5, 6],
    run: fun2,
    success: (res) => {
      console.log('fun2 成功:', res);
    },
    fail: (error) => {
      console.error('fun2 失败:', error.message);
    },
  },
  {
    argv: [9, 10],
    run: fun3,
    success: (res) => {
      console.log('fun3 成功:', res);
    },
    fail: (error) => {
      console.error('fun3 失败:', error);
    },
  },
];

// 执行异步队列
console.log('开始执行异步队列...');

Collection.processAsyncQueue(tasks)
  .then(() => {
    console.log('所有任务执行完成');
  })
  .catch((error) => {
    console.error('队列执行出错:', error);
  });
