/// <reference types="react" />
import PropTypes from 'prop-types';
import { IConfigProviderProps } from './types';
/**
 * ConfigProvider
 * @constructor
 * @classdesc 全局配置 国际化、字典配置
 */
declare function ConfigProvider(props: IConfigProviderProps): JSX.Element;
declare namespace ConfigProvider {
    var defaultProps: {};
    var propTypes: {
        intl: PropTypes.Requireable<object>;
    };
}
export default ConfigProvider;
