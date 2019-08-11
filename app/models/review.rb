class Review < ApplicationRecord
    validates :author_id, :surfspot_id, :body, presence: true

    belongs_to :surfspot,
        primary_key: :id,
        forgein_key: :surfspot_id,
        class_name: :Surfspot 

    belongs_to :author,
        primary_key: :id,
        forgein_key: :author_id,
        class_name: :User


end
