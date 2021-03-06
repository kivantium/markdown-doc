var hljs = require('highlight.js')
var md = require('markdown-it')({
  html:         true,        // Enable HTML tags in source
  breaks:       true,        // Convert '\n' in paragraphs into <br>
  linkify:      true,        // Autoconvert URL-like text to links
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    return ''; // use external default escaping
  }
});
md.use(require('markdown-it-katex'));
md.use(require('markdown-it-deflist'));

var input = document.getElementById('code'),
	preview = document.getElementById('preview');
global.update_view = function() {
	var result = md.render(input.value);
	preview.innerHTML = result;
};
global.md_render = function(content) {
	return md.render(content);
};
