import vkbeautify from 'vkbeautify';
import ObjTree from 'xml-objtree';

const objTree = new ObjTree();

const FormatUtil = {
  /**
   * prettierJSON
   * @description 格式化JSON字符串
   * @return string
   * @param _jsonStr
   */
  prettierJSON(_jsonStr: string = '') {
    let jsonStr = (_jsonStr || '').trim();
    const glue = '  ';

    try {
      return JSON.stringify(JSON.parse(jsonStr), null, glue);
    } catch (e) {
      return _jsonStr;
    }
  },
  /**
   * compressJSON
   * @description 压缩JSON
   * @return string
   * @param _jsonStr
   */
  compressJSON(_jsonStr: string = '') {
    let jsonStr = (_jsonStr || '').trim();
    const glue = '';

    try {
      return JSON.stringify(JSON.parse(jsonStr), null, glue);
    } catch (e) {
      return _jsonStr;
    }
  },
  /**
   * prettierXML
   * @description 格式化XML
   * @param _xmlStr
   * @return xmlStr
   */
  prettierXML(_xmlStr: string = '') {
    let xmlStr = (_xmlStr || '').trim();

    return vkbeautify.xml(xmlStr);
  },
  /**
   * compressXML
   * @description 压缩XML
   * @param _xmlStr
   * @return xmlStr
   */
  compressXML(_xmlStr: string = '') {
    let xmlStr = (_xmlStr || '').trim();

    return vkbeautify.xmlmin(xmlStr);
  },
  /**
   * prettierHTML
   * @description 格式化HTML
   * @param _htmlStr
   * @return htmlStr
   */
  prettierHTML(_htmlStr: string = '') {
    let htmlStr = (_htmlStr || '').trim();

    return vkbeautify.html(htmlStr);
  },
  /**
   * compressHTML
   * @description 压缩HTML
   * @param _htmlStr
   * @return htmlStr
   */
  compressHTML(_htmlStr: string = '') {
    let htmlStr = (_htmlStr || '').trim();

    return vkbeautify.xmlmin(htmlStr);
  },
  /**
   * prettierCSS
   * @description 格式化CSS
   * @param _cssStr
   * @return cssStr
   */
  prettierCSS(_cssStr: string = '') {
    let cssStr = (_cssStr || '').trim();

    return vkbeautify.css(cssStr);
  },
  /**
   * compressCSS
   * @description 压缩CSS
   * @param _cssStr
   * @return cssStr
   */
  compressCSS(_cssStr: string = '') {
    let cssStr = (_cssStr || '').trim();

    return vkbeautify.cssmin(cssStr);
  },
  /**
   * prettierSQL
   * @description 格式化SQL
   * @param _sqlStr
   * @return sqlStr
   */
  prettierSQL(_sqlStr: string = '') {
    let sqlStr = (_sqlStr || '').trim();

    return vkbeautify.sql(sqlStr);
  },
  /**
   * compressSQL
   * @description 压缩SQL
   * @param _sqlStr
   * @return sqlStr
   */
  compressSQL(_sqlStr: string = '') {
    let sqlStr = (_sqlStr || '').trim();

    return vkbeautify.sqlmin(sqlStr);
  },
  /**
   * jsonToXML
   * @description json转xml
   * @param _jsonStr
   * @return xmlStr
   */
  jsonToXML(_jsonStr: string = '') {
    return objTree.writeXML(JSON.parse((_jsonStr || '').trim()));
  },
  /**
   * xmlToJSON
   * @description xml转json
   * @param _xmlStr
   * @param prettier
   * @return jsonStr
   */
  xmlToJSON(_xmlStr: string = '', prettier: boolean = true) {
    const tree = objTree.parseXML((_xmlStr || '').trim());

    if (!tree.html) {
      const space = prettier ? '  ' : '';
      return JSON.stringify(tree, null, space);
    }

    return '';
  },
};

export default FormatUtil;
