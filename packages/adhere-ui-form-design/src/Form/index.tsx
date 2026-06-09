import classNames from 'classnames';
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import type { CSSProperties, FC, PropsWithoutRef, ReactNode, RefAttributes } from 'react';

import { Form as AntForm } from '@baifendian/adhere-ui-anthoc';

import HiddenFormItemsPortal from '../components/HiddenFormItemsPortal';
import { FormContext } from '../components/FormContext';
import { SELECT_PREFIX } from '../constant';
import { DesignContext } from '../Design/Context';
import { parseDesign } from '../Fields';
import { define as flexLayoutDefine } from '../Fields/layout/FlexLayout';
import type {
  ActionsProps,
  DataSourceConfig,
  DesignContextType,
  DesignItem,
  DesignValue,
  DesignValueProps,
  FieldProps,
  FlexProps,
  FormComponent,
  FormHandler,
  FormItemProps,
  FormProps,
  MobileViewportPresetId,
  StyleProps,
  Terminal,
  ToolBoxOption,
} from '../types';

import './index.less';

const selectPrefix = `${SELECT_PREFIX}-form`;

/**
 * 在表单运行时模式下不会被使用的 setter / mutator
 * @description Form 模式不需要修改设计树；这里提供 noop 以满足 DesignContextType 契约
 */
const noop = () => {};

/**
 * InternalFormDesignForm
 * @description 表单运行时渲染组件
 *  - 复用 parseDesign + renderDesign 渲染管线
 *  - 通过 mode='form' 关闭 DesignFieldWrapper / DroppableContainer 的设计态交互
 *  - ref 直接转发 antd FormInstance，调用方使用原生 setFieldsValue/getFieldsValue/validateFields/resetFields/submit 等 API
 */
const InternalFormDesignForm = memo<PropsWithoutRef<FormProps> & RefAttributes<FormHandler>>(
  forwardRef<FormHandler, FormProps>((props, ref) => {
    const {
      className,
      style,
      value,
      terminal = 'desktop',
      items,
      name,
      initialValues,
      onFinish,
      onFinishFailed,
      onValuesChange,
      onFieldsChange,
      layout,
      disabled,
      colon,
      labelAlign,
      labelWrap,
      preserve,
      requiredMark,
      scrollToFirstError,
      size,
      validateMessages,
      validateTrigger,
      variant,
    } = props;

    const [form] = AntForm.useForm();

    const fullscreenRootRef = useRef<HTMLDivElement>(null);

    const hiddenContainerId = useMemo(
      () => `formHidden_${Math.random().toString(36).slice(2, 10)}`,
      [],
    );

    const getDesignValue = useCallback(() => value, [value]);
    const getTerminal = useCallback<() => Terminal>(() => terminal, [terminal]);
    const getItems = useCallback<() => DesignItem[]>(
      () => [flexLayoutDefine(), ...(items ?? [])],
      [items],
    );
    const getFormDisabled = useCallback(() => disabled, [disabled]);

    const designContextValue = useMemo<DesignContextType>(
      () => ({
        mode: 'form',
        fullscreenRootRef,
        getDesignValue,
        getTerminal,
        getItems,
        getActiveFieldId: () => null,
        getActiveDesignFieldValue: () => null,
        getOverlayCursor: () => 'default' as CSSProperties['cursor'],
        getActiveToolItemData: () => null,
        getToolBox: () => ({} as ToolBoxOption),
        getRenderToolBar: () => undefined,
        getRenderMenuBar: () => undefined,
        getToolbarEllipseCount: () => undefined,
        getMenuBarEllipseCount: () => undefined,
        getFormDisabled,
        getMobileViewportPresetId: () => 'w375' as MobileViewportPresetId,
        setMobileViewportPresetId: noop,
        setCurrentTerminal: noop,
        setActiveFieldId: noop,
        setFormItemProps: noop as (id: string, props: FormItemProps) => void,
        setFieldProps: noop as (id: string, props: FieldProps) => void,
        setStyleProps: noop as (id: string, props: StyleProps) => void,
        setActionsProps: noop as (id: string, props: ActionsProps) => void,
        setFlexProps: noop as (id: string, props: FlexProps) => void,
        setDataSourceConfig: noop as (id: string, config: DataSourceConfig) => void,
        addChildrenById: noop as (id: string, child: DesignValue) => void,
        deleteFieldByChildren: noop as (id: string) => void,
        updateChildrenById: noop as (id: string, children: DesignValueProps['children']) => void,
        swapOutlineNodes: noop as (idA: string, idB: string) => void,
        resetDesignValue: noop,
        loadDesignValue: noop as (designValue: DesignValue) => void,
        getCanUndo: () => false,
        getCanRedo: () => false,
        undo: noop,
        redo: noop,
      }),
      [getDesignValue, getTerminal, getItems, getFormDisabled],
    );

    useImperativeHandle(ref, () => form, [form]);

    const content = useMemo<ReactNode>(
      () =>
        parseDesign({
          parentId: undefined,
          value,
          context: designContextValue,
        }) as ReactNode,
      [value, designContextValue],
    );

    return (
      <DesignContext value={designContextValue}>
        <FormContext.Provider value={form}>
          <div
            ref={fullscreenRootRef}
            className={classNames(`${selectPrefix}-wrapper`, className)}
            style={style}
          >
            <AntForm
              name={name}
              form={form}
              initialValues={initialValues}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              onValuesChange={onValuesChange}
              onFieldsChange={onFieldsChange}
              layout={layout}
              disabled={disabled}
              colon={colon}
              labelAlign={labelAlign}
              labelWrap={labelWrap}
              preserve={preserve}
              requiredMark={requiredMark}
              scrollToFirstError={scrollToFirstError}
              size={size}
              validateMessages={validateMessages}
              validateTrigger={validateTrigger}
              variant={variant}
              className={classNames(`${selectPrefix}`)}
            >
              <div id={hiddenContainerId} />
              <HiddenFormItemsPortal value={value} containerId={hiddenContainerId} />
              {content}
            </AntForm>
          </div>
        </FormContext.Provider>
      </DesignContext>
    );
  }),
);

const FormDesignForm = InternalFormDesignForm as FormComponent;

FormDesignForm.displayName = 'FormDesignForm';

export default FormDesignForm;
