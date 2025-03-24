import { GroupType } from '../types/WidgetTypes';
export declare function registerGroup(type: GroupType, name: string): void;
export declare function getGroupNameByType(type: GroupType): string | undefined;
export declare function getNames(): string[];
export declare function getTypes(): GroupType[];
