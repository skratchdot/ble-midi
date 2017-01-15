#!/usr/bin/env node --
/* eslint strict: 0 */
'use strict';

const cli = require('../lib/cli/index.js').default;
cli(process.argv.slice(2));
