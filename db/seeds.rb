# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.all.destroy_all

goose = User.create({
  username: "goose",
  password: "starwars",
  image_url: "https://cdn.bulbagarden.net/upload/thumb/5/53/054Psyduck.png/1200px-054Psyduck.png"
  })
oddish = User.create({
  username: "oddish",
  password: "starwars",
  image_url: "https://i.pinimg.com/236x/6e/df/61/6edf61102e0f858b93e779381f004a61--little-tattoos-fangirl.jpg"
  })
liz = User.create({
  username: "liz",
  password: "starwars",
  image_url: "https://i.kym-cdn.com/photos/images/original/001/179/537/61e.jpg"
  })
carly = User.create({
  username: "carly",
  password: "starwars",
  image_url: "https://secure.gravatar.com/avatar/123abcd123bc12b3c.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0000-512.png"
  })
jeremiah = User.create({
  username: "baby J",
  password: "starwars",
  image_url: "https://ca.slack-edge.com/T03GU501J-UBR2682L9-1b552c31cbb5-1024"

  })
alejandro = User.create({
  username: "alejandro",
  password: "starwars",
  image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Batman-BenAffleck.jpg/200px-Batman-BenAffleck.jpg"
  })

derek = User.create({
  username: "derek",
  password: "starwars",
  image_url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/15/14/lebron-0.jpg?w968h681"

  })

dirk = User.create({
  username: "dirk dirksen",
  password: "starwars",
  image_url: "https://pbs.twimg.com/profile_images/890036276191043584/jINeJbEq_400x400.jpg"
  })

ruijia = User.create({
  username: "ruijia",
  password: "starwars",
  image_url: "https://cdn0.iconfinder.com/data/icons/colorful-commerce-and-shopping-1/600/people-shopper-mall-shopping-girl-business-bags-512.png"
  })

alice = User.create({
  username: "alice-neko",
  password: "starwars",
  image_url: "https://sdl-stickershop.line.naver.jp/products/0/0/1/1265244/LINEStorePC/main.png?__=20161019"
  })

chris = User.create({
  username: "piY",
  password: "starwars",
  image_url: "https://www.rei.com/media/product/492118"
  })

tomcruise = User.create({
  username: "Maverick",
  password: "starwars",
  image_url: "https://akns-images.eonline.com/eol_images/Entire_Site/2018431/rs_600x600-180531053118-600.tom-cruise.53118.jpg?fit=around|700:700&crop=700:700;center,top&output-quality=90"
  })
iroh = User.create({
  username: "uncle iroh",
  password: "starwars",
  image_url: "https://pbs.twimg.com/profile_images/584121394407047169/8VkAXjot_400x400.jpg"
  })

saitama = User.create({
  username: "saitama",
  password: "starwars",
  image_url: "http://cdn.shopify.com/s/files/1/1158/9490/products/C000009037-PAR-ZOOM_0236d34d-459c-4750-8edc-c4686f93d23d_800x.jpg?v=1524081408"
  })

l = User.create({
  username: "L",
  password: "starwars",
  image_url: "https://i.ebayimg.com/images/g/n90AAOSwVKRaJSe9/s-l300.jpg"
  })


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

topgun = Channel.create({
  title: "Top Gun",
  description: "welcome to flight school",
  creator_id: goose.id
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

gooselizoddish = Channel.create({
  title: "goose liz oddish",
  description: "Learn how to be a waterfowl - don't pay anything until you find your first job",
  creator_id: goose.id,
  is_direct: true
  })


Subscription.all.destroy_all

Subscription.create({user_id: goose.id, channel_id: general.id})
Subscription.create({user_id: oddish.id, channel_id: general.id})
Subscription.create({user_id: liz.id, channel_id: general.id})
Subscription.create({user_id: carly.id, channel_id: general.id})
Subscription.create({user_id: jeremiah.id, channel_id: general.id})
Subscription.create({user_id: alejandro.id, channel_id: general.id})
Subscription.create({user_id: derek.id, channel_id: general.id})
Subscription.create({user_id: tomcruise.id, channel_id: general.id})
Subscription.create({user_id: iroh.id, channel_id: general.id})
Subscription.create({user_id: saitama.id, channel_id: general.id})
Subscription.create({user_id: l.id, channel_id: general.id})
Subscription.create({user_id: dirk.id, channel_id: general.id})
Subscription.create({user_id: ruijia.id, channel_id: general.id})
Subscription.create({user_id: alice.id, channel_id: general.id})
Subscription.create({user_id: chris.id, channel_id: general.id})
Subscription.create({user_id: goose.id, channel_id: reducks.id})
Subscription.create({user_id: oddish.id, channel_id: reducks.id})
Subscription.create({user_id: goose.id, channel_id: quackacademy.id})
Subscription.create({user_id: oddish.id, channel_id: quackacademy.id})
Subscription.create({user_id: liz.id, channel_id: quackacademy.id})
Subscription.create({user_id: goose.id, channel_id: gooseoddish.id})
Subscription.create({user_id: oddish.id, channel_id: gooseoddish.id})
Subscription.create({user_id: goose.id, channel_id: gooseliz.id})
Subscription.create({user_id: liz.id, channel_id: gooseliz.id})
Subscription.create({user_id: goose.id, channel_id: gooselizoddish.id})
Subscription.create({user_id: oddish.id, channel_id: gooselizoddish.id})
Subscription.create({user_id: liz.id, channel_id: gooselizoddish.id})
Subscription.create({user_id: goose.id, channel_id: topgun.id})
Subscription.create({user_id: tomcruise.id, channel_id: topgun.id})

Message.all.destroy_all

Message.create({
  body: "I am the first message on quack!",
  channel_id: general.id,
  user_id: goose.id
  })


Message.create({
  body: "This channel has a message!",
  channel_id: reducks.id,
  user_id: goose.id
  })

Message.create({
  body: "DON'T FORGET, Quack-tive Record is super important and you will definitely need to know how it works for job interviews!",
  channel_id: quackacademy.id,
  user_id: liz.id
  })

Message.create({
  body: "BREAK FOR LUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUNCH!!!",
  channel_id: quackacademy.id,
  user_id: liz.id
  })

Message.create({
  body: "There's a bogey on my tail, Goose!",
  channel_id: topgun.id,
  user_id: tomcruise.id
  })

Message.create({
  body: "quack?",
  channel_id: topgun.id,
  user_id: goose.id
  })

Message.create({
  body: "You're my eyes, Goose!!!",
  channel_id: topgun.id,
  user_id: tomcruise.id
  })

Message.create({
  body: "Quack?!?",
  channel_id: topgun.id,
  user_id: goose.id
  })

Message.create({
  body: "How about a quick round of beach volleyball, Goose?",
  channel_id: topgun.id,
  user_id: tomcruise.id
  })
