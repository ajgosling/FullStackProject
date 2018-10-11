# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: "goose", password: "starwars"})
User.create({username: "oddish", password: "starwars"})
User.create({username: "liz", password: "starwars"})
User.create({username: "aj", password: "starwars"})

Channel.create({
  title: "general",
  description: "a general location for quacking it up",
  creator_id: 1
  })

Channel.create({
  title: "re-ducks",
  description: "The place for birds of a feather to talk about all the new hotness in software",
  creator_id: 2
  })

Channel.create({
  title: "quack-academy",
  description: "Learn how to be a waterfowl - don't pay anything until you find your first full-time position in a flock",
  creator_id: 3
  })

Subscription.create({user_id: 1, channel_id: 1})
Subscription.create({user_id: 1, channel_id: 2})
Subscription.create({user_id: 2, channel_id: 1})
Subscription.create({user_id: 3, channel_id: 1})
Subscription.create({user_id: 1, channel_id: 3})
Subscription.create({user_id: 2, channel_id: 2})
Subscription.create({user_id: 2, channel_id: 3})
Subscription.create({user_id: 3, channel_id: 3})
