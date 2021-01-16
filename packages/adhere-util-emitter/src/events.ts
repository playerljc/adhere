/**
 * Events
 * @class Events
 * @classdesc Events
 */
class Events {
  /**
   * @constructor
   */
  constructor() {
    this.events = {};
  }

  /**
   * remove
   * @param {type} type
   * @param {Function} handler
   */
  remove(type: string, handler: Function) {
    if (this.hasType(type)) {
      const index = this.events[type].handlers.findIndex((item) => {
        return item === handler;
      });

      if (index !== -1) {
        this.events[type].handlers.splice(index, 1);
      }
    }
  }

  /**
   * hasType
   * @param {string} type
   * @return {boolean}
   */
  hasType(type: string): boolean {
    return type in this.events;
  }

  /**
   * clear 清除一个type下的所有handler
   * @param {string} type
   */
  clear(type: string) {
    if (this.hasType(type)) {
      this.events[type].handlers = [];
    }
  }

  /**
   * 清除所有
   */
  clearAll() {
    this.events = {};
  }

  /**
   * on
   * @param {string} type
   * @param {Function} handler
   */
  on(type: string, handler: Function) {
    if (!this.hasType(type)) {
      this.events[type] = {
        handlers: [],
      };
    }

    this.events[type].handlers.push(handler);
  }

  /**
   * trigger
   * @param {string} type
   * @param {Object} params
   */
  trigger(type: string, ...params: object) {
    let result;

    if (this.hasType(type)) {
      this.events[type].handlers.forEach((handler) => {
        result = handler(...params);
      });
    }

    return result;
  }

  /**
   * document自定义事件的触发
   * @param {string} - type
   * @param {Object} - params
   */
  static trigger(type: string, ...params: object) {
    document.dispatchEvent(
      new CustomEvent(type, {
        bubbles: 'true',
        cancelable: 'true',
        detail: params,
      }),
    );
  }
}

/**
 * 消息通知
 */
export default Events;
