import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Alert from './Alert';
import AllowMultipleInstances from './AllowMultipleInstances';
import Confirm from './Confirm';
import InputPrompt from './InputPrompt';
import MaximizeModal from './MaximizeModal';
import Modal from './Modal';
import NumberPrompt from './NumberPrompt';
import Overview from './Overview';
import Prompt from './Prompt';
import TextAreaPrompt from './TextAreaPrompt';
import TriggerUpdate from './TriggerUpdate';

import '../src/index.less';

e2e.PC({
  children: <Overview />,
});
