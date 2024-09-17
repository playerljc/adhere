import ReactAop from './ReactAop';
import ReactAutoTryCatch from './ReactAutoTryCatch';
declare const _default: {
    ReactErrorBoundaries: {
        (Component: any): import("react").ForwardRefExoticComponent<import("react").RefAttributes<unknown>>;
        setDefaultErrorUI(defaultErrorUI: React.ReactElement): void;
    };
    ReactAop: typeof ReactAop;
    ReactAutoTryCatch: typeof ReactAutoTryCatch;
};
export default _default;
