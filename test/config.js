/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

const path = require("path");

const androidBuildApk = 'android/app/build/outputs/apk/debug';
const apkFileName = 'app-debug.apk';
const androidApkPath = path.resolve(__dirname, "..", androidBuildApk, apkFileName);

const iosBuildApp = 'ios/build/Build/Products/Debug-iphonesimulator';
const appFileName = 'RetailCompanion.app';
const iosAppPath = path.resolve(__dirname, "..", iosBuildApp, appFileName);

const androidCaps = {
  platformName: 'Android',
  platformVersion: '8.1',
  deviceName: 'Android Emulator',
  app: androidApkPath,
  automationName: 'UiAutomator2'
};

const iosCaps = {
  platformName: 'iOS',
  platformVersion: '12.1',
  deviceName: 'iPhone Simulator',
  app: iosAppPath,
  automationName: 'XCUITest'
};

const serverConfig = {
  host: '192.168.0.13',
  port: 4723
};

const androidOptions = Object.assign(
  {
    desiredCapabilities: androidCaps
  },
  serverConfig
);

const iosOptions = Object.assign(
  {
    desiredCapabilities: iosCaps
  },
  serverConfig
);

module.exports = { serverConfig, androidCaps, androidOptions, iosOptions };
