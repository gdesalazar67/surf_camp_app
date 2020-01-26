import React from 'react';

export default () => {
    return (
        <footer>
            <div className='host-container'>
                <div className="hosted-by-container">
                    <p className="hosted-by">Surfcamp is everywhere you want to surf.</p>
                    <p className="review-date">
                        Discover unique surf outing experiences on beaches, nature preserves, farms,and public campgrounds across the world. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more.
                    </p>
                </div>
            </div>
            <div className="link-container">
                <div className="icon-container">
                    <a href="https://github.com/gdesalazar67/surf_camp_app" target="_blank">
                        <img className="icon" src={window.githubURL}/>
                    </a>
                </div>
                <div className="icon-container">
                    <a href="https://linkedin.com/in/galo-desalazar-44092b41" target="_blank">
                        <img className="icon" src={window.linkedinURL}/>
                    </a>
                </div>
                <div className="icon-container">
                    <a href="https://gdesalazar67.github.io/gdesalazar67/" target="_blank">
                        <img className="icon" src={globelogoURL}/>
                    </a>
                </div>
            </div>
            <div className="promotion">
                Surfcamp is created with ❤️ and hope for our oceans and mother earth
            </div>
        </footer>
    );
};