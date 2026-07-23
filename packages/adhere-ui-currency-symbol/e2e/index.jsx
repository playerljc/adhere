import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Align from './Align';
import CurrencyCodes from './CurrencyCodes';
import CurrencySymbol from './CurrencySymbol';
import PrefixSuffix from './PrefixSuffix';
import Styles from './Styles';
import SymbolSizes from './SymbolSizes';
import Utils from './Utils';

e2e.PC({
  children: <CurrencySymbol />,
});
