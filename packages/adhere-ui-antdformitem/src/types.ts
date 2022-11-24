import { SelectProps } from 'antd/es/select';

interface LabelValue {
  label: string;
  value: string | number;
}

interface RadioLabelValue extends LabelValue {
  disabled: boolean;
}

interface FormItemProps {
  value: any;
  onChange: (value?: any) => void;
}

export interface SelectFormItemProps {
  selectProps: SelectProps & {
    onChange: (any) => void;
  };
  dataSource: LabelValue[];
}

export interface RadioSelectFormItemProps extends FormItemProps, SelectFormItemProps {
  dataSource: RadioLabelValue[];
}

export interface CheckAllFormItemProps extends FormItemProps, SelectFormItemProps {
  onCheckAllChange: (checkAll: boolean) => void;
}
