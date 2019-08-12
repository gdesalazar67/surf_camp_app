json.extract! review, :id, :author_id, :surfspot_id, :body, :created_at

json.surfspot_title review.surfspot.title 

json.authorFirstName review.author.first_name