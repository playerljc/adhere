/**
 * 成功状态消息
 */
export const OK_MESSAGE: string = 'ok';

/**
 * 错误状态消息
 */
export const ERROR_MESSAGE: string = 'error';

/**
 * 心跳服务的action名称
 */
export const KEEP_ALIVE_SERVICE_NAME = '_keep-alive';

export const STATUS_CODE_INIT = 0;
export const STATUS_CODE_OK = 200;
export const STATUS_CODE_ERROR = 500;
export const STATUS_CODE_TIME_OUT = 408;
export const STATUS_CODE_NOT_FOUND = 404;
export const STATUS_CODE_NOT_ACCEPTABLE = 406;

/**
 * : Record<string, string> = {
 *   200: 'OK',
 *   201: 'Created',
 *   202: 'Accepted',
 *   204: 'No Content',
 *   400: 'Bad Request',
 *   401: 'Unauthorized',
 *   403: 'Forbidden',
 *   404: 'Not Found',
 *   406: 'Not Acceptable',
 *   410: 'Gone',
 *   422: 'Unprocessable Entity',
 *   500: 'Internal Server Error',
 *   502: 'Bad Gateway',
 *   503: 'Service Unavailable',
 * }
 */
