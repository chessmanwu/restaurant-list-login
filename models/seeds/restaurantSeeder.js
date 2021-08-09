const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant')
const restaurantListSeeds = require('../../restaurant.json').results
const User = require('../user')
const db = require('../../config/mongoose')

const Seed_Users = [
  {
    name: 'user1',
    email: 'user1@example.com',
    password: '12345678',
    MyRestaurantList: restaurantListSeeds.slice(0, 3)
  },
  {
    name: 'user2',
    email: 'user2@example.com',
    password: '12345678',
    MyRestaurantList: restaurantListSeeds.slice(4, 7)
  }
]

// 連線成功
db.once('open', () => {
  Promise.all(
    Array.from(Seed_Users, (Seed_Users, i) => {
      const restaurantList = Seed_Users.MyRestaurantList
      return bcrypt
        .genSalt(10)
        .then((salt) => bcrypt.hash(Seed_Users.password, salt))
        .then((hash) =>
          User.create({
            name: Seed_Users.name,
            email: Seed_Users.email,
            password: hash
          })
        )
        .then((user) => {
          const userId = user._id
          restaurantList.forEach((restaurant) => (restaurant.userId = userId))
          return Restaurant.create(restaurantList)
        })
    })
  )
    .then(() => {
      console.log('done.')
      process.exit()
    })
})
