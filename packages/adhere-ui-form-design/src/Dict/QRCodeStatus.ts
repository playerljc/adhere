// QRCode 状态
export const QRCodeStatus = {
  handler: () => {
    return [
      { label: 'active', value: 'active' },
      { label: 'expired', value: 'expired' },
      { label: 'loading', value: 'loading' },
      { label: 'scanned', value: 'scanned' },
    ];
  },
};

