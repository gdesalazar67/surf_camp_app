# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# users
User.destroy_all
Surfspot.destroy_all
Booking.destroy_all
Photo.destroy_all
Review.destroy_all

user01 = User.create!(first_name: 'Demo User', last_name: 'demo', email: 'demo1@gmail.com', zip_code: 11103, password: "1234567")
user02 = User.create!(first_name: 'Marina', last_name: 'demo', email: 'marina1@gmail.com', zip_code: 90001, password: "1234567")
user03 = User.create!(first_name: 'Luke', last_name: 'demo', email: 'luke1@gmail.com', zip_code: 90001, password: "1234567")
user04 = User.create!(first_name: 'Marc', last_name: 'demo', email: 'marc1@gmail.com', zip_code: 90050, password: "1234567")
user05 = User.create!(first_name: 'Kuna', last_name: 'demo', email: 'kuna1@gmail.com', zip_code: 92014, password: "1234567")
user06 = User.create!(first_name: 'Galo', last_name: 'demo', email: 'gako@gmail.com', zip_code: 90405, password: "1234567")

# surfspots
surfspot1 =Surfspot.create!(host_id: user01.id, title: "Montanita Beach", description: "Hippy sand breaks", price: 30, lat: -1.8259639, long: -80.7580102, max_guest: 4, campfire?: true, pets?: true, toilets?: false, showers?: false, wifi?: false, water?: false, tent?: true)
surfspot2 =Surfspot.create!(host_id: user02.id, title: "Surfrider Beach", description: "Tubes for days", price: 50, lat: 33.668244, long: -118.019043, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true)
surfspot3 =Surfspot.create!(host_id: user03.id, title: "Puerto Escondido", description: "Burrito barrel", price: 50, lat: 15.8649046, long: -97.0867278, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true)
surfspot4 =Surfspot.create!(host_id: user04.id, title: " Sao Francisco do Sul", description: "Pao de queijo", price: 45, lat: 33.668244, long: -118.019043, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true)
surfspot5 =Surfspot.create!(host_id: user05.id, title: " Supertubes at Jeffrey's Bay", description: "fast barrels", price: 55, lat: 33.668244, long: -118.019043, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true)
surfspot6 =Surfspot.create!(host_id: user06.id, title: " Tamarindo Beach", description: "Howler monkeys and waves", price: 60, lat: 33.668244, long: -118.019043, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true)
# Surfspot.create!(host_id: 1, title: "Surfrider Beach", description: "Tubes for days", price: 50, lat: 33.668244, long: -118.019043, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true)

#california
surfspot7 =Surfspot.create!(host_id: user01.id, title: "Arroyo Burro Beach", description: "Hippy sand breaks", price: 30, lat: 34.400089, long: -119.737618, max_guest: 4, campfire?: true, pets?: true, toilets?: false, showers?: false, wifi?: false, water?: false, tent?: true, continent: 1)
surfspot8 =Surfspot.create!(host_id: user02.id, title: "Surfrider Beach", description: "Tubes for days", price: 50, lat: 33.668244, long: -118.019043, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 1)
surfspot9 =Surfspot.create!(host_id: user03.id, title: "Surfers Point at Seaside Park", description: "Burrito barrel", price: 50, lat: 34.274595, long: -119.298049, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: 1)
surfspot10 =Surfspot.create!(host_id: user04.id, title: " El Porto", description: "Pao de queijo", price: 45, lat: 33.902813, long: -118.421306, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 1)
surfspot11 =Surfspot.create!(host_id: user05.id, title: "Flat Rock Point", description: "fast barrels", price: 55, lat: 33.796817, long: -118.408333, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 1)
surfspot12 =Surfspot.create!(host_id: user06.id, title: " Trestles", description: "Howler monkeys and waves", price: 60, lat: 33.385915, long: -117.594949, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 1)

# bookings
Booking.create!(user_id: user01.id, surfspot_id: surfspot1.id, check_in: 20190809, check_out: 20190812, num_guest: 4, host_id: user02.id)
Booking.create!(user_id: user02.id, surfspot_id: surfspot2.id, check_in: 20190810, check_out: 20190817, num_guest: 4, host_id: user03.id)
Booking.create!(user_id: user03.id, surfspot_id: surfspot3.id, check_in: 20190811, check_out: 20190815, num_guest: 4, host_id: user01.id)
# photos

Photo.create!(surfspot_id: surfspot1.id, img_url:"http://cdn.cnn.com/cnnnext/dam/assets/130624173927-50-surf-spots-rincon.jpg")
Photo.create!(surfspot_id: surfspot1.id, img_url:"https://i.pinimg.com/originals/1f/71/84/1f71849eb74198c9394c11bb3af5989d.jpg")
Photo.create!(surfspot_id: surfspot1.id, img_url:"https://i.pinimg.com/474x/a2/31/12/a23112d706daba0907afec5129cc42e4--hammocks-costa-rica.jpg")
Photo.create!(surfspot_id: surfspot1.id, img_url:"https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2017/4/25/0/Original_Jeremy-Pawlowski-Costa-Rica-10.jpg.rend.hgtvcom.1280.960.suffix/1493143970475.jpeg")
Photo.create!(surfspot_id: surfspot1.id, img_url:"https://b9i191t9swmfpa7o1fi3farz-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/slide-1.jpg")

Photo.create!(surfspot_id: surfspot2.id, img_url:"http://www.trebolrentacar.com/uploads/manuel_antonio_trebolrentacar.jpeg")
Photo.create!(surfspot_id: surfspot2.id, img_url:"https://t-ec.bstatic.com/images/hotel/max1024x768/208/208901600.jpg")
Photo.create!(surfspot_id: surfspot2.id, img_url:"https://cdn.hiconsumption.com/wp-content/uploads/2016/08/Best-Surf-Instagram-Accounts-01.jpg")
Photo.create!(surfspot_id: surfspot2.id, img_url:"http://www.californiabeaches.com/wp-content/uploads/2015/06/california-beach-bonfire3.jpg")

Photo.create!(surfspot_id: surfspot3.id, img_url:"https://cdn.cnn.com/cnnnext/dam/assets/160129060426-samoa-20150525-scc-sta-0336-piula-1-super-169.jpg")
Photo.create!(surfspot_id: surfspot3.id, img_url:"https://www.homesweethome.travel/wp-content/uploads/2017/08/accommodation-bali-keramas-beach-surf-camping-1067x800.jpg")
Photo.create!(surfspot_id: surfspot3.id, img_url:"https://d3rxb6jby077et.cloudfront.net/nCQb56MuuvznpgIO4woA2fsiP/1440x960/1440x960_costa-rica-provincia-de-puntarenas-lapoint-surf-camp-costa-rica-2liypcwem.jpg")
Photo.create!(surfspot_id: surfspot3.id, img_url:"https://s-ec.bstatic.com/images/hotel/max1024x768/876/87615582.jpg")
Photo.create!(surfspot_id: surfspot3.id, img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx8568ivX2A6myio4SNb8UrfJBhPIOMrPrnpw4Bs0m13djHMGhg")

Photo.create!(surfspot_id: surfspot4.id, img_url:"http://www.aboutbrasil.com/modules/images/760.jpg")
Photo.create!(surfspot_id: surfspot4.id, img_url:"https://www.telegraph.co.uk/content/dam/Travel/Destinations/South%20America/Brazil/Rio%20de%20Janeiro/ipanema-beach-rio-2-xxlarge.jpg")
Photo.create!(surfspot_id: surfspot4.id, img_url:"https://cdn-blog.queensland.com/wp-content/uploads/2017/01/whitehaven-beach-camping.jpg")
Photo.create!(surfspot_id: surfspot4.id, img_url:"https://pegasuslodges.com/wp-content/uploads/2014/10/Aganoa%20Left_Aganoa%20Lodge%20Samoa%20Samoa%20Surfing.jpg")
Photo.create!(surfspot_id: surfspot4.id, img_url:"https://www.atlanticahotels.com.br/wp-content/uploads/2019/03/NATAL_MATERIA_FERIAS_Genipabu_Site_Gov_RN-1000x535.jpg")


Photo.create!(surfspot_id: surfspot5.id, img_url:"https://cdn-blog.queensland.com/wp-content/uploads/2017/01/whitehaven-beach-camping.jpg")
Photo.create!(surfspot_id: surfspot5.id, img_url:"https://pegasuslodges.com/wp-content/uploads/2014/10/Aganoa%20Left_Aganoa%20Lodge%20Samoa%20Samoa%20Surfing.jpg")
Photo.create!(surfspot_id: surfspot5.id, img_url:"http://www.aboutbrasil.com/modules/images/760.jpg")
Photo.create!(surfspot_id: surfspot5.id, img_url:"https://www.atlanticahotels.com.br/wp-content/uploads/2019/03/NATAL_MATERIA_FERIAS_Genipabu_Site_Gov_RN-1000x535.jpg")
Photo.create!(surfspot_id: surfspot5.id, img_url:"https://www.telegraph.co.uk/content/dam/Travel/Destinations/South%20America/Brazil/Rio%20de%20Janeiro/ipanema-beach-rio-2-xxlarge.jpg")

Photo.create!(surfspot_id: surfspot6.id, img_url:"https://d3rxb6jby077et.cloudfront.net/nCQb56MuuvznpgIO4woA2fsiP/1440x960/1440x960_costa-rica-provincia-de-puntarenas-lapoint-surf-camp-costa-rica-2liypcwem.jpg")
Photo.create!(surfspot_id: surfspot6.id, img_url:"http://www.californiabeaches.com/wp-content/uploads/2015/06/california-beach-bonfire3.jpg")
Photo.create!(surfspot_id: surfspot6.id, img_url:"https://s-ec.bstatic.com/images/hotel/max1024x768/876/87615582.jpg")
Photo.create!(surfspot_id: surfspot6.id, img_url:"https://cdn.cnn.com/cnnnext/dam/assets/160129060426-samoa-20150525-scc-sta-0336-piula-1-super-169.jpg")
Photo.create!(surfspot_id: surfspot6.id, img_url:"https://www.homesweethome.travel/wp-content/uploads/2017/08/accommodation-bali-keramas-beach-surf-camping-1067x800.jpg")

Review.create!(author_id: user01.id, surfspot_id: surfspot1.id, body: "Amazing waves and sunset")
Review.create!(author_id: user02.id, surfspot_id: surfspot1.id, body: "great spot not bugs")
Review.create!(author_id: user03.id, surfspot_id: surfspot1.id, body: "WOW!! is all I have to say")

Review.create!(author_id: user01.id, surfspot_id: surfspot2.id, body: "Amazing waves and sunset")
Review.create!(author_id: user02.id, surfspot_id: surfspot2.id, body: "great spot not bugs")
Review.create!(author_id: user03.id, surfspot_id: surfspot2.id, body: "WOW!! is all I have to say")

Review.create!(author_id: user02.id, surfspot_id: surfspot3.id, body: "Amazing waves and sunset")
Review.create!(author_id: user01.id, surfspot_id: surfspot3.id, body: "great spot not bugs")
Review.create!(author_id: user03.id, surfspot_id: surfspot3.id, body: "WOW!! is all I have to say")

Review.create!(author_id: user02.id, surfspot_id: surfspot4.id, body: "Amazing waves and sunset")
Review.create!(author_id: user02.id, surfspot_id: surfspot4.id, body: "great spot not bugs")
Review.create!(author_id: user03.id, surfspot_id: surfspot4.id, body: "WOW!! is all I have to say")

Review.create!(author_id: user02.id, surfspot_id: surfspot5.id, body: "Amazing waves and sunset")
Review.create!(author_id: user02.id, surfspot_id: surfspot5.id, body: "great spot not bugs")
Review.create!(author_id: user01.id, surfspot_id: surfspot5.id, body: "WOW!! is all I have to say")

Review.create!(author_id: user02.id, surfspot_id: surfspot6.id, body: "Amazing waves and sunset")
Review.create!(author_id: user02.id, surfspot_id: surfspot6.id, body: "great spot not bugs")
Review.create!(author_id: user01.id, surfspot_id: surfspot6.id, body: "WOW!! is all I have to say")