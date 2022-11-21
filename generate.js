const fs = require('fs');
const path = require('path');

const zh = require('./public/locales/zh/common.json');
const source = require('./public/locales/source.json');

const data = Object.keys(zh).reduce((result, value, key, arr) => {
  console.log('key', key);
  result[value] = Object.values(source)[key];
  return result;
}, {});

fs.writeFileSync(path.join(__dirname, 'public/locales/ko/common.json'), JSON.stringify(data, null, 2), {
  encoding: 'utf8',
});

console.log('data', data);
