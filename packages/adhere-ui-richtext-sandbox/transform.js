const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, 'src', 'common-lib', 'prop-types.min.js'),
  path.join(__dirname, 'src', 'common-lib', 'react.production.min.js'),
  path.join(__dirname, 'src', 'common-lib', 'react-dom.production.min.js'),

  path.join(__dirname, 'src', 'react-quill-sandbox', 'lib', 'quill.bubble.js'),
  path.join(__dirname, 'src', 'react-quill-sandbox', 'lib', 'quill.core.js'),
  path.join(__dirname, 'src', 'react-quill-sandbox', 'lib', 'quill.snow.js'),
  path.join(__dirname, 'src', 'react-quill-sandbox', 'lib', 'react-quill.js'),

  path.join(__dirname, 'src', 'wang-editor-sandbox', 'lib', 'wang-editor-5.1.23.js'),
  path.join(__dirname, 'src', 'wang-editor-sandbox', 'lib', 'wang-editor-css.js'),
  path.join(__dirname, 'src', 'wang-editor-sandbox', 'lib', 'wang-editor-react-1.0.6.js'),
];

files.forEach((filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');

  fs.writeFileSync(filePath, `export default ${JSON.stringify(content)}`);
});
