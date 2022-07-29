import BackLayout from './backLayout';
import HorizontalFlexLayout, {
  defaultProps as HorizontalFlexLayoutDefaultProps,
  propTypes as HorizontalFlexLayoutPropTypes,
} from './horizontalFlexLayout';
import VerticalFlexLayout, {
  defaultProps as VerticalFlexLayoutDefaultProps,
  propTypes as VerticalFlexLayoutPropTypes,
} from './verticalFlexLayout';
// @ts-ignore
import ToolBarLayout from './toolBarLayout';
import FlexLayout from './flexlayout';

FlexLayout.HorizontalFlexLayout = HorizontalFlexLayout;
FlexLayout.VerticalFlexLayout = VerticalFlexLayout;
FlexLayout.ToolBarLayout = ToolBarLayout;
FlexLayout.BackLayout = BackLayout;

FlexLayout.HorizontalFlexLayoutDefaultProps = HorizontalFlexLayoutDefaultProps;
FlexLayout.HorizontalFlexLayoutPropTypes = HorizontalFlexLayoutPropTypes;
FlexLayout.VerticalFlexLayoutDefaultProps = VerticalFlexLayoutDefaultProps;
FlexLayout.VerticalFlexLayoutPropTypes = VerticalFlexLayoutPropTypes;

export default FlexLayout;
