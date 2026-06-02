import type { ActionsProps, DesignContextType } from '../types';
/**
 * actionsCodeStringToEvents
 * @param actions
 * @param designContext
 */
export declare function actionsCodeStringToEvents({ actions, designContext, }: {
    actions: ActionsProps['actions'];
    designContext: DesignContextType;
}): Record<string, (...args: any[]) => any>;
