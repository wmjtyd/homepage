var fs = require('fs');
var chalk = require('chalk');
const path = require('path');
const typescript = require('typescript');

const nextConfig = require('./next-i18next.config')

module.exports = {
  input: [
    'src/**/*.{js,jsx,ts,tsx}',
    // Use ! to filter out files or directories
    '!app/**/*.spec.{js,jsx,ts,tsx}',
    '!app/i18n/**',
    '!**/node_modules/**',
  ],
  output: './',
  options: {
    debug: true,
    sort: true,
    func: {
      list: ['i18next.t', 'i18n.t', 'translate', 't'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      fallbackKey: function (ns, value) {
        return value;
      },
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      fallbackKey: function (ns, value) {
        return value;
      },
      acorn: {
        ecmaVersion: 10, // defaults to 10
        sourceType: 'module', // defaults to 'module'
        // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
      },
    },
    lngs: nextConfig.i18n.locales,
    ns: ['common'],
    defaultLng: nextConfig.i18n.defaultLocale, // 'en',
    defaultNs: 'common',
    // defaultValue: '__STRING_NOT_TRANSLATED__',
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'public/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
  transform: function customTransform(file, enc, done) {
    'use strict';
    const parser = this.parser;
    const content = fs.readFileSync(file.path, enc);
    const { base, ext } = path.parse(file.path);
    let count = 0;
    if (['.ts', '.tsx', '.js', '.jsx'].includes(ext) && !base.includes('.d.ts')) {
      const content = fs.readFileSync(file.path, enc);

      const { outputText } = typescript.transpileModule(content, {
        compilerOptions: {
          target: 'ES2017',
          experimentalDecorators: true /* 启用s experimental support for ES7 decorators. */,
          emitDecoratorMetadata: true /* 启用s experimental support for emitting type metadata for decorators. */,
          allowJs: true,
        },
        fileName: path.basename(file.path),
      });

      parser.parseTransFromString(outputText);
      parser.parseFuncFromString(
        outputText,
        {
          list: ['i18next._', 'i18next.__', 't'],
        },
        (key, options) => {
          console.error(key, key.trim(), key.trim() != key);
          if (key.trim() != key) {
            // console.error(key, key.trim(), options);
          }
          parser.set(
            key.trim(),
            Object.assign({}, options, {
              nsSeparator: false,
              keySeparator: false,
            })
          );
          ++count;
        }
      );
      

      // parser.parseFuncFromString(outputText);
    }

    // parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
    //     parser.set(key, Object.assign({}, options, {
    //         nsSeparator: false,
    //         keySeparator: false
    //     }));
    //     ++count;
    // });

    if (count > 0) {
        // console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
    }

    done();
  },
};
