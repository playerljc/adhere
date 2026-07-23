import { createRoot } from 'react-dom/client';

import '../src/index.less';

import PopupCloseAll from './PopupCloseAll';
import PopupCreate from './PopupCreate';
import PopupShowClosePre from './PopupShowClosePre';
import SubmitButtonDemo from './SubmitButtonDemo';
import TriggerAndPrompt from './TriggerAndPrompt';

createRoot(document.getElementById('app')).render(
  // <PopupCreate />
  // <PopupCloseAll />
  // <PopupShowClosePre />
  // <SubmitButtonDemo />
  <TriggerAndPrompt />,
);
