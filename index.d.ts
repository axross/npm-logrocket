import { Action, Middleware } from 'redux';

type InitOptions = {
  release?: string;
  console?: {
    isEnabled?:
      | boolean
      | {
          log?: boolean;
          info?: boolean;
          debug?: boolean;
          warn?: boolean;
          error?: boolean;
        };
  };
  network?: {
    isEnabled?: boolean;
    requestSanitizer?: (request: any) => any;
    responseSanitizer?: (response: any) => any;
  };
  dom?: {
    isEnabled?: boolean;
  };
  shouldSendData?: () => boolean;
};

type ReduxMiddlewareConfig<S> = {
  stateSanitizer?: (state: S) => Partial<S>;
  actionSanitizer?: (action: Action) => Action | null;
};

interface LogRocket {
  init(appId: string, options?: InitOptions): void;
  identify(uid: string, json: {}): void;
  log(message?: any, ...optionalParams: any[]): void;
  info(message?: any, ...optionalParams: any[]): void;
  warn(message?: any, ...optionalParams: any[]): void;
  debug(message?: any, ...optionalParams: any[]): void;
  error(message?: any, ...optionalParams: any[]): void;
  track(eventName: string): void;
  reduxMiddleware<S>(config?: ReduxMiddlewareConfig<S>): Middleware;
}

declare const LogRocket: LogRocket;

export = LogRocket;
