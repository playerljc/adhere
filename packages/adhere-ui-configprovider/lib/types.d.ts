import type { NamedExoticComponent, ReactNode } from 'react';
import type { CSSProperties } from 'react';
import type { ThemeConfig as CSSThemeConfig } from '@baifendian/adhere-ui-css/es/types';
import { Context } from './Context';
import themeFunction from './theme';
import useTheme from './useTheme';
/**
 * 国际化语言类型
 */
export type IntlLanguage = 'en_US' | 'zh_CN' | 'pt_PT';
/**
 * 国际化配置类型
 */
export type IntlType = {
    /** 当前语言 */
    lang?: IntlLanguage;
    /** 语言包配置 */
    locales?: Record<string, any>;
    /** 前缀 */
    prefix?: string;
};
/**
 * 媒体配置类型
 */
export type MediaConfig = {
    /** 是否使用媒体查询 */
    isUseMedia?: boolean;
    /** 设计稿宽度 */
    designWidth?: number;
};
/**
 * 路由类型
 */
export type RouterType = 'hash' | 'browser';
/**
 * 主题配置类型
 */
export type ThemeConfig = CSSThemeConfig & {
    /** 组件主题配置 */
    components?: {
        normal?: {
            AutoComplete?: {
                margin?: string;
                padding?: string;
                loadingPadding?: string;
                loadingTextAlign?: string;
            };
            BackTopAnimation?: {
                right?: string;
                bottom?: string;
                width?: string;
                height?: string;
                backgroundImage?: string;
                backgroundSize?: string;
                maskBackgroundColor?: string;
            };
            CascadeCompared?: {
                indicatorBorderBottom?: string;
                cellBorderRight?: string;
                cellBorderBottom?: string;
                cellFontSize?: string;
            };
            Comment?: {
                margin?: string;
                padding?: string;
                itemPadding?: string;
                itemFirstChildPaddingTop?: string;
                itemNotLastChildMarginBottom?: string;
                replyTextareaWrapMarginBottom?: string;
                replyTextareaHeight?: string;
                replyToolbarPadding?: string;
                replyToolbarItemEmojiFontSize?: string;
                replyToolbarItemNotLastChildMarginRight?: string;
                nodeAvatarWrapWidth?: string;
                nodeAvatarWrapHeight?: string;
                nodeAvatarWrapMarginRight?: string;
                nodeAvatarWrapPadding?: string;
                nodeTitleRowAuthorMarginRight?: string;
                nodeTitleRowAuthorColor?: string;
                nodeTitleRowAuthorFontWeight?: string;
                nodeTitleRowDateTimeColor?: string;
                nodeTitleRowDateTimeFontSize?: string;
                nodeContentWrapMargin?: string;
                nodeContentWrapColor?: string;
                nodeContentWrapFontWeight?: string;
                nodeActionsMargin?: string;
                nodeActionsPadding?: string;
                nodeActionsActionColor?: string;
                nodeActionsActionFontWeight?: string;
                nodeActionsActionNotLastChildMarginRight?: string;
                nodeChildrenItemPadding?: string;
                nodeChildrenItemFirstChildPaddingTop?: string;
                nodeChildrenItemNotLastChildMarginBottom?: string;
                nodeChildrenItemMoreMarginBottom?: string;
                nodeChildrenItemMoreMarginLeft?: string;
                nodeChildrenItemMoreReplyIconMarginRight?: string;
                nodeChildrenItemMoreReplyIconFontWeight?: string;
                nodeChildrenItemMoreReplyIconFontSize?: string;
                nodeCollapseMarginTop?: string;
                nodeCollapseFontWeight?: string;
                nodeCollapseFirstChildMarginRight?: string;
                nodeAvatarWrapReplyWidth?: string;
                nodeAvatarWrapReplyHeight?: string;
                innerListLoadingWrapPadding?: string;
                innerListLoadingWrapFixedMarginRight?: string;
            };
            ContextMenu?: {
                subMenuMargin?: string;
                subMenuPadding?: string;
                subMenuBackgroundColor?: string;
                subMenuBorderRadius?: string;
                subMenuBoxShadow?: string;
                menuItemAlignItems?: string;
                menuItemHeight?: string;
                menuMenuItemIconColor?: string;
                menuItemHoverBackgroundColor?: string;
                menuItemHoverBorderColor?: string;
                menuItemIconAlignItems?: string;
                menuItemIconJustifyContent?: string;
                menuItemIconWidth?: string;
                menuItemIconMargin?: string;
                menuItemNameColor?: string;
                menuItemMoreMarginRight?: string;
                menuItemMoreColor?: string;
                menuItemMoreFontSize?: string;
                menuItemSeparationMargin?: string;
                menuItemSeparationBackgroundColor?: string;
            };
            CurrencySymbol?: {
                boldFontWeight?: string;
                dangerColor?: string;
                symbolMarginRight?: string;
                symbolSmallFontSize?: string;
                symbolMiddleFontSize?: string;
                symbolLargeFontSize?: string;
                currencySymbolTopVerticalAlign?: string;
                currencySymbolCenterVerticalAlign?: string;
                currencySymbolBottomVerticalAlign?: string;
            };
            Ellipsis?: {
                moreMarginTop?: string;
                moreColor?: string;
                customToolTipZIndex?: string;
                customToolTipPadding?: string;
                customToolTipColor?: string;
                customToolTipFontWeight?: string;
                customToolTipFontSize?: string;
                customToolTipBackgroundColor?: string;
                customToolTipArrowBottom?: string;
                customToolTipArrowTop?: string;
                customToolTipArrowRight?: string;
                customToolTipArrowBeforeBorderTop?: string;
                customToolTipArrowBeforeBorderRight?: string;
                customToolTipArrowLeft?: string;
                customToolTipArrowBeforeBorderBottom?: string;
                customToolTipArrowBeforeBorderLeft?: string;
                customToolTipInnerPadding?: string;
                customToolTipInnerBorder?: string;
                customToolTipInnerBorderRadius?: string;
                customToolTipArrowWidth?: string;
                customToolTipArrowHeight?: string;
                customToolTipArrowBeforeWidth?: string;
                customToolTipArrowBeforeHeight?: string;
                customToolTipArrowBeforeTransform?: string;
            };
            Expression?: {
                expressionMinHeight?: string;
                editorPadding?: string;
                editorColor?: string;
                editorLineHeight?: string;
                editorBorder?: string;
                editorBorderRadius?: string;
                editorTransition?: string;
                editorShowClearPaddingRight?: string;
                editorFocusBorderColor?: string;
                editorFocusBoxShadow?: string;
                editorFocusBorderInlineEndWidth?: string;
                editorTextColor?: string;
                editorOperatorColor?: string;
                editorOperatorFontWeight?: string;
                editorPlaceholderPadding?: string;
                editorPlaceholderColor?: string;
                editorPlaceholderLineHeight?: string;
                editorClearWidth?: string;
                editorClearSpanColor?: string;
                editorClearSpanFontSize?: string;
                editorClearSpanBackgroundColor?: string;
                editorClearSpanBorderRadius?: string;
                editorClearSpanTransition?: string;
                operatorsQuickTipsZIndex?: string;
                operatorsQuickTipsWidth?: string;
                operatorsQuickTipsMargin?: string;
                operatorsQuickTipsBackgroundColor?: string;
                operatorsQuickTipsBorder?: string;
                operatorsQuickTipsBorderRadius?: string;
                operatorsQuickTipsBoxShadow?: string;
                operatorsQuickTipsHeaderHeight?: string;
                operatorsQuickTipsHeaderPadding?: string;
                operatorsQuickTipsHeaderBorderBottom?: string;
                operatorsQuickTipsHeaderHoverBackgroundColor?: string;
                operatorsQuickTipsHeaderHoverCursor?: string;
                operatorsQuickTipsHeaderIFontSize?: string;
                operatorsQuickTipsMainMaxHeight?: string;
                operatorsQuickTipsMainLiPadding?: string;
                operatorsQuickTipsMainLiColor?: string;
                operatorsQuickTipsMainLiFontWeight?: string;
                operatorsQuickTipsMainLiFontSize?: string;
                operatorsQuickTipsMainLiHoverBackgroundColor?: string;
                viewTextColor?: string;
                viewOperatorColor?: string;
                viewOperatorFontWeight?: string;
            };
            FlexLayout?: {
                fixedTriggerZIndex?: string;
                fixedTriggerColor?: string;
                fixedTriggerFontSize?: string;
                toolBarLayoutMainAutoWrapPadding?: string;
                toolBarLayoutTopBottomAlignItems?: string;
                toolBarLayoutTopBottomJustifyContent?: string;
                toolBarLayoutTopBottomPadding?: string;
                toolBarLayoutToolbarItemNotLastChildMarginRight?: string;
                layoutToolBarLayoutTopBorderBottom?: string;
                toolBarLayoutBottomBorderTop?: string;
            };
            FontSizeSetting?: {
                width?: string;
                height?: string;
                settingRangeWrapMargin?: string;
                settingSeparatedToolHeight?: string;
                settingSeparatedToolMargin?: string;
                settingSeparatedWidth?: string;
                settingSeparatedBackground?: string;
                settingSeparatedSpanTop?: string;
                settingSeparatedSpanLeft?: string;
                settingSeparatedSpanWidth?: string;
                settingSeparatedSpanColor?: string;
                settingSeparatedSpanFontSize?: string;
                settingSeparatedSpanLastChildLeft?: string;
                settingRangeWrapAntSliderMarginTop?: string;
                beforeAfterMarginTop?: string;
                beforeAfterColor?: string;
                beforeAfterFontSize?: string;
                beforeLeft?: string;
                beforeRight?: string;
            };
            GlobalIndicator?: {
                backgroundColor?: string;
                textColor?: string;
                textFontSize?: string;
                dotWidth?: string;
                dotHeight?: string;
            };
            JdCategoryTab?: {
                menuInnerMargin?: string;
                menuInnerPadding?: string;
                menuItemMargin?: string;
                menuItemPadding?: string;
                menuItemNotLastChildABorderBottom?: string;
                menuItemActiveAColor?: string;
                menuItemActiveABorderRight?: string;
                menuItemAPadding?: string;
                menuItemAFontSize?: string;
                menuItemABackground?: string;
                menuItemABorderRight?: string;
                tabMargin?: string;
                tabPadding?: string;
                tabItemMargin?: string;
                tabItemPadding?: string;
            };
            MessageDialog?: {
                antModalHeaderFontSize?: string;
                antModalBodyFontSize?: string;
                antModalFooterBorderTop?: string;
                renderIconFixedMarginRight?: string;
                maximizeModalMaxHeight?: string;
                maximizeModalInnerMaxWidth?: string;
                maximizeModalInnerMaxHeight?: string;
                maximizeModalInnerPadding?: string;
                maximizeModalInnerBackgroundColor?: string;
                maximizeModalInnerBorderRadius?: string;
                maximizeModalInnerBoxShadow?: string;
                maximizeModalHeaderGap?: string;
                maximizeModalHeaderPaddingBottom?: string;
                maximizeModalHeaderTitleMargin?: string;
                maximizeModalHeaderTitleColor?: string;
                maximizeModalHeaderTitleFontWeight?: string;
                maximizeModalHeaderTitleFontSize?: string;
                maximizeModalHeaderTitleLineHeight?: string;
                maximizeModalHeaderActionFontSize?: string;
                maximizeModalBodyAntModalContentPadding?: string;
                maximizeModalBodyAntModalContentBorderRadius?: string;
            };
            Notification?: {
                zIndex?: number;
                ulMargin?: string;
                ulPadding?: string;
                ulLiPadding?: string;
                ulLiInfoPadding?: string;
                ulLiInfoFontSize?: string;
                standardHeaderPadding?: string;
                standardHeaderIconImgWidth?: string;
                standardHeaderIconImgHeight?: string;
                standardHeaderIconImgMarginRight?: string;
                standardHeaderIconImgBorderRadius?: string;
                standardHeaderLabelFontSize?: string;
                standardContentMediaLWidth?: string;
                standardContentMediaLHeight?: string;
                standardContentMediaLMargin?: string;
                standardContentMediaRMargin?: string;
                standardContentMediaRFontSize?: string;
                standardContentRowTitleMarginBottom?: string;
                standardContentRowTitleFontSize?: string;
                standardContentRowTextFontSize?: string;
                standardContentRowTextLineHeight?: string;
                closeBtnTop?: string;
                closeBtnRight?: string;
                closeBtnZIndex?: number;
                topBottomIosUlBackgroundColor?: string;
                topBottomIosUlLiMargin?: string;
                topBottomIosUlLiBackgroundColor?: string;
                topBottomIosUlLiBorderRadius?: string;
                topBottomIosUlLiBoxShadow?: string;
                topBottomIosLiInfoColor?: string;
                topBottomIosUlLiCloseBtnWidth?: string;
                topBottomIosUlLiCloseBtnHeight?: string;
                topBottomIosUlLiCloseBtnMarginTop?: string;
                materialUlBackgroundColor?: string;
                materialUlLiBorderBottom?: string;
                materialUlLiBorderRadius?: string;
                materialUlLiInfoColor?: string;
                materialUlLiCloseBtnWidth?: string;
                materialUlLiCloseBtnHeight?: string;
            };
            OLMap?: {
                olZoomRight?: string;
                olZoomBottom?: string;
                olZoomLeft?: string;
                olFullScreenTop?: string;
                olFullScreenRight?: string;
                olFullScreenBottom?: string;
                olFullScreenLeft?: string;
                olScaleLineTop?: string;
                olScaleLineRight?: string;
                olScaleLineBottom?: string;
                olScaleLineLeft?: string;
                olMousePositionRight?: string;
                olMousePositionBottom?: string;
                olMousePositionPadding?: string;
                olMousePositionColor?: string;
                olMousePositionFontSize?: string;
                olMousePositionBackground?: string;
                olMousePositionBorder?: string;
                olMousePositionBorderRadius?: string;
            };
            Playground?: {
                cardBorder?: string;
                borderRadius?: string;
                cardHeaderMinHeight?: string;
                cardHeaderMarginBottom?: string;
                cardHeaderPadding?: string;
                cardHeaderColor?: string;
                cardHeaderFontWeight?: string;
                cardHeaderFontSize?: string;
                cardHeaderBackground?: string;
                cardHeaderBorderBottom?: string;
                cardHeaderBorderRadius?: string;
                cardHeaderTitlePadding?: string;
                cardHeaderExtraPadding?: string;
                cardHeaderExtraColor?: string;
                cardHeaderExtraFontWeight?: string;
                cardHeaderExtraFontSize?: string;
                cardBodyPadding?: string;
                cardDescriptionPadding?: string;
                cardDescriptionBorderTop?: string;
                cardDescriptionTitleTop?: string;
                cardDescriptionTitleMaxWidth?: string;
                cardDescriptionTitleMarginLeft?: string;
                cardDescriptionTitlePadding?: string;
                cardDescriptionTitleColor?: string;
                cardDescriptionTitleBackgroundColor?: string;
                cardDescriptionTitleBorderRadius?: string;
                cardDescriptionTitleTransition?: string;
                cardActionMargin?: string;
                cardActionPadding?: string;
                cardActionBorderTop?: string;
                cardActionItemMargin?: string;
                cardActionItemColor?: string;
                cardActionItemNotLastChildBorderRight?: string;
                simpleTabsHeadMargin?: string;
                simpleTabsHeadPadding?: string;
                simpleTabsHeadBorderBottom?: string;
                simpleTabsHeadLiPadding?: string;
                simpleTabsHeadLiNotFirstChildMarginLeft?: string;
                simpleTabsHeadLiActiveColor?: string;
                simpleTabsHeadLiActiveBeforeHeight?: string;
                simpleTabsHeadLiActiveBeforeBackgroundColor?: string;
                messageTop?: string;
                messageLeft?: string;
                messageZIndex?: string;
                messageMargin?: string;
                messagePadding?: string;
                messageColor?: string;
                messageFontSize?: string;
                messageLineHeight?: string;
                messageNoticePadding?: string;
                messageNoticeContentPadding?: string;
                messageNoticeContentBorderRadius?: string;
                messageNoticeContentBoxShadow?: string;
                messageSuccessMargin?: string;
                messageSuccessPadding?: string;
                messageSuccessAnticonMarginRight?: string;
                messageSuccessAnticonColor?: string;
                messageSuccessAnticonFontSize?: string;
                tableInnerMargin?: string;
                tableInnerFontSize?: string;
                tableInnerLineHeight?: string;
                tableInnerBorder?: string;
                tableHeaderColumnPadding?: string;
                tableHeaderColumnColor?: string;
                tableHeaderColumnFontWeight?: string;
                tableHeaderColumnBackground?: string;
                tableHeaderColumnBorder?: string;
                tableHeaderColumnFirstChildBorderLeft?: string;
                tableHeaderColumnFirstChildBorderRight?: string;
                tableRowHoverBackground?: string;
                tableCellPadding?: string;
                tableCellColor?: string;
                tableCellBorder?: string;
                tableCellFirstChildWidth?: string;
                tableCellFirstChildFontWeight?: string;
                tableCellFirstChildBorderLeft?: string;
                tableCellLastChildBorderRight?: string;
                tableCellCodeMargin?: string;
                tableCellCodePadding?: string;
                tableCellCodeFontSize?: string;
                tableCellCodeBorder?: string;
                tableCellCodeBorderRadius?: string;
                activeBorder?: string;
                actionBtnWidth?: string;
                actionBtnMargin?: string;
                multiCodeViewWrapMarginBottom?: string;
                multiCodeViewWrapTitleMarginBottom?: string;
                multiCodeViewWrapTitleFontWeight?: string;
                multiCodeViewWrapTitleFontSize?: string;
                mobileDisplayQrCodeMaskZIndex?: string;
                mobileDisplayQrCodeMaskBackgroundColor?: string;
                mobileBodyMarginRight?: string;
                mobileDisplayBorderTop?: string;
                mobileDisplayBorderRight?: string;
                mobileDisplayBorderBottom?: string;
                mobileDisplayActionsPadding?: string;
                mobileDisplayActionsBorderTop?: string;
                mobileDisplayActionFontSize?: string;
                mobileDisplayActionNotLastChildMarginRight?: string;
                mobileDisplayQrCodeZIndex?: string;
                mobileDisplayQrCodeWidth?: string;
                mobileDisplayQrCodeHeight?: string;
                mobileDisplayQrCodePadding?: string;
                mobileDisplayQrCodeBackgroundColor?: string;
                mobileDisplayQrCodeBorderRadius?: string;
                mobileDisplayQrCodeBoxShadow?: string;
                pagePadding?: string;
                pageHMargin?: string;
                pagePMargin?: string;
                pageListLiMarginLeft?: string;
                pageListLiListStyleType?: string;
                pageListSubLiMarginLeft?: string;
                pageListSubLiListStyleType?: string;
                propsHighlightColor?: string;
                propsHighlightFontSize?: string;
                functionpropsColor?: string;
                functionpropsFontSize?: string;
                functionpropsInnerMargin?: string;
                functionpropsInnerPadding?: string;
                functionpropsInnerBorderSpacing?: string;
                functionpropsItemNameMarginRight?: string;
                functionpropsItemNameFontWeight?: string;
                functionpropsModifierMarginRight?: string;
                functionpropsModifierColor?: string;
                functionpropsItemDescFontWeight?: string;
                functionpropsDividingBackgroundColor?: string;
                functionpropsSplitMargin?: string;
                functionpropsHighlightColor?: string;
                functionpropsLevel1PaddingLeft?: string;
                functionpropsLevel1LiNotLastChildMarginBottom?: string;
                functionpropsLevel2PaddingLeft?: string;
                functionpropsLevel2LiNotLastChildMarginBottom?: string;
                collapseHeaderPadding?: string;
                collapseHeaderBorderBorder?: string;
                collapseHeaderBorderBorderTopLeftRadius?: string;
                collapseHeaderBorderBorderTopRightRadius?: string;
                collapseHeaderCollapseIconWidth?: string;
                collapseHeaderCollapseIconHeight?: string;
                collapseHeaderCollapseIconMarginRight?: string;
                collapseHeaderCollapseIconBackground?: string;
                collapseHeaderCollapseIconBackgroundSize?: string;
                collapseHeaderCollapseIconTransform?: string;
                collapseHeaderCollapseIconCloseTransform?: string;
                collapseBodyPadding?: string;
                collapseBodyBorderBorder?: string;
                collapseBodyBorderBorderRadius?: string;
                codeBoxHeaderPadding?: string;
                codeBoxHeaderTitleFontWeight?: string;
                codeBoxHeaderTitleFontSize?: string;
                codeBoxColumnMargin?: string;
                codeBoxItemNotLastChildMarginBottom?: string;
                anchorNavigationAnchorMargin?: string;
                anchorNavigationAnchorPadding?: string;
                anchorNavigationAnchorFontSize?: string;
                anchorNavigationAnchorBorderLeft?: string;
                anchorNavigationAffixZIndex?: string;
                anchorNavigationAffixPadding?: string;
                anchorNavigationAnchorLiMarginLeft?: string;
                anchorNavigationAnchorLiPaddingLeft?: string;
                anchorNavigationAnchorLiLineHeight?: string;
                anchorNavigationAnchorLiNotLastChildMarginBottom?: string;
                anchorNavigationAnchorLiHoverAColor?: string;
                anchorNavigationActiveAColor?: string;
                anchorNavigationActiveABorderLeft?: string;
                anchorNavigationAnchorLiAWidth?: string;
                anchorNavigationAnchorLiAPaddingLeft?: string;
                anchorNavigationAnchorLiAColor?: string;
                anchorNavigationAnchorLiABorderLeft?: string;
            };
            PolygonSelection?: {
                croppingCoreInnerBackgroundColor?: string;
                croppingCoreClipTop?: string;
                croppingCoreClipRight?: string;
                croppingCoreClipLeft?: string;
                croppingCoreClipBackgroundColor?: string;
                croppingCoreClipCanvasZIndex?: string;
                croppingCoreGeometryTop?: string;
                croppingCoreGeometryRight?: string;
                croppingCoreGeometryLeft?: string;
                croppingCoreBackgroundBackgroundColor?: string;
                croppingCoreBackgroundBackgroundImage?: string;
                croppingCoreBackgroundBackgroundPosition?: string;
                croppingCoreBackgroundBackgroundSize?: string;
                croppingCoreBackgroundMaskBackgroundColor?: string;
                selectionCroppingMaskColor?: string;
                selectionCroppingMaskBackgroundColor?: string;
            };
            Popup?: {
                backgroundColor?: string;
                transform?: string;
                transition?: string;
                maskBackgroundColor?: string;
                maskTransitionDuration?: string;
                maskModalInBackgroundColor?: string;
                triggerInnerHeaderPadding?: string;
                triggerInnerCloseMarginRight?: string;
                triggerInnerCloseInnerFontSize?: string;
                triggerInnerTitleColor?: string;
                triggerInnerTitleFontWeight?: string;
                triggerInnerTitleFontSize?: string;
                triggerInnerTitleTextAlign?: string;
                triggerInnerExtraMarginRight?: string;
                triggerInnerBodyPadding?: string;
                triggerInnerActionsPadding?: string;
                triggerInnerActionNotLastChildMarginRight?: string;
            };
            PullRefresh?: {
                triggerHeight?: string;
                triggerTransform?: string;
                triggerIconWidth?: string;
                triggerIconHeight?: string;
                triggerIconImgMaxWidth?: string;
                triggerIconImgHeight?: string;
                triggerLabelUpdateMargin?: string;
                triggerLabelUpdatePadding?: string;
                triggerLabelColor?: string;
                triggerLabelFontSize?: string;
                triggerUpdateColor?: string;
                triggerUpdateFontSize?: string;
                triggerRefreshColor?: string;
                maskZIndex?: string;
                maskBackground?: string;
            };
            QuickRangeDate?: {
                rangeMarginRight?: string;
            };
            ScrollLoad?: {
                loadEmptyErrorMinHeight?: string;
                loadEmptyErrorPadding?: string;
                loadEmptyErrorColor?: string;
                loadEmptyErrorFontSize?: string;
                loadEmptyErrorLineHeight?: string;
                loadStandardColor?: string;
                loadAnimationStandardMixinsWidth?: string;
                loadAnimationStandardMixinsHeight?: string;
                loadAnimationStandardMixinsMarginRight?: string;
            };
            SearchList?: {
                tableWrapperAntListPaginationMarginTop?: string;
                tableWrapperAntListPaginationMarginBottom?: string;
                implementListMetaTitleMarginRight?: string;
                implementListItemVerticalHorizontalPadding?: string;
                implementListItemVerticalHorizontalSplitBorderBlockEnd?: string;
                implementListSelectionBackgroundColor?: string;
                implementListItemContentHorizontalMaxWidth?: string;
                implementListRowSelectionCheckboxWrapMargin?: string;
                implementListExpandableTriggerMarginRight?: string;
                implementListNumberWrapMargin?: string;
                implementListNumberColor?: string;
                implementListNumberFontWeight?: string;
                implementListNumberFontSize?: string;
                implementListRowSelectionHeaderMarginBottom?: string;
                implementListRowSelectionHeaderPadding?: string;
                implementListRowSelectionHeaderBackgroundColor?: string;
                implementListRowSelectionHeaderBorderRadius?: string;
                implementListRowSelectionHeaderCancelColor?: string;
                implementListCardTitleGap?: string;
                proTableResourceTypeChangeBtnFontSize?: string;
                proTableResourceTableFileColumnIconSvgWidth?: string;
                proTableResourceTableFileColumnIconSvgHeight?: string;
                proTableResourceTableFileColumnNameFontSize?: string;
                proTableGridViewItemPadding?: string;
                proTableGridViewItemBorderRadius?: string;
                proTableGridViewItemHoverBackgroundColor?: string;
                implementListSelectionBorder?: string;
                proTableGridViewItemSelectionTop?: string;
                proTableGridViewItemSelectionLeft?: string;
                proTableGridViewItemNameMarginTop?: string;
                listDensitySettingHeaderPadding?: string;
                listDensitySettingHeaderBorderBottom?: string;
                listDensitySettingBodyUlMargin?: string;
                listDensitySettingBodyUlPadding?: string;
                listDensitySettingBodyUlLiPadding?: string;
                listDensitySettingBodyUlLiActiveBackgroundColor?: string;
                listDensitySettingBodyUlLiHoverBackgroundColor?: string;
            };
            SearchTable?: {
                implementLoadDataIconMarginRight?: string;
                implementLoadDataIconColor?: string;
                searchWrapperGapMarginBottom?: string;
                searchFooterItemNotLastChildMarginRight?: string;
                searchFooterItemSearchBtnIconColor?: string;
                searchFooterItemSearchBtnIconFontSize?: string;
                autoWrapperBorderRadius?: string;
                resizableHandleRight?: string;
                resizableHandleBottom?: string;
                resizableHandleZIndex?: string;
                resizableHandleWidth?: string;
                resizableHandleCursor?: string;
                searchFormToolBarGapMarginBottom?: string;
                searchFormToolBarDefaultPanelMarginRight?: string;
                searchFormToolBarItemNotLastChildMarginRight?: string;
                searchFooterItemExpandSearchUpBtnSpanMarginRight?: string;
                searchFooterItemExpandSearchUpBtnSpanFontSize?: string;
                searchFooterItemExpandSearchUpBtnIColor?: string;
                searchFooterItemExpandSearchUpBtnIFontSize?: string;
                searchFooterItemExpandSearchDownBtnSpanMarginRight?: string;
                searchFooterItemExpandSearchDownBtnSpanFontSize?: string;
                searchFooterItemExpandSearchDownBtnIColor?: string;
                searchFooterItemExpandSearchDownBtnIFontSize?: string;
                searchToolBarTitleContentMargin?: string;
                searchToolBarTitleContentColor?: string;
                searchToolBarTitleContentFontWeight?: string;
                searchToolBarTitleContentFontSize?: string;
                searchToolBarTitleInfoFontSize?: string;
                searchToolBarTitleInfoHoverColor?: string;
                searchToolBarTitleInfoHoverCursor?: string;
                columnSettingBtnColor?: string;
                columnSettingBtnFontSize?: string;
                columnSettingHeaderPadding?: string;
                columnSettingHeaderBorderBottom?: string;
                columnSettingBodyUlMargin?: string;
                columnSettingBodyUlPadding?: string;
                columnSettingBodyUlLiPadding?: string;
                columnSettingBodyUlLiHoverBackgroundColor?: string;
                columnSettingBodyUlLiImgWidth?: string;
                columnSettingBodyUlLiImgMarginRight?: string;
                sortableHelperZIndex?: string;
                sortableHelperPadding?: string;
                sortableHelperBackgroundColor?: string;
                sortableHelperBorder?: string;
                sortableHelperSpanMarginRight?: string;
                tableDensitySettingBtnColor?: string;
                tableDensitySettingBtnFontSize?: string;
                tableDensitySettingHeaderPadding?: string;
                tableDensitySettingHeaderBorderBottom?: string;
                tableDensitySettingBodyUlMargin?: string;
                tableDensitySettingBodyUlPadding?: string;
                tableDensitySettingBodyUlLiPadding?: string;
                tableDensitySettingBodyUlLiActiveBackgroundColor?: string;
                tableDensitySettingBodyUlLiHoverBackgroundColor?: string;
                advancedSearchPanelPadding?: string;
                advancedSearchPanelHeaderPadding?: string;
                advancedSearchPanelHeaderBackgroundColor?: string;
                advancedSearchPanelTitleIconFontSize?: string;
                advancedSearchPanelTitleTextFontSize?: string;
                advancedSearchPanelCollapseColor?: string;
                advancedSearchPanelCollapseIconFontSize?: string;
                advancedSearchPanelCollapseTextFontSize?: string;
                advancedSearchPanelFooterPadding?: string;
                advancedSearchPanelItemNotLastChildMarginRight?: string;
                disabledOptionColor?: string;
                optionsWrapHeight?: string;
                editableCellEditTriggerWidth?: string;
                editableCellEditTriggerColor?: string;
                editableCellEditTriggerFontSize?: string;
                editableCellEditTriggerSaveHeight?: string;
                editableCellEditTriggerSaveFontWeight?: string;
                editableCellEditTriggerSaveLineHeight?: string;
                editableCellEditTriggerCancelHeight?: string;
                editableCellEditTriggerCancelFontWeight?: string;
                editableCellEditTriggerCancelLineHeight?: string;
                editableCellViewMinHeight?: string;
                editableCellViewTriggerWidth?: string;
                editableCellViewTriggerColor?: string;
                editableCellViewTriggerFontSize?: string;
                editorRowControlSaveCancelItemNotLastChildMarginRight?: string;
                rowDragSortDropOverDownwardTdBorderBottom?: string;
                rowDragSortDropOverUpwardTdBorderTop?: string;
                exportExcelBtnColor?: string;
                exportExcelBtnFontSize?: string;
                reloadTableBtnColor?: string;
                reloadTableBtnFontSize?: string;
                columnTipTitleInfoMargin?: string;
                columnTipTitleInfoColor?: string;
                columnTipTitleInfoHoverColor?: string;
                proTableHeaderItemNotLastChildMarginRight?: string;
                proTableHeaderItemAImgWidth?: string;
                proTableHeaderSearchWrapMainPadding?: string;
                proTableHeaderSearchWrapFooterPadding?: string;
                proTableHeaderSearchWrapFooterBorderTop?: string;
                dragHandlerFontSize?: string;
            };
            SlideLayout?: {
                backgroundColor?: string;
                overlayZIndex?: string;
                overlayRevealPushPadding?: string;
                overlayRevealPushLeftBorderRight?: string;
                overlayRevealPushRightBorderLeft?: string;
                overlayRevealPushTopBorderBottom?: string;
                overlayRevealPushBottomBorderTop?: string;
                revealMasterZIndex?: string;
            };
            SliderScale?: {
                marginTop?: string;
                padding?: string;
                rangeMargin?: string;
                rangePadding?: string;
                rangeBorder?: string;
                sliderThumbMarginTop?: string;
                sliderThumbBorderTop?: string;
                sliderThumbBorderRight?: string;
                sliderRunnableTrackHeight?: string;
                sliderRunnableTrackBackgroundColor?: string;
                sliderRunnableTrackBorderRadius?: string;
                scaleRight?: string;
                scaleLeft?: string;
                scaleItemHeight?: string;
                scaleItemBackgroundColor?: string;
                scaleItemPointHeight?: string;
                scaleItemAfterBorderLeft?: string;
                scaleItemFirstChildBeforeHeight?: string;
                scaleItemFirstChildBeforeBorderLeft?: string;
                scaleItemValueTop?: string;
                scaleItemValueMarginLeft?: string;
                scaleItemValueRight?: string;
                scaleItemValueBottom?: string;
                scaleItemValueWidth?: string;
                scaleItemValueMarginRight?: string;
                scaleItemValueColor?: string;
                scaleItemValueFontSize?: string;
            };
            Spin?: {
                backgroundColor?: string;
                textColor?: string;
                dotWidth?: string;
                dotHeight?: string;
            };
            Split?: {
                backgroundColor?: string;
            };
            SplitLayout?: {
                verticalHorizontalBeforeBackgroundColor?: string;
                verticalHeight?: string;
                verticalBeforeWidth?: string;
                verticalBeforeHeight?: string;
                horizontalWidth?: string;
                horizontalBeforeWidth?: string;
                horizontalBeforeHeight?: string;
            };
            StickupLayout?: {
                margin?: string;
                padding?: string;
                fixedTop?: string;
                fixedZIndex?: string;
                fixedBackgroundColor?: string;
                maskZIndex?: string;
                maskBackground?: string;
            };
            Surnames?: {
                configPositionRightLeftHighlightedAfterTop?: string;
                configPositionRightHighlightedRight?: string;
                configPositionRightHighlightedAfterRight?: string;
                configPositionRightHighlightedAfterBorderColor?: string;
                configPositionRightHighlightedAfterBorderWidth?: string;
                configPositionLeftHighlightedLeft?: string;
                configPositionLeftHighlightedAfterLeft?: string;
                configPositionLeftHighlightedAfterBorderColor?: string;
                configPositionLeftHighlightedAfterBorderWidth?: string;
                configPositionTopBottomHighlightedAfterLeft?: string;
                configPositionTopBottomIndexItemPaddingTop?: string;
                configPositionTopBottomIndexItemPaddingBottom?: string;
                configPositionTopBottomIndexItemNotLastOfTypePaddingRight?: string;
                configPositionTopHighlightedTop?: string;
                configPositionTopHighlightedAfterTop?: string;
                configPositionTopHighlightedAfterBorderColor?: string;
                configPositionTopHighlightedAfterBorderWidth?: string;
                configPositionBottomHighlighted?: string;
                configPositionBottomHighlightedAfterBottom?: string;
                configPositionBottomHighlightedAfterBorderColor?: string;
                configPositionBottomHighlightedAfterBorderWidth?: string;
                highlightedZIndex?: string;
                highlightedWidth?: string;
                highlightedHeight?: string;
                highlightedColor?: string;
                highlightedFontWeight?: string;
                highlightedFontSize?: string;
                highlightedLineHeight?: string;
                highlightedBackgroundColor?: string;
                indexItemPadding?: string;
                indexItemColor?: string;
                indexItemFontWeight?: string;
                indexItemFontSize?: string;
                indexItemActiveBackgroundColor?: string;
                groupTitleHeight?: string;
                groupTitleColor?: string;
                groupTitleLineHeight?: string;
                groupTitleTextIndent?: string;
                groupTitleBackground?: string;
            };
            Suspense?: {
                LoadingPadding?: string;
            };
            TableGridLayout?: {
                borderBorderTop?: string;
                borderBorderRight?: string;
                borderBorderLeft?: string;
                tableTrTdBorderBottom?: string;
                tableTrTdNotLastChildBorderRight?: string;
                tableRowLabelPaddingRight?: string;
                tableRowLabelColor?: string;
                tableRowLabelFontSize?: string;
                tableRowLabelRequireBeforeMarginRight?: string;
                tableRowLabelRequireBeforeColor?: string;
                tableRowValueColor?: string;
                tableRowValueAntFormItemExplainConnectedPosition?: string;
                tableRowValueAntFormItemExplainConnectedBottom?: string;
                tableRowValueAntFormItemExplainConnectedLeft?: string;
                tableRowValueAntFormItemMarginBottom?: string;
                parityTableRowOddBackgroundColor?: string;
                parityTableRowEvenBackgroundColor?: string;
                borderedTableRowLabelBackgroundColor?: string;
                densitydefaultTableRowLabelPadding?: string;
                densitydefaultTableRowValuePadding?: string;
                densitymiddleTableRowLabelPadding?: string;
                densitymiddleTableRowValuePadding?: string;
                densitysmallTableRowLabelPadding?: string;
                densitysmallTableRowValuePadding?: string;
                mobileTableRowLabelTextAlign?: string;
                mobileTableRowValuePaddingTop?: string;
                mobileTableRowValueAdmFormItemPaddingLeft?: string;
                mobileTableRowValueAdmListItemContentBorderTop?: string;
                mobileTableRowValueAdmListItemContentMainBorderTop?: string;
                mobileTableRowNotChildTableRowValueAdmFormItemBorderBottom?: string;
            };
            WritingBoard?: {
                mobileSignatureMaskZIndex?: string;
                mobileSignatureMaskColor?: string;
                mobileSignatureMaskBackgroundColor?: string;
                mobileSignatureMaskTransition?: string;
                signatureCoreWrapBackgroundColor?: string;
                signatureMaskZIndex?: string;
                signatureMaskColor?: string;
                signatureMaskBackgroundColor?: string;
                signatureMaskTransition?: string;
            };
        };
        mobile?: {
            AutoComplete?: {
                searchBarPadding?: string;
                bodyPadding?: string;
                resultPadding?: string;
                resultBorderTop?: string;
                resultItemCloseZIndex?: string;
                resultItemCloseColor?: string;
                resultItemCloseFontWeight?: string;
                resultItemCloseFontSize?: string;
            };
            ConfirmImportantConfirm?: {
                contentImgWidth?: string;
                contentImgMarginRight?: string;
            };
            PopoverMenu?: {
                maxWidth?: string;
                menuMargin?: string;
                menuPadding?: string;
                menuItemTextBorderBottomWidth?: string;
                menuItemPaddingLeft?: string;
                menuItemIconPaddingRight?: string;
                menuItemIconFontSize?: string;
                menuItemTextPadding?: string;
                subMenuAlignItems?: string;
                subMenuPaddingLeft?: string;
                subMenuIconPaddingRight?: string;
                subMenuIconFontSize?: string;
                subMenuTextPadding?: string;
                subMenuArrowMarginRight?: string;
                subMenuArrowFontSize?: string;
                subMenuArrowTransform?: string;
                admPopoverInnerContentPadding?: string;
            };
            promptErrorPrompt?: {
                dialogIconMarginRight?: string;
                dialogIconColor?: string;
                dialogIconFontSize?: string;
                dialogContentColor?: string;
            };
            promptSuccessPrompt?: {
                dialogIconMarginRight?: string;
                dialogIconColor?: string;
                dialogIconFontSize?: string;
                dialogContentColor?: string;
            };
            promptWarnPrompt?: {
                dialogIconMarginRight?: string;
                dialogIconColor?: string;
                dialogIconFontSize?: string;
                dialogContentColor?: string;
            };
            PRSL?: {
                dndManagerItemMargin?: string;
                selectionManagerItemMargin?: string;
                itemExtraMarginRight?: string;
                itemExtraMarginLeft?: string;
                toolbarItemAlignItems?: string;
                toolbarItemIconMarginRight?: string;
                toolbarItemIconFontSize?: string;
                toolbarItemLabelFontSize?: string;
                searchHistoryMainMargin?: string;
                searchHistoryTitleMarginBottom?: string;
                searchHistoryContentInnerFlexWrap?: string;
                searchHistoryContentInnerGap?: string;
                searchHistoryItemPadding?: string;
                searchHistoryItemBorderRadius?: string;
                searchHistoryItemLabelMarginRight?: string;
                searchKeywordWrapperPadding?: string;
                selectionCheckAllAlignItems?: string;
                selectionCheckAllJustifyContent?: string;
                selectionCheckAllPadding?: string;
                selectionCheckBoxAlignItems?: string;
                selectionCheckBoxJustifyContent?: string;
                toolbarSortItemListPadding?: string;
                toolbarSortItemListOrderItemMarginRight?: string;
                toolbarSortItemActiveColor?: string;
                toolbarInnerPadding?: string;
                toolbarShowTotalAlignItems?: string;
                toolbarShowTotalJustifyContent?: string;
                toolbarToolItemsJustifyContent?: string;
                toolbarToolItemMarginRight?: string;
                toolbarToolMenuTriggerMarginLeft?: string;
                toolbarToolMenuTriggerFontWeight?: string;
                toolbarToolMenuTriggerFontSize?: string;
                firstLoadingPadding?: string;
                headerExtraAlignItems?: string;
                headerExtraPaddingRight?: string;
            };
            QuickRangeDate?: {
                rangeCalendarModalMarginTop?: string;
            };
            Tabs?: {
                arrowMoreIconBackgroundColor?: string;
                arrowMoreIconBoxShadow?: string;
                arrowMoreIconTransition?: string;
                arrowMoreOpenTransform?: string;
                arrowMoreCloseTransform?: string;
                arrowMoreGridPadding?: string;
                arrowMoreItemPadding?: string;
                arrowMoreItemFontSize?: string;
                arrowMoreItemTextAlign?: string;
                arrowMoreItemBorder?: string;
                arrowMoreItemBorderRadius?: string;
                arrowMoreActiveColor?: string;
                arrowMoreActiveBorderColor?: string;
                admTabsTabListPaddingRight?: string;
                admTabsContentPadding?: string;
            };
            TimePickerView?: {
                margin?: string;
                padding?: string;
            };
            Tree?: {
                searchPadding: string;
                nodeInfoTitleWrapperColor: string;
                nodeInfoCheckboxTextAlign: string;
                nodeInfoCheckboxVerticalAlign: string;
                nodeInfoExpandedFontWeight: string;
                nodeInfoExpandedFontSize: string;
                nodeInfoExpandedVerticalAlign: string;
                nodeInfoLoadColor: string;
                nodeInfoTitleWrapperVerticalAlign: string;
                nodeInfoTitleSelectedBackgroundColor: string;
                nodeInfoIconFontWeight: string;
                nodeInfoIconFontSize: string;
                nodeInfoIconVerticalAlign: string;
                nodeInfoTitleFontSize: string;
                nodeInfoTitleVerticalAlign: string;
                nodeChildrenMargin: string;
            };
        };
        'normal-hoc'?: {
            revolvingTableRowCellBackgroundColor?: string;
            sizeSmallRevolvingTableHeaderCellPadding?: string;
            sizeSmallRevolvingTableRowCellPadding?: string;
            sizeMiddleRevolvingTableHeaderCellPadding?: string;
            sizeMiddleRevolvingTableRowCellPadding?: string;
            sizeLargeRevolvingTableHeaderCellPadding?: string;
            sizeLargeRevolvingTableRowCellPadding?: string;
            revolvingTableHeaderCellColor?: string;
            revolvingTableHeaderCellFontWeight?: string;
            revolvingTableHeaderCellBackgroundColor?: string;
            revolvingTableHeaderCellHeight?: string;
            revolvingTableHeaderCellTransition?: string;
            stepsSwiperGap?: string;
            tableAntTableRowExpandIconCollapsedMarginTop?: string;
            autoCompleteFetchLoadingPadding?: string;
            autoCompleteFetchLoadingTextAlign?: string;
            inputMultipleTagWrapperMarginTop?: string;
            checkAllCheckBoxCheckAllMarginBottom?: string;
            checkboxListRadioListPadding?: string;
            checkboxListExtraRadioListExtraMarginRight?: string;
            checkAllSelectCheckAllMarginBottom?: string;
        };
        'mobile-hoc'?: {
            listFilterSearchPadding?: string;
            listCheckAllWrapperPadding?: string;
            prslLoadingPadding?: string;
            prslLoadingDotMarginRight?: string;
            modalTriggerPopupAdmPopupCloseIconTop?: string;
            showPopupInnerTitleHeight?: string;
            showPopupInnerTitleFontWeight?: string;
            showPopupInnerTitleFontSize?: string;
            showPopupInnerTitleLineHeight?: string;
            showPopupInnerActionsPadding?: string;
            showPopupInnerActionNotLastChildMarginBottom?: string;
            dateTimerPopoverTriggerColor?: string;
            dateTimerPopoverTriggerFontSize?: string;
            dateTimerPopoverPlaceholderColor?: string;
            treeFilterSearchPadding?: string;
            inputMultipleTagWrapperMarginTop?: string;
            inputMultipleRenderTriggerFlexWrap?: string;
            inputMultipleRenderTriggerGap?: string;
            inputMultiplePlaceholderColor?: string;
        };
    };
};
/**
 * 国际化初始化完成回调函数类型
 */
export type IntlInitCallback = () => void;
/**
 * ConfigProvider 组件属性接口
 */
export interface ConfigProviderProps {
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
    /** 国际化配置 */
    intl?: IntlType & {
        /** 主语言 */
        mainLanguage?: string;
    };
    /** 国际化初始化完成回调 */
    onIntlInit?: IntlInitCallback;
    /** 主题配置 */
    theme?: ThemeConfig;
    /** 媒体配置 */
    media?: MediaConfig;
    /** 是否使用包装器 */
    isUseWrapper?: boolean;
    /** 路由类型 */
    router?: RouterType;
    /** 公共路径 */
    publicPath?: string;
    /** 子组件 */
    children: () => ReactNode;
}
/**
 * ConfigProvider 上下文接口
 */
export interface ConfigProviderContext {
    /** 媒体配置 */
    media: Required<MediaConfig>;
    /** 路由类型 */
    router: RouterType;
    /** 主题配置 */
    theme: ThemeConfig;
    /** 国际化配置 */
    intl: {
        /** 当前语言 */
        lang?: IntlLanguage;
        /** 前缀 */
        prefix: string;
        /** 语言包 */
        locales: Record<string, any>;
        /** 主语言 */
        mainLanguage?: string;
    };
    /** 公共路径 */
    publicPath: string;
}
/**
 * ConfigProvider 组件类型
 */
export type ConfigProviderComponent = NamedExoticComponent<ConfigProviderProps> & {
    /** 上下文对象 */
    Context: typeof Context;
    /** 主题钩子 */
    useTheme: typeof useTheme;
    /** 主题函数 */
    theme: typeof themeFunction;
};
