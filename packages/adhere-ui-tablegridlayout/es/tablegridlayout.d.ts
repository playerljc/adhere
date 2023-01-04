import PropTypes from 'prop-types';
import { ReactElement } from 'react';
import type { DataItem, RenderDetail, TableGridLayoutProps } from './types';
/**
 * TableGridLayout
 * @param data
 * @param className
 * @param style
 * @param props
 * @return {ReactElement}
 * @constructor
 */
declare function TableGridLayout({ data, className, style, ...props }: TableGridLayoutProps): ReactElement;
declare namespace TableGridLayout {
    var Label: (props: any) => JSX.Element;
    var Value: (props: any) => JSX.Element;
    var renderGridSearchFormGroup: (data?: DataItem[] | undefined, props?: Omit<TableGridLayoutProps, "data"> | undefined) => JSX.Element;
    var getRenderDetail: (data: DataItem[], props: Omit<TableGridLayoutProps, "data">) => RenderDetail;
    var defaultProps: {
        data: never[];
        layout: string;
        bordered: boolean;
    };
    var propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        innerClassName: PropTypes.Requireable<string>;
        innerStyle: PropTypes.Requireable<object>;
        bordered: PropTypes.Requireable<boolean>;
        layout: PropTypes.Requireable<string>;
        density: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        parity: PropTypes.Requireable<boolean>;
        data: PropTypes.Validator<(PropTypes.InferProps<{
            className: PropTypes.Requireable<string>;
            style: PropTypes.Requireable<object>;
            name: PropTypes.Requireable<string>;
            width: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
            defaultLabelWidth: PropTypes.Requireable<number>;
            padding: PropTypes.Requireable<(number | null | undefined)[]>;
            colgroup: PropTypes.Validator<(number | null | undefined)[]>;
            columnCount: PropTypes.Validator<number>;
            data: PropTypes.Validator<(PropTypes.InferProps<{
                key: PropTypes.Validator<string>;
                label: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
                value: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
            }> | null | undefined)[]>;
        }> | null | undefined)[]>;
    };
}
export default TableGridLayout;
