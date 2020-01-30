import React from 'react';


const infoWindowCard = (props) => {
    const {id, photos, title, description, price} = props.surfspot;

        return (
            <div className="map surfspot card-container" style={{width: "150px"}}>
                <div className="surfspot card" style={{ width: "150px" }}>
                    <div className="surfspot link" to={`/surfspots/${id}`}>
                        <div className="surfspot image-container">
                            <img src={photos[2]} className="photo" />
                        </div>
                    </div>
                    <div className="surfspot caption-container">
                        <div to={`/surfspots/${id}`}>
                            <div className="title-description-container">
                                <p className="surfspot-title">{`${title}`}</p>
                                <p className="surfspot-description">{`${description}`}</p>
                            </div>
                            <div className="price-info">
                                <p className="surfspot-price">${`${price}`}/night</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};
export default infoWindowCard