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
#continent = {california: 1, asia: 2, africa: 3, australia: 4, southAmerica: 5, northAmerica: 6, europe: 7}

#california
surfspot7 =Surfspot.create!(host_id: user01.id, title: "Arroyo Burro Beach", description: "Hippy sand breaks", price: 30, lat: 34.400089, long: -119.737618, max_guest: 4, campfire?: true, pets?: true, toilets?: false, showers?: false, wifi?: false, water?: false, tent?: true, continent: 1)
surfspot8 =Surfspot.create!(host_id: user02.id, title: "Surfrider Beach", description: "Tubes for days", price: 50, lat: 33.668244, long: -118.019043, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 1)
surfspot9 =Surfspot.create!(host_id: user03.id, title: "Surfers Point at Seaside Park", description: "Burrito barrel", price: 50, lat: 34.274595, long: -119.298049, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: 1)
surfspot10 =Surfspot.create!(host_id: user04.id, title: " El Porto", description: "Pao de queijo", price: 45, lat: 33.902813, long: -118.421306, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 1)
surfspot11 =Surfspot.create!(host_id: user05.id, title: "Flat Rock Point", description: "fast barrels", price: 55, lat: 33.796817, long: -118.408333, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 1)
surfspot12 =Surfspot.create!(host_id: user06.id, title: " Trestles", description: "Howler monkeys and waves", price: 60, lat: 33.385915, long: -117.594949, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 1)
# asia
surfspot1 =Surfspot.create!(host_id: user01.id, title: "Kuta Beach", description: "Hippy sand breaks", price: 30, lat: -8.717354, long: 115.168507, max_guest: 4, campfire?: true, pets?: true, toilets?: false, showers?: false, wifi?: false, water?: false, tent?: true, continent: 2)
surfspot2 =Surfspot.create!(host_id: user02.id, title: "Uluwatu Beach", description: "Tubes for days", price: 50, lat: -8.717587, long: 115.168448, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 2)
surfspot3 =Surfspot.create!(host_id: user03.id, title: "Plengkung Beach", description: "G-land", price: 50, lat: -8.725803, long: 114.362334, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: 2)
surfspot4 =Surfspot.create!(host_id: user04.id, title: "Gods Left", description: "Pao de queijo", price: 45, lat: -9.761211,  long: 119.331933, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 2)
surfspot5 =Surfspot.create!(host_id: user05.id, title: "Desert Point", description: "fast barrels", price: 55, lat: -8.740292, long: 115.838397, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 2)
surfspot6 =Surfspot.create!(host_id: user06.id, title: "Weligama Beach", description: "Howler monkeys and waves", price: 60, lat: 5.971412, long: 80.427168, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 2)
# Africa
surfspot13 =Surfspot.create!(host_id: user05.id, title: " Supertubes at Jeffrey's Bay", description: "fast barrels", price: 55, lat: -34.062007, long: 24.925986, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 3)
surfspot14 =Surfspot.create!(host_id: user02.id, title: "Taghazout", description: "Moroccan Tubes", price: 50, lat: 30.544958, long: -9.712408, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 3)
surfspot15 =Surfspot.create!(host_id: user03.id, title: "Lanzarote Island", description: "Spanish Volcano", price: 50, lat: 29.115407, long: -13.555628, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: 3)
surfspot16 =Surfspot.create!(host_id: user04.id, title: "Anchor Point", description: "Moroccos Most Famous", price: 45, lat: 30.545538, long: -9.726462, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 3)
surfspot17 =Surfspot.create!(host_id: user05.id, title: "Boilers", description: "fast barrels", price: 55, lat: 30.625182, long: -9.878282, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 3)
surfspot18 =Surfspot.create!(host_id: user06.id, title: "Cave Rock", description: "The Bay of Plenty", price: 60, lat: -29.888704, long: 31.050555, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 3)
# australia 
surfspot19 =Surfspot.create!(host_id: user05.id, title: "Crescent Head ", description: "fast barrels", price: 55, lat: -31.197500, long: 152.974946, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 4)
surfspot20 =Surfspot.create!(host_id: user02.id, title: "Gold Coast", description: "Queensland", price: 50, lat: -28.009626, long: 153.432764, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 4)
surfspot21 =Surfspot.create!(host_id: user03.id, title: "North Narrabeen", description: "Long Reef", price: 50, lat: -33.704725, long: 151.306220, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: 4)
surfspot22 =Surfspot.create!(host_id: user04.id, title: "The Pass at Byron Bay", description: "In Abundance", price: 45, lat: -28.637341, long: 153.628109, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 4)
surfspot23 =Surfspot.create!(host_id: user05.id, title: "Noosa Heads, QLD", description: "fast barrels", price: 55, lat: -26.385391, long: 153.088162, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 4)
surfspot24 =Surfspot.create!(host_id: user06.id, title: "Prevelly Bay, WA", description: "The heart", price: 60, lat:-33.976263, long: 114.986008, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 4)
#south america
surfspot25 =Surfspot.create!(host_id: user01.id, title: "Montanita Beach", description: "Hippy sand breaks", price: 30, lat: -1.820480, long: -80.757496, max_guest: 4, campfire?: true, pets?: true, toilets?: false, showers?: false, wifi?: false, water?: false, tent?: true, continent: 5)
surfspot26 =Surfspot.create!(host_id: user02.id, title: "Santa Catarina", description: "Barra da Lagoa", price: 50, lat: -27.572586,  long: -48.426582, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 5)
surfspot27 =Surfspot.create!(host_id: user03.id, title: "Mar de Plata", description: "Burrito barrel", price: 50, lat: -38.012074, long: -57.538056, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: 5)
surfspot28 =Surfspot.create!(host_id: user04.id, title: "Sao Francisco do Sul", description: "Pao de queijo", price: 45, lat: -26.243964, long: -48.508264, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 5)
surfspot29 =Surfspot.create!(host_id: user05.id, title: "Playa Mariano", description: "Sea Gauchos", price: 55, lat: -38.083517, long: -57.538079, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 5)
surfspot30 =Surfspot.create!(host_id: user06.id, title: "Guarda do Embaú", description: "Howler monkeys and waves", price: 60, lat: -27.943001, long: -48.621460, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 5)

# north america 
surfspot31 =Surfspot.create!(host_id: user01.id, title: "Playa Doña Lala", description: "Puerto Rico", price: 30, lat: 18.336688, long: -67.253965, max_guest: 4, campfire?: true, pets?: true, toilets?: false, showers?: false, wifi?: false, water?: false, tent?: true, continent: 6)
surfspot32 =Surfspot.create!(host_id: user02.id, title: "Banzai Pipeline", description: "Oahu", price: 50, lat: 21.664896, long: -158.051727, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 6)
surfspot33 =Surfspot.create!(host_id: user03.id, title: "Frying Pan Banks", description: "Cape Fear", price: 50, lat: 33.842114, long: -77.960821, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: 6)
surfspot34 =Surfspot.create!(host_id: user04.id, title: "Cocoa Beach Pier", description: "Flo Rida", price: 45, lat: 28.367453, long: -80.602382, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 6)
surfspot35 =Surfspot.create!(host_id: user05.id, title: "Manasquane Inlet", description: "Pumping waves and fist", price: 55, lat: 40.105275, long: -74.034394, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 6)
surfspot36 =Surfspot.create!(host_id: user06.id, title: "Cabo de San Antonio", description: "Cigar rollers", price: 60, lat: 21.836572, long: -84.931693, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 6)

#Europe
surfspot37 =Surfspot.create!(host_id: user01.id, title: "Peniche", description: "Portugal", price: 30, lat: 39.357903, long: -9.399830, max_guest: 4, campfire?: true, pets?: true, toilets?: false, showers?: false, wifi?: false, water?: false, tent?: true, continent: 7)
surfspot38 =Surfspot.create!(host_id: user02.id, title: "Sagres", description: "Portuga", price: 50, lat: 37.009615, long: -8.938785, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 7)
surfspot39 =Surfspot.create!(host_id: user03.id, title: "Ericeira", description: "Portugal", price: 50, lat: 38.967722, long: -9.419542, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true, continent: 7)
surfspot40 =Surfspot.create!(host_id: user04.id, title: "Gros", description: "San Sebastian", price: 45, lat: 43.325845, long: -1.975621, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 7)
surfspot41 =Surfspot.create!(host_id: user05.id, title: "Playa de Rodiles", description: "Espania", price: 55, lat: 43.532122, long: -5.377309, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 7)
surfspot42 =Surfspot.create!(host_id: user06.id, title: "Watergate Bay", description: "Beans and Toast", price: 60, lat: 50.444161, long: -5.042634, max_guest: 3, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true, continent: 7)



# bookings
Booking.create!(user_id: user01.id, surfspot_id: surfspot1.id, check_in: 20190809, check_out: 20190812, num_guest: 4, host_id: user02.id)
Booking.create!(user_id: user02.id, surfspot_id: surfspot2.id, check_in: 20190810, check_out: 20190817, num_guest: 4, host_id: user03.id)
Booking.create!(user_id: user03.id, surfspot_id: surfspot3.id, check_in: 20190811, check_out: 20190815, num_guest: 4, host_id: user01.id)
# photos

photos = [
 
[
    "http://cdn.cnn.com/cnnnext/dam/assets/130624173927-50-surf-spots-rincon.jpg",
    "https://i.pinimg.com/originals/1f/71/84/1f71849eb74198c9394c11bb3af5989d.jpg",
    "https://i.pinimg.com/474x/a2/31/12/a23112d706daba0907afec5129cc42e4--hammocks-costa-rica.jpg",
    "https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2017/4/25/0/Original_Jeremy-Pawlowski-Costa-Rica-10.jpg.rend.hgtvcom.1280.960.suffix/1493143970475.jpeg",
    "https://b9i191t9swmfpa7o1fi3farz-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/slide-1.jpg"
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

Surfspot.all.each do |surfspot|
  photos[0].each do |url|
    Photo.create!(surfspot_id: surfspot.id, img_url: url)
  end
  photos.push(photos.shift.shuffle)
end


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