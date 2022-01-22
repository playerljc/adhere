import React from 'react';

import { legendColor } from '../../config';
import Sector from '../Sector';

const StackedSector = ({
  size = 300,
  bottomEmptySize = 110,
  data = {},
  textMaxWidths = [],
  onClick = null,
  ...props
}) => {
  const everySize = (size - bottomEmptySize) / 3;

  const { lawyer, accountant, certifiedPublicValuer } = data;

  return (
    <>
      <Sector // 资评公司
        size={size}
        color={legendColor[4]}
        textMaxWidth={textMaxWidths[2]}
        textHeight={Math.ceil(everySize)}
        onClickPerson={(id) => {
          id && window.open(`/person/${id}?occType=4`);
        }}
        onClickCompany={(id) => {
          id && window.open(`/company/${id}?entType=4`);
        }}
        texts={certifiedPublicValuer}
        {...props}
      />
      <Sector // 会计师事务所
        size={Math.floor(size - everySize)}
        color={legendColor[3]}
        textMaxWidth={textMaxWidths[1]}
        textHeight={Math.ceil(everySize)}
        onClickPerson={(id) => {
          id && window.open(`/person/${id}?occType=3`);
        }}
        onClickCompany={(id) => {
          id && window.open(`/company/${id}?entType=3`);
        }}
        texts={accountant}
        {...props}
      />
      <Sector // 律师事务所
        size={Math.floor(size - everySize * 2)}
        color={legendColor[2]}
        textMaxWidth={textMaxWidths[0]}
        textHeight={Math.ceil(everySize)}
        onClickPerson={(id) => {
          id && window.open(`/person/${id}?occType=2`);
        }}
        onClickCompany={(id) => {
          id && window.open(`/company/${id}?entType=2`);
        }}
        texts={lawyer}
        {...props}
      />
    </>
  );
};

export default StackedSector;
