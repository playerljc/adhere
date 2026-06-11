import { actionsCodeStringToEvents } from './actionsCodeStringToEvents';
import { computeLabelValueColSpan } from './computeLabelValueColSpan';
import {
  deleteDesignValueByIdInChildren,
  findDesignValueById,
  findDesignValueByIdToClone,
  findParentDesignValueById,
  findParentIdById,
  genNewName,
  typeToNamePrefix,
} from './designValue';
import { findParentWithChildIndex, flattenDesignChildren } from './designValueTree';
import { findTypeById } from './findTypeById';
import { formItemToProps } from './formItemToProps';
import { getLabel } from './getLabel';
import { getLabelByType, getToolBoxItemByType } from './getLabelByType';
import { isContainerFieldByType } from './isContainerFieldByType';
import { isDesktop } from './isDesktop';
import { isLayoutFieldByType } from './isLayoutFieldByType';
import { isNoFormFieldByType } from './isNoFormFieldByType';
import { isRichEditorHtmlEmpty, RICH_EDITOR_EMPTY_VALIDATOR_CODE } from './isRichEditorHtmlEmpty';
import isReactNode from './isReactNode';
import normalizeDesignChildren from './normalizeDesignChildren';
import { omitFieldTip } from './omitFieldTip';
import { isResolvedI18nTextEmpty, resolveI18nText } from './resolveI18nText';
import { createDefaultRootDesignValue, hasDesignCanvasUserContent } from './createDefaultRootDesignValue';
import { genRootFieldId, getRootFieldId, isRootFieldId } from './rootFieldId';
import { rulesSettingToRules } from './rulesSettingToRules';
import { styleCodeStringToCSSProperties } from './styleCodeStringToCSSProperties';
import { toI18nLabel } from './toI18nLabel';
import { useDesignFieldDataSourceOptions } from './useDesignFieldDataSourceOptions';

export {
  createMainProperty,
  renderMainProperty as renderMainPropertyWithCreate,
} from './createMainProperty';
export type { CreateMainPropertyOptions, GetDefaultFormItemsCtx } from './createMainProperty';

export {
  actionsCodeStringToEvents,
  computeLabelValueColSpan,
  formItemToProps,
  getLabel,
  rulesSettingToRules,
  styleCodeStringToCSSProperties,
  isLayoutFieldByType,
  isDesktop,
  isReactNode,
  normalizeDesignChildren,
  findDesignValueById,
  deleteDesignValueByIdInChildren,
  findDesignValueByIdToClone,
  findParentIdById,
  genNewName,
  typeToNamePrefix,
  genRootFieldId,
  getRootFieldId,
  isRootFieldId,
  createDefaultRootDesignValue,
  hasDesignCanvasUserContent,
  getLabelByType,
  getToolBoxItemByType,
  findTypeById,
  findParentDesignValueById,
  findParentWithChildIndex,
  flattenDesignChildren,
  useDesignFieldDataSourceOptions,
  resolveI18nText,
  isResolvedI18nTextEmpty,
  omitFieldTip,
  toI18nLabel,
  isNoFormFieldByType,
  isRichEditorHtmlEmpty,
  RICH_EDITOR_EMPTY_VALIDATOR_CODE,
  isContainerFieldByType,
};

export {
  mergeMobilePreviewFieldProps,
  mergeFieldPropsTerminalOverlay,
  computeFieldPropsOverlayPatch,
} from './fieldPropsTerminal';
export {
  MOBILE_VIEWPORT_PRESETS,
  MOBILE_VIEWPORT_DEFAULT_PRESET_ID,
  getMobileViewportPresetById,
  getMobileViewportLabel,
} from './mobileViewportPresets';
export type { MobileViewportPreset } from './mobileViewportPresets';

export { stringifyDesignValue } from './stringifyDesignValue';
export { copyTextToClipboard } from './copyTextToClipboard';
export type { CopyTextToClipboardOptions } from './copyTextToClipboard';
export { downloadTextAsFile } from './downloadTextAsFile';
export type { DownloadTextAsFileOptions } from './downloadTextAsFile';

export {
  getFullscreenElement,
  isElementInFullscreen,
  requestElementFullscreen,
  exitDocumentFullscreen,
} from './domFullscreen';

export type { LabelValueColSpan } from './computeLabelValueColSpan';
export type { DesignFieldDataSourceOption } from './dataSourceOptions';
export {
  fetchDataSourceItemConfigAsOptions,
  findDataSourceItemConfigByDynamicId,
  omitFieldPropsDesignKey,
  parseDataSourceManagerValueFromFieldProps,
  resolveDataSourceOptionLabel,
  staticDataSourceToDesignOptions,
} from './dataSourceOptions';
export type { UseDesignFieldDataSourceOptionsResult } from './useDesignFieldDataSourceOptions';

export {
  collectExpandedKeysForKeyword,
  collectTreeNodeKeyEntries,
  DEFAULT_TREE_FIELD_NAMES,
  filterTreeNodesByKeyword,
} from './filterTreeNodesByKeyword';
export type { TreeFieldNames, TreeNodeKeyEntry } from './filterTreeNodesByKeyword';

export {
  fetchDataSourceItemConfigAsTreeNodes,
  omitFieldPropsTreeOptionsKey,
  parseTreeDataSourceValueFromFieldProps,
  staticTreeDataSourceToNodes,
  useDesignFieldTreeDataSource,
} from './treeDataSource';
export type {
  TreeDataNode,
  UseDesignFieldTreeDataSourceResult,
} from './treeDataSource';
