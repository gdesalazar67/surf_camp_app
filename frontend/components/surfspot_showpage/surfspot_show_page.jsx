import React from "react";

 export default class SurfSpotShow extends React.Component{
        compenantDidMount(){
            
            this.props.fetchSurfspot(this.props.surfspot.id)
        }

        render(){
            
           return (
               <div className="show-listing">
                   <img src="http://cdn.cnn.com/cnnnext/dam/assets/130624173927-50-surf-spots-rincon.jpg" className="show-photo" />
                   <div className="show-info-container">
                        <p className="show-title">{`${this.props.surfspot.title}`}</p>
                        <p className="show-description">{`${this.props.surfspot.description}`}</p>   
                         <div className='host-container'>
                              <p className="show-host">Hosted by {`${this.props.surfspot.host_id}`}</p>   
                           <p className="show-host">
                               These small, perfectly formed crests where Johnny Fain and Miki Dora surfed 
                               in the 1950s are a great place to grab a longboard
                                and surf Beach Boys-style. The place is 
                                absolutely rammed for exactly this reason.
                            </p>   
                         </div> 
                        
                   </div>

               </div>
            )
        }
 }
