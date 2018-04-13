import React from 'react';


export default function House(props) {
    const { houseData, rmvHouse } = props;
    // console.log('====================================');
    // console.log( houseData );
    // console.log('====================================');
    
    return(
        <div className="house-listing">
            <p>Property Name: { houseData.propertyname }</p>           
            <p>Address: { houseData.address }</p>           
            <p>City: { houseData.city }</p>           
            <p>State: { houseData.state }</p>           
            <p>Zipcode: { houseData.zip }</p>
            <div>
                <button onClick={ () => rmvHouse( houseData.houseid ) }>X</button>
            </div>           
        </div>
    )
}