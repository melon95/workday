const { Service } = require('egg')
const Datastore = require('nedb')
const path = require('path')

const db = new Datastore({ filename: path.join(__dirname, '../../workday.json'), autoload: true })

class HomeService extends Service {
  async findDayDetail (year, month, day) {
    const res = await new Promise((resolve, reject) => {
      db.findOne({
        year,
        month,
        day
      }, function (err, docs) {
        if (err) reject(err)
        resolve(docs)
      })
    })
    return res
  }

  async insertWorkDay (data) {
    const res = await new Promise((resolve, reject) => {
      db.insert(data, (err, docs) => {
        if (err) reject(err)
        resolve(true)
      })
    })
    return res
  }
}

module.exports = HomeService
