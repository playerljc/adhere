import HorizontalFlexLayout, {
  defaultProps as HorizontalFlexLayoutDefaultProps,
  propTypes as HorizontalFlexLayoutPropTypes,
} from './horizontalFlexLayout';
import VerticalFlexLayout, {
  defaultProps as VerticalFlexLayoutDefaultProps,
  propTypes as VerticalFlexLayoutPropTypes,
} from './verticalFlexLayout';
import BackLayout from './backLayout';
// @ts-ignore
import ToolBarLayout from './toolBarLayout';
import FlexLayout from './flexlayout';
import ScrollLayout, { useScrollLayout, ScrollLayoutContext } from './scrollLayout';

FlexLayout.HorizontalFlexLayout = HorizontalFlexLayout;
FlexLayout.VerticalFlexLayout = VerticalFlexLayout;
FlexLayout.ToolBarLayout = ToolBarLayout;
FlexLayout.BackLayout = BackLayout;
FlexLayout.ScrollLayout = ScrollLayout;
FlexLayout.useScrollLayout = useScrollLayout;
FlexLayout.ScrollLayoutContext = ScrollLayoutContext;

FlexLayout.HorizontalFlexLayoutDefaultProps = HorizontalFlexLayoutDefaultProps;
FlexLayout.HorizontalFlexLayoutPropTypes = HorizontalFlexLayoutPropTypes;
FlexLayout.VerticalFlexLayoutDefaultProps = VerticalFlexLayoutDefaultProps;
FlexLayout.VerticalFlexLayoutPropTypes = VerticalFlexLayoutPropTypes;

export default FlexLayout;
