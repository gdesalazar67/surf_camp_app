export const fetchGeoCode = address =>{
    return(
        $.ajax({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAl8TSkkovuXys1EcUJFeDpZVI823ubNRg`,
            method: "GET"
        })
    )
}