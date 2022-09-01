import type Context from './Context';
import Request from './Request';
import Response from './Response';

export type stateCode = 0 | 200 | 404 | 500;

export type ContextOptions = {
  request: Request;
  response: Response;
};

export type MiddleWare = (ctx: Context, next?: () => Promise<void> | void) => Promise<void> | void;

export type SendOptions = {
  data: any;
  headers: {
    [prop: string]: string;
  };
};

export type RequestOptions = {
  pathname: string;
  headers?: {
    [prop: string]: string;
  };
  statusCode?: stateCode;
  stateMessage?: string;
  body?: any;
};

export type ResponseOptions = {
  requestId: string;
  headers: {
    [prop: string]: string;
  };
  statusCode: stateCode;
  stateMessage: string;
  body: any;
};
