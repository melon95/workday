const { Controller } = require('egg');

const SunDay = 0;
const SaturDay = 6

class HomeController extends Controller {
  async today() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const week = now.getDay();
    const res = await this.ctx.service.home.findDayDetail(year, month, day);
    if (res === null) {
      const IsWeekend = (week === SunDay || week === SaturDay)
      this.ctx.body = {
        needWork: IsWeekend ? false : true
      }
    } else {
      this.ctx.body = res.result;
    }
  }
  async insertWorkDay(data) {
    const res = await this.ctx.service.home.insertWorkDay(this.ctx.request.body)
    console.log(res);
    this.ctx.body = res
  }
}

module.exports = HomeController;
