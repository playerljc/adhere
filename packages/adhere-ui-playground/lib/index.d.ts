/// <reference types="react" />
import Props from './Props';
import FunctionProps from './FunctionProps';
import PlayGround from './PlayGround';
import PlayGroundTab from './PlayGroundTab';
import PlayGroundMulit from './PlayGroundMulit';
import AnchorNavigation from './AnchorNavigation';
declare const _default: {
    CodePanel: import("react").MemoExoticComponent<any>;
    CodeTabPanel: import("react").MemoExoticComponent<any>;
    CodeBoxPanel: import("react").MemoExoticComponent<any>;
    PlayGround: typeof PlayGround;
    PlayGroundTab: typeof PlayGroundTab;
    PlayGroundMulit: typeof PlayGroundMulit;
    PlayGroundPage: import("react").ForwardRefExoticComponent<Pick<any, string | number | symbol> & import("react").RefAttributes<unknown>>;
    Props: typeof Props;
    FunctionProps: typeof FunctionProps;
    AnchorNavigation: typeof AnchorNavigation;
    AnchorNavigationContext: import("react").Context<{
        scrollEl: null;
    }>;
    PlayGroundPageContext: import("react").Context<{
        scrollEl: null;
    }>;
};
export default _default;
