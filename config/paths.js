/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const { resolve } = require('path');
const { realpathSync, existsSync } = require('fs');
const { parse } = require('url');

const appDirectory = realpathSync(process.cwd());
const resolveApp = relativePath => resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(inputPath, needsSlash) {
  const hasSlash = inputPath.endsWith('/');
  if (hasSlash && !needsSlash) {
    return inputPath.substr(0, inputPath.length - 1);
  }
  if (!hasSlash && needsSlash) {
    return `${inputPath}/`;
  }
  return inputPath;
}

const getPublicUrl = appPackageJson => envPublicUrl || require(appPackageJson).homepage;

function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl = envPublicUrl || (publicUrl ? parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

const moduleFileExtensions = ['js', 'json', 'web.jsx', 'jsx'];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  // eslint-disable-next-line no-shadow
  const extension = moduleFileExtensions.find(extension =>
    existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

module.exports = {
  appBuild: resolveApp('build'),
  appConfig: resolveApp('config'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  appNodeModules: resolveApp('node_modules'),
  appPackageJson: resolveApp('package.json'),
  appPath: resolveApp('.'),
  appPublic: resolveApp('public'),
  appSrc: resolveApp('src'),
  dotenv: resolveApp('.env'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),
  yarnLockFile: resolveApp('yarn.lock')
};

module.exports.moduleFileExtensions = moduleFileExtensions;
