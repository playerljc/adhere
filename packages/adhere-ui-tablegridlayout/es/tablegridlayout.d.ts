/// <reference types="react" />
import PropTypes from 'prop-types';
import { ITableGridLayoutProps, IDataItem } from './types';
/**
 * renderGridSearchFormGroup
 * @param data
 * @param props
 * @return {JSX.Element}
 */
export declare function renderGridSearchFormGroup(data: IDataItem[], props: Pick<ITableGridLayoutProps, Exclude<keyof ITableGridLayoutProps, 'className' | 'style' | 'data'>>): JSX.Element;
export declare const Label: (props: any) => JSX.Element;
export declare const Value: (props: any) => JSX.Element;
/**
 * TableGridLayout
 * @param data
 * @param className
 * @param style
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
declare function TableGridLayout({ data, className, style, ...props }: ITableGridLayoutProps): JSX.Element;
declare namespace TableGridLayout {
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
        density: PropTypes.Requireable<string | number>;
        parity: PropTypes.Requireable<boolean>;
        data: PropTypes.Validator<(PropTypes.InferProps<{
            className: PropTypes.Requireable<string>;
            style: PropTypes.Requireable<object>;
            name: PropTypes.Requireable<string>;
            width: PropTypes.Requireable<string | number>;
            defaultLabelWidth: PropTypes.Requireable<number>;
            padding: PropTypes.Requireable<(number | null | undefined)[]>;
            colgroup: PropTypes.Validator<(number | null | undefined)[]>;
            columnCount: PropTypes.Validator<number>;
            data: PropTypes.Validator<(PropTypes.InferProps<{
                key: PropTypes.Validator<string>;
                label: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
                value: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            }> | null | undefined)[]>;
        }> | null | undefined)[]>;
    };
}
export default TableGridLayout;
