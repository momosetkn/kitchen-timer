const fs = require('fs');
const mustache = require('mustache');


const template = fs.readFileSync("./src/templates/index.html").toString()
fs.writeFileSync(
 './dist/index.html',
  mustache.render(template, {bundleJs: "bundle.js.gz"})
);
// 圧縮が効かなくても、最悪、見れるように
fs.writeFileSync(
 './dist/not_compress.html',
  mustache.render(template, {bundleJs: "bundle.js"})
);
