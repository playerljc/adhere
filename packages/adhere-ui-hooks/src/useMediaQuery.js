import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

import AdapterScreen from '@baifendian/adhere-util-adapterscreen';

function useMediaQuery() {
  const [state, setState] = useState({
    isPhone: AdapterScreen.isPhoneSize(),
    isPad: AdapterScreen.isPadSize(),
    isPC: AdapterScreen.isPCSize(),
  });

  useEffect(() => {
    const onResize = debounce(() => {
      setState({
        isPhone: AdapterScreen.isPhoneSize(),
        isPad: AdapterScreen.isPadSize(),
        isPC: AdapterScreen.isPCSize(),
      });
    }, 300);

    window.addEventListener('resize', onResize);
    window.addEventListener('pageshow', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pageshow', onResize);
    };
  }, []);

  return state;
}

export default useMediaQuery;
