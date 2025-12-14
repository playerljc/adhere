import type { ActionsProps } from '../types';

export function actionsCodeStringToEvents(
  actionsCodeString: ActionsProps,
): Record<string, (...args: any[]) => any> {
  if (!Array.isArray(actionsCodeString) || actionsCodeString.length === 0) return {};

  const events: Record<string, (...args: any[]) => any> = {};

  actionsCodeString.forEach(({ type, value }) => {
    if (!type) return;

    const code = String(value ?? '').trim();

    if (!code) return;

    let fn: any;

    try {
      fn = new Function(`return (${code})`)();
    } catch {}

    if (typeof fn === 'function') {
      const handler = fn;

      events[type] = (...args: any[]) => {
        try {
          return handler(...args);
        } catch {}
      };
      return;
    }

    try {
      const handler = new Function('event', 'return (function(){' + code + '}).call(this)') as (
        event: any,
      ) => any;

      events[type] = (event: any) => {
        try {
          return handler(event);
        } catch {}
      };
    } catch {}
  });

  return events;
}
