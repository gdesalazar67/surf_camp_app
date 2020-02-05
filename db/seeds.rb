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

user01 = User.create!(first_name: 'Demo User', last_name: 'demo', email: 'demo1@gmail.com', zip_code: 11103, password: "1234567", photo:"https://www.flaticon.com/premium-icon/icons/svg/1993/1993177.svg")
user02 = User.create!(first_name: 'Marina', last_name: 'Andy', email: 'marina1@gmail.com', zip_code: 90001, password: "1234567", photo:"https://www.flaticon.com/premium-icon/icons/svg/1312/1312051.svg")
user03 = User.create!(first_name: 'Luke', last_name: 'Sky', email: 'luke1@gmail.com', zip_code: 90001, password: "1234567", photo: "https://image.flaticon.com/icons/svg/1499/1499861.svg")
user04 = User.create!(first_name: 'Marc', last_name: 'Marinara', email: 'marc1@gmail.com', zip_code: 90050, password: "1234567", photo:"https://image.flaticon.com/icons/svg/1674/1674291.svg")
user05 = User.create!(first_name: 'Kuna', last_name: 'Dog', email: 'kuna1@gmail.com', zip_code: 92014, password: "1234567", photo:"https://www.flaticon.com/premium-icon/icons/svg/1920/1920987.svg")
user06 = User.create!(first_name: 'Galo', last_name: 'Ernesto', email: 'gako@gmail.com', zip_code: 90405, password: "1234567", photo:"https://image.flaticon.com/icons/svg/581/581707.svg")

# surfspots
#california
surfspot7 =Surfspot.create!(host_id: user01.id, title: "Arroyo Burro Beach", description: "Hippy sand breaks", price: 30, lat: 34.400089, long: -119.737618, max_guest: 4, campfire?: true, pets?: true, toilets?: false, showers?: false, wifi?: false, water?: false, tent?: true, continent: "north america", state: "california", country: "usa")
surfspot8 =Surfspot.create!(host_id: user02.id, title: "Surfrider Beach", description: "Tubes for days", price: 50, lat: 33.668244, long: -118.019043, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "north america", state: "california", country: "usa")
surfspot9 =Surfspot.create!(host_id: user03.id, title: "Surfers Point at Seaside Park", description: "Burrito barrel", price: 50, lat: 34.274595, long: -119.298049, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: "north america", state: "california", country: "usa")
surfspot10 =Surfspot.create!(host_id: user04.id, title: " El Porto", description: "Pao de queijo", price: 45, lat: 33.902813, long: -118.421306, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "north america", state: "california", country: "usa")
surfspot11 =Surfspot.create!(host_id: user05.id, title: "Flat Rock Point", description: "fast barrels", price: 55, lat: 33.796817, long: -118.408333, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "north america", state: "california", country: "usa")
surfspot12 =Surfspot.create!(host_id: user06.id, title: " Trestles", description: "Howler monkeys and waves", price: 60, lat: 33.385915, long: -117.594949, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "north america", state: "california", country: "usa")
# asia
surfspot1 =Surfspot.create!(host_id: user01.id, title: "Kuta Beach", description: "Hippy sand breaks", price: 30, lat: -8.717354, long: 115.168507, max_guest: 4, campfire?: true, pets?: true, toilets?: false, showers?: false, wifi?: false, water?: false, tent?: true, continent: "asia", state: "", country: "bali")
surfspot2 =Surfspot.create!(host_id: user02.id, title: "Uluwatu Beach", description: "Tubes for days", price: 50, lat: -8.690772, long: 115.157018, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "asia", state: "", country: "bali")
surfspot3 =Surfspot.create!(host_id: user03.id, title: "Plengkung Beach", description: "G-land", price: 50, lat: -8.725803, long: 114.362334, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: "asia", state: "", country: "java")
surfspot4 =Surfspot.create!(host_id: user04.id, title: "Gods Left", description: "Pao de queijo", price: 45, lat: -9.761211,  long: 119.331933, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "asia", state: "", country: "sumba")
surfspot5 =Surfspot.create!(host_id: user05.id, title: "Desert Point", description: "fast barrels", price: 55, lat: -8.740292, long: 115.838397, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "asia", state: "", country: "lombok")
surfspot6 =Surfspot.create!(host_id: user06.id, title: "Weligama Beach", description: "Howler monkeys and waves", price: 60, lat: 5.971412, long: 80.427168, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "asia", state: "", country: "sri lanka")
# Africa
surfspot13 =Surfspot.create!(host_id: user05.id, title: " Supertubes at Jeffrey's Bay", description: "fast barrels", price: 55, lat: -34.062007, long: 24.925986, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "africa", state: "", country:"south africa")
surfspot14 =Surfspot.create!(host_id: user02.id, title: "Taghazout", description: "Moroccan Tubes", price: 50, lat: 30.544958, long: -9.712408, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "africa", state: "", country:"morocco")
surfspot15 =Surfspot.create!(host_id: user03.id, title: "Lanzarote Island", description: "Spanish Volcano", price: 50, lat: 29.115407, long: -13.555628, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: "africa", state: "", country:"lanzarote")
surfspot16 =Surfspot.create!(host_id: user04.id, title: "Anchor Point", description: "Moroccos Most Famous", price: 45, lat: 30.545538, long: -9.726462, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "africa", state: "", country:"morocco")
surfspot17 =Surfspot.create!(host_id: user05.id, title: "Boilers", description: "fast barrels", price: 55, lat: 30.625182, long: -9.878282, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "africa", state: "", country:"morocco")
surfspot18 =Surfspot.create!(host_id: user06.id, title: "Cave Rock", description: "The Bay of Plenty", price: 60, lat: -29.888704, long: 31.050555, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "africa", state: "", country:"south africa")
# australia 
surfspot19 =Surfspot.create!(host_id: user05.id, title: "Crescent Head ", description: "fast barrels", price: 55, lat: -31.197500, long: 152.974946, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "australia", state: "", country: "australia")
surfspot20 =Surfspot.create!(host_id: user02.id, title: "Gold Coast", description: "Queensland", price: 50, lat: -28.009626, long: 153.432764, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "australia", state: "", country: "australia")
surfspot21 =Surfspot.create!(host_id: user03.id, title: "North Narrabeen", description: "Long Reef", price: 50, lat: -33.704725, long: 151.306220, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: "australia", state: "", country: "australia")
surfspot22 =Surfspot.create!(host_id: user04.id, title: "The Pass at Byron Bay", description: "In Abundance", price: 45, lat: -28.637341, long: 153.628109, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "australia", state: "", country: "australia")
surfspot23 =Surfspot.create!(host_id: user05.id, title: "Noosa Heads, QLD", description: "fast barrels", price: 55, lat: -26.385391, long: 153.088162, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "australia", state: "", country: "australia")
surfspot24 =Surfspot.create!(host_id: user06.id, title: "Prevelly Bay, WA", description: "The heart", price: 60, lat:-33.976263, long: 114.986008, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "australia", state: "", country: "australia")
#south america
surfspot25 =Surfspot.create!(host_id: user04.id, title: "Sao Francisco do Sul", description: "Pao de queijo", price: 45, lat: -26.243964, long: -48.508264, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "south america", state: "", country: "brazil")
surfspot26 =Surfspot.create!(host_id: user02.id, title: "Santa Catarina", description: "Barra da Lagoa", price: 50, lat: -27.572586,  long: -48.426582, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "south america", state: "", country: "brazil")
surfspot27 =Surfspot.create!(host_id: user03.id, title: "Mar de Plata", description: "Burrito barrel", price: 50, lat: -38.012074, long: -57.538056, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: "south america", state: "", country: "argentina")
surfspot28 =Surfspot.create!(host_id: user01.id, title: "Montanita Beach", description: "Hippy sand breaks", price: 30, lat: -1.820480, long: -80.757496, max_guest: 4, campfire?: true, pets?: true, toilets?: false, showers?: false, wifi?: false, water?: false, tent?: true, continent: "south america", state: "", country: "ecuador")
surfspot29 =Surfspot.create!(host_id: user05.id, title: "Playa Mariano", description: "Sea Gauchos", price: 55, lat: -38.083517, long: -57.538079, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "south america", state: "", country: "argentina")
surfspot30 =Surfspot.create!(host_id: user06.id, title: "Guarda do Embaú", description: "Howler monkeys and waves", price: 60, lat: -27.943001, long: -48.621460, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "south america", state: "", country: "brazil")

# north america 
surfspot31 =Surfspot.create!(host_id: user03.id, title: "Frying Pan Banks", description: "Cape Fear", price: 50, lat: 33.842114, long: -77.960821, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: "north america", state: "north carolina", country: "usa")
surfspot32 =Surfspot.create!(host_id: user02.id, title: "Banzai Pipeline", description: "Oahu", price: 50, lat: 21.664896, long: -158.051727, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "north america", state: "hawaii", country: "usa")
surfspot33 =Surfspot.create!(host_id: user01.id, title: "Playa Doña Lala", description: "Puerto Rico", price: 30, lat: 18.336688, long: -67.253965, max_guest: 4, campfire?: true, pets?: true, toilets?: false, showers?: false, wifi?: false, water?: false, tent?: true, continent: "north america", state: "", country: "usa")
surfspot34 =Surfspot.create!(host_id: user04.id, title: "Cocoa Beach Pier", description: "Flo Rida", price: 45, lat: 28.367453, long: -80.602382, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "north america", state: "florida", country: "usa")
surfspot35 =Surfspot.create!(host_id: user05.id, title: "Manasquan Inlet", description: "Pumping waves and fist", price: 55, lat: 40.105275, long: -74.034394, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "north america", state: "new jersey", country: "usa")
surfspot36 =Surfspot.create!(host_id: user06.id, title: "Cabo de San Antonio", description: "Cigar rollers", price: 60, lat: 21.836572, long: -84.931693, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "north america", state: "", country: "usa")

#Europe
surfspot37 =Surfspot.create!(host_id: user01.id, title: "Peniche", description: "Portugal", price: 30, lat: 39.357903, long: -9.399830, max_guest: 4, campfire?: true, pets?: true, toilets?: false, showers?: false, wifi?: false, water?: false, tent?: true, continent: "europe", state: "", country: "portugal")
surfspot38 =Surfspot.create!(host_id: user02.id, title: "Sagres", description: "Portugal", price: 50, lat: 37.009615, long: -8.938785, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "europe", state: "", country: "portugal")
surfspot39 =Surfspot.create!(host_id: user03.id, title: "Ericeira", description: "Portugal", price: 50, lat: 38.967722, long: -9.419542, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: "europe", state: "", country: "portugal")
surfspot40 =Surfspot.create!(host_id: user04.id, title: "Gros", description: "San Sebastian", price: 45, lat: 43.325845, long: -1.975621, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "europe", state: "", country: "spain")
surfspot41 =Surfspot.create!(host_id: user05.id, title: "Playa de Rodiles", description: "Espania", price: 55, lat: 43.532122, long: -5.377309, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "europe", state: "", country: "spain")
surfspot42 =Surfspot.create!(host_id: user06.id, title: "Watergate Bay", description: "Beans and Toast", price: 60, lat: 50.444161, long: -5.042634, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: "europe", state: "", country: "england")

# bookings
Booking.create!(user_id: user01.id, surfspot_id: surfspot1.id, check_in: 20190809, check_out: 20190812, num_guest: 4, host_id: user02.id)
Booking.create!(user_id: user01.id, surfspot_id: surfspot12.id, check_in: 20190810, check_out: 20190817, num_guest: 4, host_id: user03.id)
Booking.create!(user_id: user01.id, surfspot_id: surfspot38.id, check_in: 20190811, check_out: 20190815, num_guest: 4, host_id: user04.id)
# photos

photos = [

[
    "http://cdn.cnn.com/cnnnext/dam/assets/130624173927-50-surf-spots-rincon.jpg",
    "https://i.pinimg.com/originals/1f/71/84/1f71849eb74198c9394c11bb3af5989d.jpg",
    "https://i.pinimg.com/474x/a2/31/12/a23112d706daba0907afec5129cc42e4--hammocks-costa-rica.jpg",
    "https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2017/4/25/0/Original_Jeremy-Pawlowski-Costa-Rica-10.jpg.rend.hgtvcom.1280.960.suffix/1493143970475.jpeg",
    "https://data.whicdn.com/images/327156684/original.jpg"
],
[
    "http://www.trebolrentacar.com/uploads/manuel_antonio_trebolrentacar.jpeg",
    "https://t-ec.bstatic.com/images/hotel/max1024x768/208/208901600.jpg",
    "https://cdn.hiconsumption.com/wp-content/uploads/2016/08/Best-Surf-Instagram-Accounts-01.jpg",
    "http://www.californiabeaches.com/wp-content/uploads/2015/06/california-beach-bonfire3.jpg"
],
[
    "https://cdn.cnn.com/cnnnext/dam/assets/160129060426-samoa-20150525-scc-sta-0336-piula-1-super-169.jpg",
    "https://www.homesweethome.travel/wp-content/uploads/2017/08/accommodation-bali-keramas-beach-surf-camping-1067x800.jpg",
    "https://d3rxb6jby077et.cloudfront.net/nCQb56MuuvznpgIO4woA2fsiP/1440x960/1440x960_costa-rica-provincia-de-puntarenas-lapoint-surf-camp-costa-rica-2liypcwem.jpg",
    "https://s-ec.bstatic.com/images/hotel/max1024x768/876/87615582.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx8568ivX2A6myio4SNb8UrfJBhPIOMrPrnpw4Bs0m13djHMGhg"
],
[
    "http://www.aboutbrasil.com/modules/images/760.jpg",
    "https://www.telegraph.co.uk/content/dam/Travel/Destinations/South%20America/Brazil/Rio%20de%20Janeiro/ipanema-beach-rio-2-xxlarge.jpg",
    "https://cdn-blog.queensland.com/wp-content/uploads/2017/01/whitehaven-beach-camping.jpg",
    "https://pegasuslodges.com/wp-content/uploads/2014/10/Aganoa%20Left_Aganoa%20Lodge%20Samoa%20Samoa%20Surfing.jpg",
    "https://www.atlanticahotels.com.br/wp-content/uploads/2019/03/NATAL_MATERIA_FERIAS_Genipabu_Site_Gov_RN-1000x535.jpg"
]
]


reviews = [
  [
    "The only one whom can whisper to you the ways of the surf, is the wind.",
    "Go strip off your clothes that are a nuisance in this mellow clime. Get in and wrestle with the sea; wing your heels with the skill and power that reside in you, hit the sea's breakers, master them, and ride upon their backs as a king should.",
    "WOW!! is all I have to say",
    "The best surfer out there is the one having the most fun.",
    "Your surfing can get better on every turn, on every wave you catch. Learn to read the ocean better. A big part of my success has been wave knowledge.",
    "If there was no such thing as barrels I probably wouldn't even surf."
  ],
  [
    "If in doubt, paddle out.",
    "If you're having a bad day, catch a wave.",
    "I surf to get a tan.",
    "One drop in is an accident, two is rude, three is a twatable offence.",
    "I could not help concluding this man had the most supreme pleasure while he was driven so fast and so smoothly by the sea.",
    "There are a million ways to surf, and as long as you’re smiling you’re doing it right."
  ],
  [
    "It's a culmination of your life of surfing when you turn and paddle in at Mavericks.",
    "Big waves aren't measured in feet, but in increments of fear.",
    "Then, after I've gotten rid of Batman and Robin for good, I will rule the waves. Me, the Joker, king of the surf and all the surfers. Then, Gotham City! Later, the world!",
    "Sometimes in the morning, when it's a good surf, I go out there, and I don't feel like it's a bad world.",
    "Never drive away from good surf.",
    "Waves are toys from God"
  ],
  [
    "Surfing's the source. Can change your life. Swear to God.",
    "Honest to goodness it’s the absolute ultimate!",
    "Wiping out is an under appreciated skill.",
    "I took off on a wave, went down the side, popped out the other end, and went, shit, I’m still alive!",
    "When the surfs up, your life is too",
    "It’s a cakewalk, when you know how."
  ]
]

users = User.all

Surfspot.all.each do |surfspot|
  photos[0].each do |url|
    Photo.create!(surfspot_id: surfspot.id, img_url: url)
  end
  photos.push(photos.shift.shuffle)

  i = 0
  users.each do |user|
    currentReview = reviews[0][i]
    Review.create!(author_id: user.id, surfspot_id: surfspot.id, body: currentReview)
    i +=1
  end
  reviews.push(reviews.shift.shuffle)
end
