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

user01 = User.create!(first_name: 'demo', last_name: 'demo', email: 'demo1@gmail.com', zip_code: 11103, password: "1234567")
user02 = User.create!(first_name: 'Marina', last_name: 'demo', email: 'marina1@gmail.com', zip_code: 90001, password: "1234567")
user03 = User.create!(first_name: 'Luke', last_name: 'demo', email: 'luke1@gmail.com', zip_code: 90001, password: "1234567")
user04 = User.create!(first_name: 'Marc', last_name: 'demo', email: 'marc1@gmail.com', zip_code: 90050, password: "1234567")
user05 = User.create!(first_name: 'Kuna', last_name: 'demo', email: 'kuna1@gmail.com', zip_code: 92014, password: "1234567")

# surfspots
surfspot1 =Surfspot.create!(host_id: user02.id, title: "Montanita Beach", description: "Hippy sand breaks", price: 30, lat: -1.8259639, long: -80.7580102, max_guest: 4, campfire?: true, pets?: true, toilets?: false, showers?: false, wifi?: false, water?: false, tent?: true)
surfspot2 =Surfspot.create!(host_id: user01.id, title: "Surfrider Beach", description: "Tubes for days", price: 50, lat: 33.668244, long: -118.019043, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true)
surfspot3 =Surfspot.create!(host_id: user03.id, title: "Puerto Escondido", description: "Burrito barrel", price: 50, lat: 15.8649046, long: -97.0867278, max_guest: 6, campfire?: true, pets?: true, toilets?: true, showers?: true, wifi?: true, water?: true, tent?: true)
# Surfspot.create!(host_id: 1, title: "Surfrider Beach", description: "Tubes for days", price: 50, lat: 33.668244, long: -118.019043, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true)
# Surfspot.create!(host_id: 1, title: "Surfrider Beach", description: "Tubes for days", price: 50, lat: 33.668244, long: -118.019043, max_guest: 4, campfire?: true, pets?: true, toilets?: true, showers?: false, wifi?: true, water?: true, tent?: true)
# bookings
Booking.create!(user_id: user01.id, surfspot_id: surfspot1.id, check_in: 20190809, check_out: 20190812, num_guest: 4, host_id: user02.id)
Booking.create!(user_id: user02.id, surfspot_id: surfspot2.id, check_in: 20190810, check_out: 20190817, num_guest: 4, host_id: user03.id)
Booking.create!(user_id: user03.id, surfspot_id: surfspot3.id, check_in: 20190811, check_out: 20190815, num_guest: 4, host_id: user01.id)
