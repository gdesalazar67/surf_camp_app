json.extract! booking, :id, :user_id, :surfspot_id, :check_in, :check_out, :num_guest, :host_id

surfspot = booking.surfspot
json.title surfspot.title
json.description surfspot.description
json.host booking.host.first_name
