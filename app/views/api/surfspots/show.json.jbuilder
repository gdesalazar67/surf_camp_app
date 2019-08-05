 
json.partial! 'api/surfspots/surfspot', surfspot: @surfspot


json.host do 

    json.extract! user: @surfspot.user
end