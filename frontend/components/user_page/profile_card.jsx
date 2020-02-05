import React from 'react';

const ProfileCard = ({first_name, photo}) => (

    <div className="userProfile-container">
        <div className='host-container'>
            {/* <div className="host-photo"><img src="https://www.flaticon.com/premium-icon/icons/svg/1993/1993177.svg" /></div> */}
            <div className="host-photo"><img src={photo} /></div>
            <div className="hosted-by-container">
                <p className="show-host">{`${first_name}`}</p>
            </div>
        </div> 
        <p className="show-host-description">
             ❤️ Surfcamper since the beginning!
        </p>  
    </div>
);

export default ProfileCard;