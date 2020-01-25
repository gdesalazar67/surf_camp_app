import React, { Component } from 'react';

import Slider from 'react-slick';

class PhotoSlideShow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let photos = ["http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/0v/ny/p00vnyfn.jpg", 
            "https://i2.wp.com/www.surfer.com/wp-content/uploads/2018/12/srfp-180500-bocas-021.jpg?resize=2000%2C1333&ssl=1"];

       if (this.props.photos.length !== 0) {
            photos = this.props.photos;
        }
        
// const settings came from react-slick
        const settings = {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: true,
            variableWidth: false,
            className: 'slider',
            adaptiveHeigth: false,
            responsive: [
                {
                    breakpoint: 809,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        variableWidth: false,
                    }
                },
            ]
        };


        return (
            <section className="surfspot_photo">
                <Slider {...settings}>

                    {
                        photos.map((photo, id) => {
                            return (
                                <div key={id}>
                                    <img src={photo} alt="" />
                                </div>
                            )
                        })
                    }

                </Slider>
            </section>
        )
    }
};

export default PhotoSlideShow;