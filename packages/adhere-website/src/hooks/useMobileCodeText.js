import { useEffect, useState } from 'react';

import Util from '@/util';

export default function (path) {
  const [codeText, setCodeText] = useState('');

  useEffect(() => {
    Util.getMobileCodeText(path).then(setCodeText);
  }, [path]);

  return codeText;
}
