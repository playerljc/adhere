/// <reference types="react" />
import PlayGround from './PlayGround';
import PlayGroundTab from './PlayGroundTab';
import PlayGroundMulit from './PlayGroundMulit';
declare const _default: {
    CodePanel: import("react").MemoExoticComponent<any>;
    CodeTabPanel: import("react").MemoExoticComponent<any>;
    CodeBoxPanel: import("react").MemoExoticComponent<any>;
    PlayGround: typeof PlayGround;
    PlayGroundTab: typeof PlayGroundTab;
    PlayGroundMulit: typeof PlayGroundMulit;
    PlayGroundPage: import("./types").PlayGroundPageHOC<HTMLDivElement, import("./types").PlayGroundPageProps>;
    Props: import("react").FC<import("./types").PropsProps>;
    FunctionProps: import("react").FC<import("./types").FunctionProps>;
    AnchorNavigation: import("react").FC<import("./types").AnchorNavigationProps>;
    AnchorNavigationContext: import("react").Context<import("./types").AnchorNavigationContextValue>;
    PlayGroundPageContext: import("react").Context<import("./types").PlayGroundPageContextValue>;
};
export default _default;
