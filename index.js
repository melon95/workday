const egg = require('egg');

egg
  .start({
    workers: 1,
    port: 1111,
    mode: 'single'
  })
  .then(app => {
    app.listen(1111);
    console.log('listen 1111');
  })
  .catch(err => {
    console.error(err);
  });
