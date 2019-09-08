export const fetchGeoCode = address =>{
    return(
        $.ajax({
            url:"https://maps.googleapis.com/maps/api/geocode/json?address=43 valley view ave randolph, nj&key=AIzaSyAl8TSkkovuXys1EcUJFeDpZVI823ubNRg",
            method: "GET"
        })
    )
}