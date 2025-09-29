import type { RadioGroupProps } from 'antd/es/radio';

import {
  type AutoCompleteButtonRadioSelectProps,
  type AutoCompleteCustomRadioSelectProps,
  AutoCompleteRadioSelectProps,
  type ButtonRadioSelectProps,
  type CustomRadioProps,
  type CustomRadioSelectProps,
  type RadioSelectProps,
} from '../types';
import { createFactory } from '../util';
import AutoCompleteButtonRadioSelect from './AutoCompleteButtonRadioSelect';
import AutoCompleteCustomRadioSelect from './AutoCompleteCustomRadioSelect';
import AutoCompleteRadioSelect from './AutoCompleteRadioSelect';
import ButtonRadio from './ButtonRadio';
import ButtonRadioSelect from './ButtonRadioSelect';
import CustomRadio from './CustomRadio';
import CustomRadioSelect from './CustomRadioSelect';
import HorizontalRadio from './HorizontalRadio';
import Radio from './Radio';
import RadioSelect from './RadioSelect';
import VerticalRadio from './VerticalRadio';

Radio.AutoCompleteRadioSelect = createFactory<AutoCompleteRadioSelectProps>(
  AutoCompleteRadioSelect,
  {},
);
Radio.AutoCompleteCustomRadioSelect = createFactory<AutoCompleteCustomRadioSelectProps>(
  AutoCompleteCustomRadioSelect,
  {},
);
Radio.AutoCompleteButtonRadioSelect = createFactory<AutoCompleteButtonRadioSelectProps>(
  AutoCompleteButtonRadioSelect,
  {},
);
Radio.ButtonRadio = ButtonRadio;
Radio.ButtonRadioSelect = createFactory<ButtonRadioSelectProps>(ButtonRadioSelect, {});
Radio.CustomRadio = createFactory<CustomRadioProps>(CustomRadio, {});
Radio.CustomRadioSelect = createFactory<CustomRadioSelectProps>(CustomRadioSelect, {});
Radio.HorizontalRadio = createFactory<RadioGroupProps>(HorizontalRadio, {});
Radio.RadioSelect = createFactory<RadioSelectProps>(RadioSelect, {});
Radio.VerticalRadio = createFactory<RadioGroupProps>(VerticalRadio, {});

export default Radio;
