/**
 * 格式化工具类
 * @description 提供各种格式化和转换功能
 */
declare const FormatUtil: {
    /**
     * 格式化 JSON 字符串
     * @description 将 JSON 字符串格式化为可读的格式
     * @param jsonStr - 要格式化的 JSON 字符串
     * @returns 格式化后的 JSON 字符串
     * @example
     * ```typescript
     * prettierJSON('{"name":"John","age":30}')
     * // 返回:
     * // {
     * //   "name": "John",
     * //   "age": 30
     * // }
     * ```
     */
    prettierJSON(jsonStr?: string): string;
    /**
     * 压缩 JSON
     * @description 将 JSON 字符串压缩为单行格式
     * @param jsonStr - 要压缩的 JSON 字符串
     * @returns 压缩后的 JSON 字符串
     * @example
     * ```typescript
     * compressJSON('{\n  "name": "John",\n  "age": 30\n}')
     * // 返回: {"name":"John","age":30}
     * ```
     */
    compressJSON(jsonStr?: string): string;
    /**
     * 格式化 XML
     * @description 将 XML 字符串格式化为可读的格式
     * @param xmlStr - 要格式化的 XML 字符串
     * @returns 格式化后的 XML 字符串
     * @example
     * ```typescript
     * prettierXML('<root><item>value</item></root>')
     * ```
     */
    prettierXML(xmlStr?: string): string;
    /**
     * 压缩 XML
     * @description 将 XML 字符串压缩为单行格式
     * @param xmlStr - 要压缩的 XML 字符串
     * @returns 压缩后的 XML 字符串
     * @example
     * ```typescript
     * compressXML('<root>\n  <item>value</item>\n</root>')
     * // 返回: <root><item>value</item></root>
     * ```
     */
    compressXML(xmlStr?: string): string;
    /**
     * 格式化 HTML
     * @description 将 HTML 字符串格式化为可读的格式
     * @param htmlStr - 要格式化的 HTML 字符串
     * @returns 格式化后的 HTML 字符串
     * @example
     * ```typescript
     * prettierHTML('<div><p>Hello</p></div>')
     * ```
     */
    prettierHTML(htmlStr?: string): string;
    /**
     * 压缩 HTML
     * @description 将 HTML 字符串压缩为单行格式
     * @param htmlStr - 要压缩的 HTML 字符串
     * @returns 压缩后的 HTML 字符串
     * @example
     * ```typescript
     * compressHTML('<div>\n  <p>Hello</p>\n</div>')
     * // 返回: <div><p>Hello</p></div>
     * ```
     */
    compressHTML(htmlStr?: string): string;
    /**
     * 格式化 CSS
     * @description 将 CSS 字符串格式化为可读的格式
     * @param cssStr - 要格式化的 CSS 字符串
     * @returns 格式化后的 CSS 字符串
     * @example
     * ```typescript
     * prettierCSS('body{color:red;font-size:14px;}')
     * ```
     */
    prettierCSS(cssStr?: string): string;
    /**
     * 压缩 CSS
     * @description 将 CSS 字符串压缩为单行格式
     * @param cssStr - 要压缩的 CSS 字符串
     * @returns 压缩后的 CSS 字符串
     * @example
     * ```typescript
     * compressCSS('body {\n  color: red;\n  font-size: 14px;\n}')
     * // 返回: body{color:red;font-size:14px;}
     * ```
     */
    compressCSS(cssStr?: string): string;
    /**
     * 格式化 SQL
     * @description 将 SQL 字符串格式化为可读的格式
     * @param sqlStr - 要格式化的 SQL 字符串
     * @returns 格式化后的 SQL 字符串
     * @example
     * ```typescript
     * prettierSQL('SELECT * FROM users WHERE age>18')
     * ```
     */
    prettierSQL(sqlStr?: string): string;
    /**
     * 压缩 SQL
     * @description 将 SQL 字符串压缩为单行格式
     * @param sqlStr - 要压缩的 SQL 字符串
     * @returns 压缩后的 SQL 字符串
     * @example
     * ```typescript
     * compressSQL('SELECT *\nFROM users\nWHERE age > 18')
     * // 返回: SELECT * FROM users WHERE age > 18
     * ```
     */
    compressSQL(sqlStr?: string): string;
    /**
     * JSON 转 XML
     * @description 将 JSON 字符串转换为 XML 格式
     * @param jsonStr - 要转换的 JSON 字符串
     * @returns 转换后的 XML 字符串
     * @example
     * ```typescript
     * jsonToXML('{"root":{"item":"value"}}')
     * // 返回: <root><item>value</item></root>
     * ```
     */
    jsonToXML(jsonStr?: string): string;
    /**
     * XML 转 JSON
     * @description 将 XML 字符串转换为 JSON 格式
     * @param xmlStr - 要转换的 XML 字符串
     * @param prettier - 是否格式化输出，默认为 true
     * @returns 转换后的 JSON 字符串
     * @example
     * ```typescript
     * xmlToJSON('<root><item>value</item></root>')
     * // 返回: {"root":{"item":"value"}}
     * ```
     */
    xmlToJSON(xmlStr?: string, prettier?: boolean): string;
};
export default FormatUtil;
