// SendSMSCountdownEvents
export const SendSMSCountdownEvents = {
  handler: () => {
    return [
      { label: 'onSendSuccess', value: 'onSendSuccess' },
      { label: 'onSendError', value: 'onSendError' },
      { label: 'onCountdownReset', value: 'onCountdownReset' },
      { label: 'onCountdownTick', value: 'onCountdownTick' },
      { label: 'onCountdownFinish', value: 'onCountdownFinish' },
    ];
  },
};

