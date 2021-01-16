/**
 * IConditionalRenderProps
 * @interface IConditionalRenderProps
 */
export interface IConditionalRenderProps {
  conditional: boolean;
  noMatch?: React.ReactElement | null;
}
