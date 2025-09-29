import {
  AutoCompletePagingRadioProps,
  AutoCompleteRadioProps,
  FilterPagingRadioProps,
  PagingRadioProps,
  RadioGroupProps,
} from '../types';
import { createFactory } from '../util';
import AutoCompletePagingRadio from './AutoCompletePagingRadio';
import AutoCompleteRadio from './AutoCompleteRadio';
import FilterPagingRadio from './FilterPagingRadio';
import PagingRadio from './PagingRadio';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

Radio.AutoCompleteRadio = createFactory<AutoCompleteRadioProps>(AutoCompleteRadio, {});
Radio.FilterRadio = createFactory<FilterPagingRadioProps>(FilterPagingRadio, {});
Radio.RadioGroup = createFactory<RadioGroupProps>(RadioGroup, {});
Radio.PagingRadio = createFactory<PagingRadioProps>(PagingRadio, {});
Radio.FilterPagingRadio = createFactory<FilterPagingRadioProps>(FilterPagingRadio, {});
Radio.AutoCompletePagingRadio = createFactory<AutoCompletePagingRadioProps>(
  AutoCompletePagingRadio,
  {},
);

Radio.RadioGroup.displayName = 'RadioGroup';

export default Radio;
