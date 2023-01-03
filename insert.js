const list = require('./dataSource.json')
const axios = require('axios')

Promise.all(
  list.map((item) => {
    return axios.post('http://localhost:1111/insert', item)
  })
).then(() => {
  console.log('数据插入成功')
})
