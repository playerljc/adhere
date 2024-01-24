import { memo } from 'react';

import type { ArrayEntityValueHOCProps, DisplayNameInternal } from '../types';
import useArrayEntityValueHOC from '../useArrayEntityValueHOC';

const optionsProps = ['options', 'items', 'dataSource'];

const DEFAULT_OPTIONS_PROP = 'options';

const InternalArrayEntityValueHOC = memo<ArrayEntityValueHOCProps>((props) => {
  function getOptionsByEntity(entity) {
    if ((props.optionsProp ?? DEFAULT_OPTIONS_PROP) in entity) {
      return entity[props.optionsProp ?? DEFAULT_OPTIONS_PROP];
    }

    let options = entity[DEFAULT_OPTIONS_PROP];

    for (let i = 0; i < optionsProps.length; i++) {
      if (optionsProps[i] in entity) {
        options = entity[optionsProps[i]];
        break;
      }
    }

    return options;
  }

  const options = getOptionsByEntity(props.children.props);

  return useArrayEntityValueHOC({ ...props, options });
});

const ArrayEntityValueHOC = InternalArrayEntityValueHOC as DisplayNameInternal<
  typeof InternalArrayEntityValueHOC
>;
ArrayEntityValueHOC.displayName = 'ArrayEntityValueHOC';

export default ArrayEntityValueHOC;
