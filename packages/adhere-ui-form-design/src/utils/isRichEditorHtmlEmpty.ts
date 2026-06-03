/**
 * 判断富文本 HTML 是否语义为空（如 `<p><br></p>`、仅空白标签等）
 */
export function isRichEditorHtmlEmpty(html?: string | null): boolean {
  if (html == null) return true;
  const text = String(html)
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .trim();
  return text === '';
}

/** 供 rulesSetting custom validator 字符串内联使用的校验逻辑 */
export const RICH_EDITOR_EMPTY_VALIDATOR_CODE = `var h=value==null?'':String(value);var t=h.replace(/<[^>]*>/g,'').replace(/&nbsp;/gi,' ').trim();if(!t){cb(' ');return;}cb();`;
