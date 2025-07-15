import type { Middleware } from '../../types';
import type Context from '../../Context';

/**
 * 组合中间件函数
 * @description 将多个中间件函数组合成一个函数，按顺序执行
 * @param middlewares - 中间件数组
 * @returns 组合后的中间件函数
 */
function Compose(middlewares: Middleware[]) {
  return (ctx: Context, next?: () => Promise<void> | void) =>
    new Promise<void>((resolve) => {
      let index = -1;

      // 中间件的返回值
      const middleWareQueueResults: unknown[] = Array.from({
        length: middlewares.length,
      }).fill(undefined);

      /**
       * 迭代方法
       * @returns unknown - 中间件执行结果
       */
      const loop = (): unknown => {
        // 迭代完成了
        if (index + 1 >= middlewares.length) {
          Promise.all(middleWareQueueResults.filter((t) => t instanceof Promise)).then(() => {
            // 真正的迭代完成
            if (next) {
              const p = next();

              if (p && p.then) {
                p.then(() => {
                  resolve();
                });

                return;
              }
            }

            resolve();
          });

          return;
        }

        index++;

        // 调用中间件方法
        // @ts-ignore - 中间件可能返回Promise或void
        middleWareQueueResults[index] = middlewares[index](ctx, () => loop());

        return middleWareQueueResults[index];
      };

      loop();
    });
}

export default Compose;
