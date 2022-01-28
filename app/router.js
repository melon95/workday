/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/today', controller.home.today);
  router.post('/insert', controller.home.insertWorkDay);
};
