import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "../searchbar/search_bar_container";
import SplashCard from "./splash_card";

export default class SplashCards extends React.Component {

    constructor(prop){
        super(prop)
        this.splashInfo = [
            { continent: 'Asia', tag:"Get Dumplinged", url: "https://www.visitsingapore.com/content/dam/desktop/global/singapore-itineraries/best-of-sg-7days/gbtb-carousel-640x640.jpg"},
            { continent: 'Africa', tag: "Get Saharan", url: "https://surfberbere.com/wp-content/uploads/2016/03/anchor_point_perfect_lineup_surf_spot_morocco.jpg"},
            { continent: 'Australia', tag: "Get Fostered", url: "https://i.imgur.com/IHYW2ZP.jpg"},
            { continent: 'California', tag: "Get Stellar", url: "http://res.cloudinary.com/simpleview/image/upload/v1427350301/clients/surfcityusa/conormac4_d1d08838-cab1-44cf-a32d-7cbb83f74da0.jpg"},
            { continent: 'Europe', tag:"Get Jammy", url:"https://d20t6we9nb6rnn.cloudfront.net/carmendowntheaisle/1505399686974-640x640.jpg"},
            { continent: 'North America', tag:"Get Lit", url: "http://s13.favim.com/orig/160528/beach-life-summer-surf-Favim.com-4351793.jpeg"},
            { continent: 'South America', tag: "Get Bacan", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgG6copyseJ83aiYjqgMdvR-ss_ypCvJRl4_w0uGoPZVuKRP4Twg&s"},
        ]
    }

    render() {

        let cards = this.splashInfo.map(card =>(
            <SplashCard
                continent = {card.continent}
                tag= {card.tag}
                url= {card.url}
                key={card.continent}
            />
        ));

        return (
            <div>
                <SearchBar />
                <div className="splash-wrapper">
                <p className="search-txt2">Peep it...</p>
                    <div className="splash-grid-container">
                       {cards}
                    </div>
                </div>
            </div>
        )


    }


};