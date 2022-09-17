const { Controller } = require('egg')

const SunDay = 0
const SaturDay = 6
const DayTime = 1000 * 60 * 60 * 24

class HomeController extends Controller {
  async today () {
    const now = new Date()
    this.ctx.body = await this.IsNeedWork(now)
  }

  async tomorrow () {
    const now = new Date(new Date().getTime() + DayTime)
    this.ctx.body = await this.IsNeedWork(now)
  }

  async insertWorkDay (data) {
    const res = await this.ctx.service.home.insertWorkDay(this.ctx.request.body)
    this.ctx.body = res
  }

  async IsNeedWork (now) {
    const year = now.getFullYear()
    const month = now.getMonth()
    const day = now.getDate()
    const week = now.getDay()
    const res = await this.ctx.service.home.findDayDetail(year, month + 1, day)
    if (res === null) {
      const IsWeekend = (week === SunDay || week === SaturDay)
      return {
        needWork: !IsWeekend
      }
    } else {
      return res.result
    }
  }
}

module.exports = HomeController
