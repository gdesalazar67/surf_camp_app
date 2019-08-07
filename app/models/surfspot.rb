class Surfspot < ApplicationRecord
    validates :host_id, :title, :description, :price, :lat, :long, :max_guest, presence:true
    validates :campfire?, :pets?, :toilets?, :showers?, :wifi?, :water?, :tent?, inclusion: { in: [ true, false ] }


     belongs_to :user,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User 
        
     has_many :bookings,
         primary_key: :id,
         foreign_key: :surfspot_id,
         class_name: :Booking
         
    has_many :photos,
         primary_key: :id,
         foreign_key: :surfspot_id,
         class_name: :Photo
         
end
