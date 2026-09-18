import BirthdayPicker from './BirthdayPicker';
import BoundedTimePicker from './BoundedTimePicker';
import DatePicker from './DatePicker';
import { DateFieldDependencyProvider } from './dependency';
import InternalDatePicker from './InternalDatePicker';

export function createDatePickerWithStatics() {
  const DatePickerWithStaticProps = Object.assign(DatePicker, InternalDatePicker) as typeof InternalDatePicker & {
    BirthdayPicker: typeof BirthdayPicker;
    BoundedTimePicker: typeof BoundedTimePicker;
    DateFieldDependencyProvider: typeof DateFieldDependencyProvider;
  };

  DatePickerWithStaticProps.BirthdayPicker = BirthdayPicker;
  DatePickerWithStaticProps.BoundedTimePicker = BoundedTimePicker;
  DatePickerWithStaticProps.DateFieldDependencyProvider = DateFieldDependencyProvider;

  return DatePickerWithStaticProps;
}
