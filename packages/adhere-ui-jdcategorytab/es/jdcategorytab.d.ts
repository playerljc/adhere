import React from 'react';
import { IJdCategoryTabProps, IJdCategoryTabState } from './types';
import JdCategoryTabItem from './item';
/**
 * JdCategoryTab
 * @class JdCategoryTab
 * @classdesc JdCategoryTab
 */
declare class JdCategoryTab extends React.Component<IJdCategoryTabProps, IJdCategoryTabState> {
    static defaultProps: any;
    static propTypes: any;
    private el;
    private menuEl;
    private scroll;
    private ease;
    private menuInnerEl;
    static Item: typeof JdCategoryTabItem;
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Readonly<IJdCategoryTabProps>, nextContext: any): void;
    componentDidUpdate(prevProps: Readonly<IJdCategoryTabProps>, prevState: Readonly<IJdCategoryTabState>, snapshot?: any): void;
    private initMenuScroll;
    private findElByKey;
    scrollTo(key: any, time: number | undefined, easing: any): void;
    private renderMenu;
    render(): JSX.Element;
}
export default JdCategoryTab;
