json.extract! review, :id, :author_id, :surfspot_id, :body

json.surfspot_title review.surfspot.title 

json.partial! "api/users/user", user: review.author