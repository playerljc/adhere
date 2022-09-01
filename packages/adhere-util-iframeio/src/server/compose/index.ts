import type { MiddleWare } from '../../types';

/**
 * Compose
 * @description 组合中间件
 * @param middleWares
 * @constructor
 */
function Compose(middleWares: MiddleWare[]) {
  return (ctx, next?: () => Promise<void> | void) =>
    new Promise<void>((resolve) => {
      let index = -1;

      // 中间件的返回值
      const middleWareQueueResults: unknown[] = Array.from({
        length: middleWares.length,
      }).fill(undefined);

      /**
       * loop
       * @description 迭代方法
       */
      const loop = (): unknown => {
        // 迭代完成了
        if (index + 1 >= middleWares.length) {
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
        middleWareQueueResults[index] = middleWares[index](
          ctx,
          // @ts-ignore
          () => loop(),
        );

        return middleWareQueueResults[index];
      };

      loop();
    });
}

export default Compose;
