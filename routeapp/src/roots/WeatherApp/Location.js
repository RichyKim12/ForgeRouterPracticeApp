import React from "react";

function Location({name,lat,lon,country}){
    return (
        <div>
            <h2>{name}</h2>
            <h2>{lat}, {lon}</h2>
            <h2>{country}</h2>
        </div>
    )
}

export default Location;