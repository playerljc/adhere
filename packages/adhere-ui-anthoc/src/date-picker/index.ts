export {
  DateFieldDependencyProvider,
  getDateDependenciesDisabledDate,
  isEndDateField,
  isStartDateField,
  useDateFieldDependency,
} from './dependency';
export { createDatePickerWithStatics } from './createDatePickerWithStatics';
export type {
  DateFieldDependencyProviderProps,
  DatePickerProps,
} from './types';

import { createDatePickerWithStatics } from './createDatePickerWithStatics';

export default createDatePickerWithStatics();
