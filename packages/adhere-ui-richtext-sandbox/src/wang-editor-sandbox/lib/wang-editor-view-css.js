export default `
/*.editor-content-view {
  margin-top: 20px;
  padding: 0 10px;
  overflow-x: auto;
  border: 3px solid #ccc;
  border-radius: 5px;
}*/

.editor-content-view p,
.editor-content-view li {
  white-space: pre-wrap;
}

.editor-content-view blockquote {
  margin: 10px 0;
  padding: 10px;
  background-color: #f1f1f1;
  border-left: 8px solid #d0e5f2;
}

.editor-content-view code {
  padding: 3px;
  font-family: monospace;
  background-color: #eee;
  border-radius: 3px;
}

.editor-content-view pre > code {
  display: block;
  padding: 10px;
}

.editor-content-view table {
  border-collapse: collapse;
}

.editor-content-view td,
.editor-content-view th {
  min-width: 50px;
  height: 20px;
  border: 1px solid #ccc;
}

.editor-content-view th {
  background-color: #f1f1f1;
}

.editor-content-view ul,
.editor-content-view ol {
  padding-left: 20px;
}

.editor-content-view input[type='checkbox'] {
  margin-right: 5px;
}
`;
