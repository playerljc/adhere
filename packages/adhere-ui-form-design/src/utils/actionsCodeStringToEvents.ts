import type { ActionsProps, DesignContextType } from '../types';

/**
 * actionsCodeStringToEvents
 * @param actions
 * @param designContext
 */
export function actionsCodeStringToEvents({
  actions,
  designContext,
}: {
  actions: ActionsProps['actions'];
  designContext: DesignContextType;
}): Record<string, (...args: any[]) => any> {
  if (!Array.isArray(actions) || actions.length === 0) return {};

  const events: Record<string, (...args: any[]) => any> = {};

  actions.forEach(({ type, value }) => {
    if (!type) return;

    const code = String(value ?? '').trim();

    if (!code) return;

    try {
      const handler = new Function(
        'event',
        'designContext',
        'return (function(){' + code + '}).call(designContext)',
      ) as (event: any, designContext: any) => any;

      events[type] = (event: any) => {
        try {
          return handler(event, designContext);
        } catch {}
      };
    } catch {}
  });

  return events;
}
