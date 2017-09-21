/**
 * promise/index.js
 *
 * @author  Hao Chen <a@ricepo.com>
 * @license 2015-16 (C) Ricepo LLC. All Rights Reserved.
 */

exports.extends = [

  './rules/promise.yml'

].map(require.resolve);
