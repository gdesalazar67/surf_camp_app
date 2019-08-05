class Booking < ApplicationRecord

    validates :user_id, :surfspot_id, :check_in, :check_out, :num_guest, :host_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :surfspot,
    primary_key: :id,
    foreign_key: :surfspot_id,
    class_name: :Surfspot

    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User


end
