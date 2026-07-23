import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import DateDisplay from './DateDisplay';
import DictFormats from './DictFormats';
import Locales from './Locales';
import LocalizationFormats from './LocalizationFormats';
import RelativeTime from './RelativeTime';
import Utils from './Utils';

e2e.PC({
  children: <DateDisplay />,
});
