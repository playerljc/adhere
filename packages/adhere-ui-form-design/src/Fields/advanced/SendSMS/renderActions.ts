import { renderActionsByConfig } from '../../../components/DesignFieldActions/actionHelpers';
import type { DesignValueProps } from '../../../types';

export function renderActions(id: string, fieldActionTypes: DesignValueProps['fieldActionTypes']) {
  return renderActionsByConfig(id, fieldActionTypes);
}

