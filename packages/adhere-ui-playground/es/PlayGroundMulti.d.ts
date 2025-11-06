import React from 'react';
import APlayGround from './APlayGround';
import { PlayGroundMultiProps, PlayGroundMultiState } from './types';
/**
 * PlayGroundMulti
 * @class PlayGroundMulti
 * @classdesc PlayGroundMulti
 */
declare class PlayGroundMulti extends APlayGround<PlayGroundMultiProps, PlayGroundMultiState> {
    static displayName: string;
    configMap: Map<string, {
        render: (config: any, index: number) => React.ReactElement;
        getCodeText: (config: any) => string;
    }>;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    /**
     * getClipboardText
     * @return Promise<string>
     */
    protected getClipboardText(e: React.MouseEvent): Promise<string>;
    /**
     * renderCodeView - 代码展示视图
     * @param config
     * @param index
     * <CodePanel {...config} />
     */
    protected renderCodePanelView(config: any, index: any): React.JSX.Element;
    /**
     * renderCodeView
     */
    protected renderCodeView(): React.JSX.Element;
}
export declare const PlayGroundMultiDefaultProps: PlayGroundMultiProps;
export declare const PlayGroundMultiPropTypes: {
    id: any;
    cardProps: any;
    isActive: any;
    expand: any;
    config: any;
};
export default PlayGroundMulti;
