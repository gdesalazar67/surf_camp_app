json.extract! surfspot, :id, :host_id, :title, :description, :price, :lat, :long, :max_guest

json.photos surfspot.photos.pluck(:img_url)


json.campfire surfspot.campfire?
json.pets surfspot.pets?
json.toilets surfspot.toilets?
json.showers surfspot.showers?
json.wifi surfspot.wifi?
json.water surfspot.water?
json.tent surfspot.tent?


json.host do 
    json.partial! "api/users/user", user: surfspot.user
end