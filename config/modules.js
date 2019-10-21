/* eslint-disable global-require */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable consistent-return */
'use strict';

const { existsSync } = require('fs');
const { delimiter, resolve: _resolve, relative } = require('path');
const chalk = require('react-dev-utils/chalk');
const { appSrc, appNodeModules, appPath, appJsConfig } = require('./paths');

const { red } = chalk;

/**
 * Get additional module paths based on the baseUrl of a compilerOptions object.
 *
 * @param {Object} options
 */
function getAdditionalModulePaths(options = {}) {
  const { baseUrl } = options;

  // We need to explicitly check for null and undefined (and not a falsy value) because
  // TypeScript treats an empty string as `.`.
  if (baseUrl == null) {
    // If there's no baseUrl set we respect NODE_PATH
    // Note that NODE_PATH is deprecated and will be removed
    // in the next major release of create-react-app.

    const nodePath = process.env.NODE_PATH || '';
    return nodePath.split(delimiter).filter(Boolean);
  }

  const baseUrlResolved = _resolve(appPath, baseUrl);

  // We don't need to do anything if `baseUrl` is set to `node_modules`. This is
  // the default behavior.
  if (relative(appNodeModules, baseUrlResolved) === '') {
    return null;
  }

  // Allow the user set the `baseUrl` to `appSrc`.
  if (relative(appSrc, baseUrlResolved) === '') {
    return [appSrc];
  }

  // If the path is equal to the root directory we ignore it here.
  // We don't want to allow importing from the root directly as source files are
  // not transpiled outside of `src`. We do allow importing them with the
  // absolute path (e.g. `src/Components/Button.js`) but we set that up with
  // an alias.
  if (relative(appPath, baseUrlResolved) === '') {
    return null;
  }

  // Otherwise, throw an error.
  throw new Error(
    red.bold(
      "Your project's `baseUrl` can only be set to `src` or `node_modules`." +
        ' Create React App does not support other values at this time.'
    )
  );
}

/**
 * Get webpack aliases based on the baseUrl of a compilerOptions object.
 *
 * @param {*} options
 */
function getWebpackAliases(options = {}) {
  const { baseUrl } = options;

  if (!baseUrl) {
    return {};
  }

  const baseUrlResolved = _resolve(appPath, baseUrl);

  if (relative(appPath, baseUrlResolved) === '') {
    return {
      src: appSrc
    };
  }
}

/**
 * Get jest aliases based on the baseUrl of a compilerOptions object.
 *
 * @param {*} options
 */
function getJestAliases(options = {}) {
  const { baseUrl } = options;

  if (!baseUrl) {
    return {};
  }

  const baseUrlResolved = _resolve(appPath, baseUrl);

  if (relative(appPath, baseUrlResolved) === '') {
    return {
      'src/(.*)$': '<rootDir>/src/$1'
    };
  }
}

function getModules() {
  // Check if TypeScript is setup
  const hasJsConfig = existsSync(appJsConfig);

  let config;

  if (hasJsConfig) {
    config = require(appJsConfig);
  }

  config = config || {};
  const options = config.compilerOptions || {};

  const additionalModulePaths = getAdditionalModulePaths(options);

  return {
    additionalModulePaths,
    webpackAliases: getWebpackAliases(options),
    jestAliases: getJestAliases(options)
  };
}

module.exports = getModules();
