import React from "react";
import BookingsForm from '../bookings_form/booking_form_container';
import PhotoSlideShow from "../photo_slider/photo_slider";
// import {withRouter} from "react-router-dom";
import ReviewsIndex from "../reviews/reviews_index_container";
import GoogleMap from "../map/map_container";

export default class SurfSpotShow extends React.Component{

    constructor(props){
        super(props)
        
    }

    componentDidMount(){ 
        this.props.fetchSurfspot(this.props.match.params.id);
        this.props.fetchReviews(this.props.match.params.id);
    }

     renderTent() {
         const type = this.props.surfspot.tent;
         
         if (type) {
             return (
                 <div className="icon-container">
                     <div className="icon"> 
                        <img src="https://image.flaticon.com/icons/svg/1992/1992373.svg"/>
                     </div>
                        <p className="icon-text">Tent onsite</p>
                 </div>
             )
         } else {
             return (
                 <div className="icon-container">
                     <div className="icon"> 
                        <img src="https://image.flaticon.com/icons/svg/1992/1992373.svg" />
                     </div>
                        <p className="icon-text">Bring your own tents</p>
                 </div>
             )
         }
     }

     renderPet(){
         const type = this.props.surfspot.pets;

         if (type) {
             return (
                <div className="icon-container">
                    <div className="icon">
                       <img src="https://www.flaticon.com/premium-icon/icons/svg/1351/1351384.svg" />
                    </div> 
                       <p className="icon-text">Pets welcomed</p>
                </div>
             )
         }
     }
     renderGuest(){
         return (
         <div className="icon-container">
            <div className="icon"> 
                <img src="https://image.flaticon.com/icons/svg/502/502467.svg" />
             </div>
                <p className="icon-text">UP to {`${this.props.surfspot.max_guest}`} guests</p>
         </div>
         )
     }

     renderShowers(){
         const type = this.props.surfspot.showers;

         if (type) {
             return (
                 <div className="icon-container">
                     <div className="icon">
                        <img src="https://image.flaticon.com/icons/svg/1691/1691490.svg" />
                     </div>
                        <p className="icon-text">Showers onsite</p>
                 </div>
             )
         }
        }
        renderWater(){
            const type = this.props.surfspot.water;    
            if (type) {
                return (
                    <div className="icon-container">
                        <div className="icon">
                            <img src="https://www.flaticon.com/premium-icon/icons/svg/1945/1945234.svg" />
                        </div>
                            <p className="icon-text">Drinking water onsite</p>
                    </div>
                )
            }
        }
         renderToilets(){
             const type = this.props.surfspot.toilets;
             if (type) {
                 return (
                     <div className="icon-container">
                        <div className="icon">
                            <img src="https://www.flaticon.com/premium-icon/icons/svg/1945/1945302.svg" />
                        </div>
                            <p className="icon-text">Bathroom onsite</p>
                     </div>
                 )
             }
         }

         renderWifi(){
             const type = this.props.surfspot.wifi;
             if (type) {
                 return (
                     <div className="icon-container">
                        <div className="icon">
                         <img src="https://image.flaticon.com/icons/svg/149/149195.svg"/>
                        </div>
                         <p className="icon-text">Wifi</p>
                     </div>
                 )
             }
         }







     



        render(){
            
            if(!this.props.surfspot || !this.props.surfspot.host){
                return(<div></div>);
            }

            let {surfspot} = this.props;
            let {host} = surfspot;
           return (
               <div className="show-map-container">
                <div className="show-listing">
                    <div className="photo-slider">
                        <PhotoSlideShow photos={surfspot.photos}/>
                    </div>
                    <div className="info-calendar-container">
                    <div className="show-info-container">
                            <div className="show-title-container">
                                <p className="show-title">{`${surfspot.title}`}</p>
                                <p className="show-description">{`${surfspot.description}`}</p>   
                            </div>
                            <div className='host-container'>
                                <div className="host-photo"><img src={host.photo}/></div>
                                <div className="hosted-by-container">
                                    <p className="hosted-by">Hosted by</p>
                                    <p className="show-host">{`${host.first_name}`}</p>   
                                </div>
                            </div> 
                            <p className="show-host-description">
                                These small, perfectly formed crests where Johnny Fain and Miki Dora surfed 
                                in the 1950s are a great place to grab a longboard
                                and surf Beach Boys-style. The place is 
                                absolutely rammed for exactly this reason.
                            </p>   
                        <div className="info-cards-container">
                            <div className="info-container">
                                <p className="icon-title">Campsite area</p>
                                {this.renderTent()}
                                {this.renderGuest()}
                            </div>
                            <div className="info-container">
                                <p className="icon-title">Essentials</p>
                                {this.renderPet()}
                                {this.renderWifi()}
                                {this.renderWater()}
                                {this.renderShowers()}
                                {this.renderToilets()}
                            </div>
                        </div>
                        <div className="show-details">
                            <p className="title">Details</p>
                            <div className="details-container">
                                <p className="hosted-by">Check in:<span> After 3PM</span></p>
                                <p className="hosted-by">Check out:<span> Before 11AM</span></p>
                                <p className="hosted-by">Cancellation policy<span> Super Flexible</span></p>
                            </div>
                            <div className="details-container">
                                <p className="hosted-by">On arrival:<span> Go straight to camp</span></p>
                                <p className="hosted-by">Minimum nights:<span> 1 night</span></p>
                                <p className="hosted-by">Accepts bookings:<span> 12 months out</span></p>
                            </div>
                        </div>                    
                        <ReviewsIndex/>
                    </div>
                    </div>
                    <BookingsForm/>
                </div>
                <GoogleMap/>
               </div>
            )
        }
    }

    