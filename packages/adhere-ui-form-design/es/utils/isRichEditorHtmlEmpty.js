function isRichEditorHtmlEmpty(r){return null==r||""===String(r).replace(/<[^>]*>/g,"").replace(/&nbsp;/gi," ").trim()}var RICH_EDITOR_EMPTY_VALIDATOR_CODE="var h=value==null?'':String(value);var t=h.replace(/<[^>]*>/g,'').replace(/&nbsp;/gi,' ').trim();if(!t){cb(' ');return;}cb();";export{isRichEditorHtmlEmpty,RICH_EDITOR_EMPTY_VALIDATOR_CODE};
//# sourceMappingURL=isRichEditorHtmlEmpty.js.map
