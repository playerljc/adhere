import BirthdayPicker from './BirthdayPicker';
import BoundedTimePicker from './BoundedTimePicker';
import DatePicker from './DatePicker';
declare const DatePickerWithStaticProps: typeof DatePicker & {
    BirthdayPicker: typeof BirthdayPicker;
    BoundedTimePicker: typeof BoundedTimePicker;
};
export default DatePickerWithStaticProps;
