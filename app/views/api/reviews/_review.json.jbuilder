json.extract! review, :id, :author_id, :surfspot_id, :body, :created_at

surfspot = review.surfspot
json.surfspot_title surfspot.title 
json.surfspot_photos surfspot.photos.pluck(:img_url)

json.authorFirstName review.author.first_name

