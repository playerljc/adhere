import type { DesignValue } from '../../../../types';

export type FormTemplate = {
  id: string;
  nameKey: string;
  descKey: string;
  build: () => DesignValue;
};
