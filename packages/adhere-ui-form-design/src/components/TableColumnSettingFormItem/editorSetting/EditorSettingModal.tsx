import { Form, Modal } from 'antd';
import React, { useEffect } from 'react';
import type { FC } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { TableColumnEditorType } from '../TableColumnSettingFormItem';
import { DatePickerEditorTypes, InputNumberEditorTypes } from './constants';
import ColorPickerSection from './sections/ColorPicker';
import DatePickerSection from './sections/DatePicker';
import InputSection from './sections/Input';
import InputNumberSection from './sections/InputNumber';
import RangePickerSection from './sections/RangePicker';
import RateSection from './sections/Rate';
import SliderSection from './sections/Slider';
import SwitchSection from './sections/Switch';
import TextAreaSection from './sections/TextArea';
import TimePickerSection from './sections/TimePicker';
import type { EditorSettingModalProps } from './types';

const EditorSettingModal: FC<EditorSettingModalProps> = ({
  open,
  editorType,
  value,
  onCancel,
  onOk,
}) => {
  const [form] = Form.useForm();

  const pickerValue = Form.useWatch('picker', form) as string | undefined;
  const dateBoundMode = (Form.useWatch('dateBoundMode', form) as string | undefined) ?? '';

  useEffect(() => {
    if (!open) return;
    form.resetFields();
    form.setFieldsValue(value ?? {});
  }, [open, editorType, value, form]);

  const renderBody = (_editorType: TableColumnEditorType | undefined) => {
    if (!_editorType) return null;
    if (_editorType === 'input') return <InputSection />;
    if (_editorType === 'textArea') return <TextAreaSection />;
    if (InputNumberEditorTypes.has(_editorType)) return <InputNumberSection />;
    if (DatePickerEditorTypes.has(_editorType))
      return <DatePickerSection pickerValue={pickerValue} dateBoundMode={dateBoundMode} />;
    if (_editorType === 'timePicker') return <TimePickerSection />;
    if (_editorType === 'rangePicker') return <RangePickerSection />;
    if (_editorType === 'slider' || _editorType === 'sliderRange') return <SliderSection />;
    if (_editorType === 'rate') return <RateSection />;
    if (_editorType === 'switch') return <SwitchSection />;
    if (_editorType === 'colorPicker') return <ColorPickerSection />;
    return null;
  };

  return (
    <Modal
      title={`${Intl.get('settings')} - ${editorType ?? ''}`}
      open={open}
      styles={{
        body: {
          maxHeight: '60vh',
          overflowY: 'auto',
        },
      }}
      onCancel={onCancel}
      destroyOnHidden
      onOk={() => {
        const next = form.getFieldsValue(true);
        onOk(next);
      }}
    >
      <Form form={form} layout="vertical" preserve={false}>
        {renderBody(editorType)}
      </Form>
    </Modal>
  );
};

export default EditorSettingModal;
