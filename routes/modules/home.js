// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 restaurant model
const Restaurant = require('../../models/restaurant')

// 定義首頁路由
router.get('/', (req, res) => {
  const userId = req.user._id   // 變數設定
  Restaurant.find({ userId })         // 加入查詢條件
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

module.exports = router