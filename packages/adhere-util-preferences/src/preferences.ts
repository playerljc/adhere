/**
 * putString - 本地持久化一对键值
 * @param key - {string}
 * @param value - {string}
 * @param storage - {Storage}
 */
function putString(key: string, value: string, storage: Storage) {
  storage.setItem(key, value);
}

/**
 * getString - 本地取出值
 * @param key - {string}
 * @param storage - {Storage}
 * @return {string | null}
 */
function getString(key: string, storage: Storage): string | null {
  return storage.getItem(key);
}

/**
 * putObject - 本地持久化一对键值
 * @param key - {string}
 * @param object - {Object}
 * @param storage - {Storage}
 */
function putObject(key: string, object: Object, storage: Storage) {
  const val = JSON.stringify(object);

  putString(key, val, storage);
}

/**
 * getObject - 本地取出值
 * @param key - {string}
 * @param storage - {Storage}
 * @return {Object | null}
 */
function getObject(key: string, storage: Storage): Object | null {
  const val = storage.getItem(key);

  if (val == null) return null;

  return JSON.parse(val);
}

/**
 * remove - 删除键值
 * @param key - {string}
 * @param storage - {Storage}
 */
function remove(key: string, storage: Storage) {
  storage.removeItem(key);
}

export default {
  /**
   * putStringByLocal - 本地持久化一对键值(值为String)
   * @param key - {string}
   * @param value - {string}
   */
  putStringByLocal(key: string, value: string) {
    putString(key, value, window.localStorage);
  },

  /**
   * getStringByLocal - 本地取出值(值为String)
   * @param key - {string}
   * @return {string}
   */
  getStringByLocal(key: string): string | null {
    return getString(key, window.localStorage);
  },

  /**
   * putObjectByLocal - 本地持久化一对键值(值为对象)
   * @param key - {string}
   * @param object - {Object}
   */
  putObjectByLocal(key: string, object: Object) {
    putObject(key, object, window.localStorage);
  },

  /**
   * getObjectByLocal - 本地取出值(值为对象)
   * @param key - {string}
   * @return {Object | null}
   */
  getObjectByLocal(key: string): Object | null {
    return getObject(key, window.localStorage);
  },

  /**
   * removeByLocal - 本地删除一个键值
   * @param key - {string}
   */
  removeByLocal(key: string) {
    remove(key, window.localStorage);
  },

  /**
   * putStringBySession - 会话持久化一对键值(值为String)
   * @param key - {string}
   * @param value - {string}
   */
  putStringBySession(key: string, value: string) {
    putString(key, value, window.sessionStorage);
  },

  /**
   * getStringBySession - 会话取出值(值为String)
   * @param key - {string}
   * @return {string | null}
   */
  getStringBySession(key: string): string | null {
    return getString(key, window.sessionStorage);
  },

  /**
   * putObjectBySession - 会话持久化一对键值(值为对象)
   * @param key - {string}
   * @param object - {Object}
   */
  putObjectBySession(key: string, object: Object) {
    putObject(key, object, window.sessionStorage);
  },

  /**
   * getObjectBySession - 会话取出值(值为对象)
   * @param key - {string}
   * @return {Object | null}
   */
  getObjectBySession(key: string): Object | null {
    return getObject(key, window.sessionStorage);
  },

  /**
   * removeBySession - 会话删除一个键值
   * @param key - {string}
   */
  removeBySession(key: string) {
    remove(key, window.sessionStorage);
  },
};
