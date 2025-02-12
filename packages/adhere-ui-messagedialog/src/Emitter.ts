const events = {};

/**
 * Emitter
 */
export default {
  /**
   * on
   * @param {string} type
   * @param {Function} handler
   */
  on(type, handler) {
    if (!events[type]) {
      events[type] = {
        handlers: [],
      };
    }
    events[type].handlers.push(handler);
  },

  /**
   * remove
   * @param {type} type
   * @param {Function} handler
   */
  remove(type, handler) {
    if (events[type]) {
      const index = events[type].handlers.findIndex((item) => {
        return item === handler;
      });

      if (index !== -1) {
        events[type].handlers.splice(index, 1);
      }
    }
  },

  /**
   * trigger
   * @param {string} type
   * @param {Object} params
   */
  trigger(type, ...params) {
    let result;
    if (events[type]) {
      events[type].handlers.forEach((handler) => {
        result = handler(...params);
      });
    }
    return result;
  },
};
