class Photo < ApplicationRecord
 validates :surfspot_id, :img_url, presence: true

 belongs_to :surfspot,
    primary_key: :id,
    foreign_key: :surfspot_id,
    class_name: :Surfspot


end
