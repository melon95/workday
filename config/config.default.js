/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + 'workday'

  config.logger = {
    level: 'ERROR',
    consoleLevel: 'ERROR'
  }

  config.security = {
    csrf: false
  }
  return config
}
