import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import BorderedColSpanMultiGroup from './BorderedColSpanMultiGroup';
import FieldShowToggle from './FieldShowToggle';
import HorizontalBasic from './HorizontalBasic';
import ModeAndDensity from './ModeAndDensity';
import RenderDetailAndSearchForm from './RenderDetailAndSearchForm';
import RequirePosition from './RequirePosition';
import VerticalBorderedMultiGroup from './VerticalBorderedMultiGroup';

e2e.PC({
  // children: <HorizontalBasic />,
  // children: <BorderedColSpanMultiGroup />,
  // children: <ModeAndDensity />,
  // children: <FieldShowToggle />,
  // children: <RenderDetailAndSearchForm />,
  // children: <RequirePosition />,
  children: <VerticalBorderedMultiGroup />,
});
