@reviews.each do |review|
    json.set! review.id do 
        Json.partial! 'api/reviews/review', review: review 
    end
end 