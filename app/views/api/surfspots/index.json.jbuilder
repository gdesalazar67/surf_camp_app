@surfspots.each do |surfspot|
    json.set! surfspot.id do
        json.partial! 'api/surfspots/surfspot', surfspot: surfspot
    end
end