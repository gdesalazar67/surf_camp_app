import React from "react";
import SearchBar from "../searchbar/search_bar_container";
import { Link } from 'react-router-dom';

export default class SplashCards extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            one: { continent: 'Asia', url: "http://31.media.tumblr.com/tumblr_m5zuviZnsG1r7wyeio1_500.png"},
            two: { continent: 'Africa', url: "https://surfberbere.com/wp-content/uploads/2016/03/anchor_point_perfect_lineup_surf_spot_morocco.jpg"},
            three: { continent: 'Australia', url: "https://www.ytravelblog.com/wp-content/uploads/2014/08/IMG_7455.jpg"},
            four: { continent: 'California', url: "https://wavehuggers.com/wp-content/uploads/2016/12/best-surf-spots-socal-malibu.jpg"},
            five: { continent: 'Europe', url: "https://secure.i.telegraph.co.uk/multimedia/archive/03484/potd-wave_3484959k.jpg"},
            six: { continent: 'North America', url: "http://revistasextosentido.net/wp-content/uploads/2019/10/A-Month-Trip-of-Surf-Holidays-in-South-East-Asia.jpg"},
            seven: { continent: 'South America', url: "https://qtxasset.com/styles/breakpoint_md_448px_w/s3/2017-04/riodejaneirogetty.jpg?8UfYMDYdaJ6xyh3.Z8OT9K6yk2pg.lgw&itok=oEfyl1G4"},
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
                                        <img src={this.state.two.url}/>
                                        <div className="word-wrapper">
                                            <div className="location-box">{this.state.one.continent}</div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="caption-container">
                                    <h3 >
                                        <Link>{this.state.one.continent}</Link>
                                    </h3>
                                <div className="subtext">Dumpling rolls</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container"></div>
                        <div className="card-container"></div>
                        <div className="card-container"></div>
                        <div className="card-container"></div>
                        <div className="card-container"></div>
                        <div className="card-container"></div>
                        <div className="card-container"></div>
                        <div className="card-container"></div>
                        <div className="card-container"></div>
                        <div className="card-container"></div>
                        <div className="card-container"></div>
                    </div>
                </div>
            </div>
        )


    }


};