import { openErrorDialog, openErrorMessage } from './ErrorPrompt';
import type { ErrorPromptComponent } from './types';

const ErrorPrompt: ErrorPromptComponent = {
  openErrorMessage,
  openErrorDialog,
};

export default ErrorPrompt;
