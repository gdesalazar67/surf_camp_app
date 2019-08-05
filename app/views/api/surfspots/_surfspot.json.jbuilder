json.extract! surfspot, :id, :host_id, :title, :description, :price, :lat, :long, :max_guest, :campfire?, :pets?, :toilets?, :showers?, :wifi?, :water?, :tent?

json.host do 
    json.partial! "api/users/user", user: @surfspot.user
end