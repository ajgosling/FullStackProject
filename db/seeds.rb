# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.all.destroy_all

goose = User.create({username: "goose", password: "starwars"})
oddish = User.create({username: "oddish", password: "starwars"})
liz = User.create({username: "liz", password: "starwars"})
aj = User.create({username: "aj", password: "starwars"})

Channel.all.destroy_all

general = Channel.create({
  title: "general",
  description: "a general location for quacking it up",
  creator_id: goose.id
  })

reducks = Channel.create({
  title: "re-ducks",
  description: "The place for birds of a feather to talk about all the new hotness in software",
  creator_id: oddish.id
  })

quackacademy = Channel.create({
  title: "quack-academy",
  description: "Learn how to be a waterfowl - don't pay anything until you find your first job",
  creator_id: liz.id
  })

gooseoddish = Channel.create({
  title: "goose oddish",
  description: "Learn how to be a waterfowl - don't pay anything until you find your first job",
  creator_id: goose.id,
  is_direct: true
  })

gooseliz = Channel.create({
  title: "goose liz",
  description: "Learn how to be a waterfowl - don't pay anything until you find your first job",
  creator_id: liz.id,
  is_direct: true
  })

Subscription.all.destroy_all

Subscription.create({user_id: goose.id, channel_id: general.id})
Subscription.create({user_id: goose.id, channel_id: reducks.id})
Subscription.create({user_id: oddish.id, channel_id: general.id})
Subscription.create({user_id: liz.id, channel_id: general.id})
Subscription.create({user_id: goose.id, channel_id: quackacademy.id})
Subscription.create({user_id: oddish.id, channel_id: reducks.id})
Subscription.create({user_id: oddish.id, channel_id: quackacademy.id})
Subscription.create({user_id: liz.id, channel_id: quackacademy.id})
Subscription.create({user_id: goose.id, channel_id: gooseoddish.id})
Subscription.create({user_id: oddish.id, channel_id: gooseoddish.id})
Subscription.create({user_id: goose.id, channel_id: gooseliz.id})
Subscription.create({user_id: liz.id, channel_id: gooseliz.id})

Message.all.destroy_all

Message.create({
  body: "I am the first message on quack!",
  channel_id: general.id,
  user_id: goose.id
  })
Message.create({
  body: "Wow Look at me go!",
  channel_id: general.id,
  user_id: goose.id
  })
Message.create({
  body: "Now its time to test!",
  channel_id: general.id,
  user_id: goose.id
  })

Message.create({
  body: "This channel has a message!",
  channel_id: reducks.id,
  user_id: goose.id
  })

Message.create({
  body: "So does this one!",
  channel_id: quackacademy.id,
  user_id: goose.id
  })
