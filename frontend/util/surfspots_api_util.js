export const fetchSurfspots = ()=>{
    
    return(
        $.ajax({
            url: "api/surfspots",
            method: "GET"
        })
    )
}

export const fetchSurfspot = (id)=>{
    return(
        $.ajax({
            method: "GET",
            url: `api/surfspots/${id}`
        })
    )
}
export const updateSurfspot = (surfspot)=>{
    return(
        $.ajax({
            method: "PATCH",
            url: `api/surfspots/${surfspot.id}`,
            data: {surfspot}
        })
    )
}
export const createSurfspot = (surfspot)=>{
    return(
        $.ajax({
            method: "POST",
            url: 'api/surfspots',
            data: {surfspot}
        })
    )
}
export const deleteSurfspot = (id)=>{
    return(
        $.ajax({
            method: "DELETE",
            url: `api/surfspots/${id}`,
        })
    )
}

// export const FetchSearchSurfspots = (searchParams)=>{
//     return(
//         $.ajax({
//             method: "GET",
//             url: "api/surfspots",
//             data: {searchParams},
//         })
//     )
// }






