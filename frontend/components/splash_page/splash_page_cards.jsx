import React from "react";
import SearchBar from "../searchbar/search_bar_container";
import { Link } from 'react-router-dom';

export default class SplashCards extends React.Component {

    constructor(prop){
        super(prop)
        this.state = {
            one: { continent: 'Asia', url: "https://www.visitsingapore.com/content/dam/desktop/global/singapore-itineraries/best-of-sg-7days/gbtb-carousel-640x640.jpg"},
            two: { continent: 'Africa', url: "https://surfberbere.com/wp-content/uploads/2016/03/anchor_point_perfect_lineup_surf_spot_morocco.jpg"},
            three: { continent: 'Australia', url: "https://i.imgur.com/IHYW2ZP.jpg"},
            four: { continent: 'California', url: "http://res.cloudinary.com/simpleview/image/upload/v1427350301/clients/surfcityusa/conormac4_d1d08838-cab1-44cf-a32d-7cbb83f74da0.jpg"},
            five: { continent: 'Europe', url:"https://d20t6we9nb6rnn.cloudfront.net/carmendowntheaisle/1505399686974-640x640.jpg"},
            six: { continent: 'North America', url: "http://s13.favim.com/orig/160528/beach-life-summer-surf-Favim.com-4351793.jpeg"},
            seven: { continent: 'South America', url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgG6copyseJ83aiYjqgMdvR-ss_ypCvJRl4_w0uGoPZVuKRP4Twg&s"},
        }
    }

    render() {

        
        return (
            <div>
                <SearchBar />
                <p className="search-txt2">Peep it...</p>
                <div className="splash-wrapper">
                    <div className="splash-grid-container">
                        <div className="card-container">
                            <div className="card">
                                <Link to="/" className="link">
                                    <div className="image-container">
                                        <img src={this.state.one.url}/>
                                        <div className="word-wrapper">
                                            <div className="location-box">{this.state.one.continent}</div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="caption-container">
                                    <h3 >
                                        <Link to='/'>{this.state.one.continent}</Link>
                                    </h3>
                                <div className="subtext">Dumpling rolls</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container">
                            <div className="card">
                                <Link to="/" >
                                    <div className="image-container">
                                        <img src={this.state.seven.url}/>
                                        <div className="word-wrapper">
                                            <div className="location-box">{this.state.seven.continent}</div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="caption-container">
                                    <h3 >
                                        <Link to="/">{this.state.seven.continent}</Link>
                                    </h3>
                                <div className="subtext">Dumpling rolls</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )


    }


};