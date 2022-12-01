declare const FormatUtil: {
    /**
     * prettierJSON
     * @description 格式化JSON字符串
     * @return string
     * @param _jsonStr
     */
    prettierJSON(_jsonStr?: string): string | undefined;
    /**
     * compressJSON
     * @description 压缩JSON
     * @return string
     * @param _jsonStr
     */
    compressJSON(_jsonStr?: string): string | undefined;
    /**
     * prettierXML
     * @description 格式化XML
     * @param _xmlStr
     * @return xmlStr
     */
    prettierXML(_xmlStr?: string): any;
    /**
     * compressXML
     * @description 压缩XML
     * @param _xmlStr
     * @return xmlStr
     */
    compressXML(_xmlStr?: string): any;
    /**
     * prettierHTML
     * @description 格式化HTML
     * @param _htmlStr
     * @return htmlStr
     */
    prettierHTML(_htmlStr?: string): any;
    /**
     * compressHTML
     * @description 压缩HTML
     * @param _htmlStr
     * @return htmlStr
     */
    compressHTML(_htmlStr?: string): any;
    /**
     * prettierCSS
     * @description 格式化CSS
     * @param _cssStr
     * @return cssStr
     */
    prettierCSS(_cssStr?: string): any;
    /**
     * compressCSS
     * @description 压缩CSS
     * @param _cssStr
     * @return cssStr
     */
    compressCSS(_cssStr?: string): any;
    /**
     * prettierSQL
     * @description 格式化SQL
     * @param _sqlStr
     * @return sqlStr
     */
    prettierSQL(_sqlStr?: string): any;
    /**
     * compressSQL
     * @description 压缩SQL
     * @param _sqlStr
     * @return sqlStr
     */
    compressSQL(_sqlStr?: string): any;
    /**
     * jsonToXML
     * @description json转xml
     * @param _jsonStr
     * @return xmlStr
     */
    jsonToXML(_jsonStr?: string): any;
    /**
     * xmlToJSON
     * @description xml转json
     * @param _xmlStr
     * @param prettier
     * @return jsonStr
     */
    xmlToJSON(_xmlStr?: string, prettier?: boolean): string;
};
export default FormatUtil;
