import type { StepsSwiperItemProps, StepsSwiperProps } from '@baifendian/adhere-ui-anthoc/es/types';
import type { CSSProperties, FC } from 'react';
import type { StepsStepSettingItem } from '../../../components/StepsStepSettingFormItem';
import type { DesignValue, StyleProps } from '../../../types';
export type { StepsStepSettingItem };
export type InternalStepsLayoutProps = Omit<StepsSwiperProps, 'items'> & {
    id?: string;
    className?: string;
    style?: CSSProperties;
    styleProps?: StyleProps;
    children?: DesignValue[];
    /** 步骤配置，与 children 按下标一一对应 */
    stepItems?: StepsStepSettingItem[];
    /** 已构建好的 StepsSwiper items（优先级高于 children + stepItems） */
    items?: StepsSwiperItemProps[];
};
/**
 * InternalSteps
 * @description 设计器中的 Steps 容器，属性对齐 StepsSwiper / antd Steps
 */
declare const InternalSteps: FC<InternalStepsLayoutProps>;
export default InternalSteps;
