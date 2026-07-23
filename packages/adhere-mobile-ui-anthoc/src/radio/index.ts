import {
  AutoCompletePagingRadioProps,
  AutoCompleteRadioProps,
  FilterPagingRadioProps,
  FilterRadioProps,
  PagingRadioProps,
  RadioGroupProps,
} from '../types';
import { createFactory } from '../util';
import AutoCompletePagingRadio from './AutoCompletePagingRadio';
import AutoCompleteRadio from './AutoCompleteRadio';
import FilterPagingRadio from './FilterPagingRadio';
import FilterRadio from './FilterRadio';
import PagingRadio from './PagingRadio';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

Radio.AutoCompleteRadio = createFactory<AutoCompleteRadioProps>(AutoCompleteRadio, {});
Radio.FilterRadio = createFactory<FilterRadioProps>(FilterRadio, {});
Radio.RadioGroup = createFactory<RadioGroupProps>(RadioGroup, {});
Radio.PagingRadio = createFactory<PagingRadioProps>(PagingRadio, {});
Radio.FilterPagingRadio = createFactory<FilterPagingRadioProps>(FilterPagingRadio, {});
Radio.AutoCompletePagingRadio = createFactory<AutoCompletePagingRadioProps>(
  AutoCompletePagingRadio,
  {},
);

Radio.RadioGroup.displayName = 'RadioGroup';
Radio.FilterRadio.displayName = 'FilterRadio';
Radio.PagingRadio.displayName = 'PagingRadio';
Radio.FilterPagingRadio.displayName = 'FilterPagingRadio';
Radio.AutoCompleteRadio.displayName = 'AutoCompleteRadio';
Radio.AutoCompletePagingRadio.displayName = 'AutoCompletePagingRadio';

export default Radio;
