import type {
  AutoCompleteCheckAllTagSelectProps,
  AutoCompleteTagSelectProps,
  CheckAllTagSelectProps,
  HorizontalCheckableTagGroupProps,
  HorizontalTagGroupProps,
  TagSelectProps,
  VerticalCheckableTagGroupProps,
  VerticalTagGroupProps,
} from '../types';
import { createFactory } from '../util';
import AutoCompleteCheckAllTagSelect from './AutoCompleteCheckAllTagSelect';
import AutoCompleteTagSelect from './AutoCompleteTagSelect';
import CheckAllTagSelect from './CheckAllTagSelect';
import HorizontalCheckAllCheckableTagGroup from './HorizontalCheckAllCheckableTagGroup';
import HorizontalCheckableTagGroup from './HorizontalCheckableTagGroup';
import HorizontalTagGroup from './HorizontalTagGroup';
import Tag from './Tag';
import TagSelect from './TagSelect';
import VerticalCheckAllCheckableTagGroup from './VerticalCheckAllCheckableTagGroup';
import VerticalCheckableTagGroup from './VerticalCheckableTagGroup';
import VerticalTagGroup from './VerticalTagGroup';

Tag.AutoCompleteTagSelect = createFactory<AutoCompleteTagSelectProps>(AutoCompleteTagSelect, {});
Tag.AutoCompleteCheckAllTagSelect = createFactory<AutoCompleteCheckAllTagSelectProps>(
  AutoCompleteCheckAllTagSelect,
  {},
);
Tag.CheckAllTagSelect = createFactory<CheckAllTagSelectProps>(CheckAllTagSelect, {});
Tag.HorizontalCheckAllCheckableTagGroup = createFactory<HorizontalCheckableTagGroupProps>(
  HorizontalCheckAllCheckableTagGroup,
  {},
);
Tag.HorizontalCheckableTagGroup = createFactory<HorizontalCheckableTagGroupProps>(
  HorizontalCheckableTagGroup,
  {},
);
Tag.HorizontalTagGroup = createFactory<HorizontalTagGroupProps>(HorizontalTagGroup, {});
Tag.TagSelect = createFactory<TagSelectProps>(TagSelect, {});
Tag.VerticalCheckAllCheckableTagGroup = createFactory<VerticalCheckableTagGroupProps>(
  VerticalCheckAllCheckableTagGroup,
  {},
);
Tag.VerticalCheckableTagGroup = createFactory<VerticalCheckableTagGroupProps>(
  VerticalCheckableTagGroup,
  {},
);
Tag.VerticalTagGroup = createFactory<VerticalTagGroupProps>(VerticalTagGroup, {});

export default Tag;
