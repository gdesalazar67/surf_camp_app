json.booking do
    json.partial! 'api/bookings/booking', booking: @booking
end 

json.host do 
    json.partial! 'api/users/user', user: @booking.host
end 

json.surfspot do 
     json.partial! 'api/surfspots/surfspots_show', surfspot: @booking.surfspot
end 