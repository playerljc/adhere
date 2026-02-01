import BirthdayPicker from './BirthdayPicker';
import BoundedTimePicker from './BoundedTimePicker';
import DatePicker from './DatePicker';

const DatePickerWithStaticProps = DatePicker as typeof DatePicker & {
  BirthdayPicker: typeof BirthdayPicker;
  BoundedTimePicker: typeof BoundedTimePicker;
};

DatePickerWithStaticProps.BirthdayPicker = BirthdayPicker;
DatePickerWithStaticProps.BoundedTimePicker = BoundedTimePicker;

export default DatePickerWithStaticProps;
