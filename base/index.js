/**
 * base/index.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license 2015-16 (C) Ricepo LLC. All Rights Reserved.
 */

exports.extends = [

  './rules/best-practices.yml',
  './rules/errors.yml',
  './rules/node.yml',
  './rules/style.yml',
  './rules/variables.yml',
  './rules/esnext.yml',
  './rules/imports.yml'

].map(require.resolve);


exports.parser = 'babel-eslint';


exports.rules = { strict: 'error' };
