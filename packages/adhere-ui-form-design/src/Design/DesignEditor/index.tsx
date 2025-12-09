import classNames from 'classnames';
import React, { useContext } from 'react';
import type { FC, ReactNode } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';

import { parseDesign } from '../../Fields';
import { SELECT_PREFIX } from '../../constant';
import type { DesignEditorProps, DesignValue } from '../../types';
import { DesignContext } from '../Context';
import Actions from './Actions';
import ModeChange from './ModeChange';

const selectPrefix = `${SELECT_PREFIX}-design-editor`;

/**
 * DesignEditor
 */
const DesignEditor: FC<DesignEditorProps> = () => {
  const [form] = Form.useForm();

  const { getItems, getDesignValue, getActiveFieldId, getTerminal, setActiveFieldId } =
    useContext(DesignContext);

  const items = getItems();
  const value = getDesignValue() as DesignValue;
  const activeFieldId = getActiveFieldId();
  const terminal = getTerminal();

  return (
    <div className={classNames(selectPrefix)}>
      <div className={classNames(`${selectPrefix}-header`)}>
        <div className={classNames(`${selectPrefix}-mode`)}>
          <ModeChange />
        </div>

        <div className={classNames(`${selectPrefix}-actions`)}>
          <Actions />
        </div>
      </div>

      <div className={classNames(`${selectPrefix}-body`)}>
        <Form name="editor" form={form}>
          {
            parseDesign({
              value,
              terminal,
              items,
            }) as ReactNode
          }
        </Form>
      </div>
    </div>
  );
};

export default DesignEditor;
