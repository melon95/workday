/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/today', controller.home.today)
  router.get('/tomorrow', controller.home.tomorrow)
  // router.post('/insert', controller.home.insertWorkDay);
}
