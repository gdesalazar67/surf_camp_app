 
@surfspots.each do |surfspot|
    json.set! surfspot.id do
        json.partial! 'api/surfspots/surfspots_show', surfspot: surfspot
    end
end