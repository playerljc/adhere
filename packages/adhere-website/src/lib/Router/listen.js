import { Emitter } from '@baifendian/adhere';

let _history;

const type = Symbol('');

let unregisterCallback;

// const routerChangeStack = [];

// let isRouterChange = false;

/**
 * 路由lister的发布和订阅
 */
export default {
  /**
   * init
   * @description - 初始化
   * @param context - 路由的History对象
   */
  init(context) {
    this.destroy();

    _history = context.props.history;

    // context.componentDidUpdate = () => {
    //   if (isRouterChange) {
    //     const handler = routerChangeStack.pop();
    //
    //     if (handler) {
    //       handler();
    //     }
    //
    //     isRouterChange = false;
    //   }
    // };

    unregisterCallback = _history.listen((location, action) => {
      // isRouterChange = true;

      // routerChangeStack.push(() => {
      Emitter.trigger(type, {
        location,
        action,
      });
      // });
    });
  },
  destroy() {
    if (unregisterCallback) {
      unregisterCallback();
      unregisterCallback = null;
    }
  },
  on(handler) {
    Emitter.on(type, (e) => {
      handler(e, _history);
    });
  },
  remove(handler) {
    Emitter.remove(type, handler);
  },
  clear() {
    Emitter.clear(type);
  },
};
