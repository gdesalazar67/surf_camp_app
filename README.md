# SurfCamp

A responsive single-page app clone of HipCamp where you can browse campsites at beautiful surf spots.

The technologies used to create SurfCamp are React, Redux, PostgresSQL, Ruby on Rails, CSS, JS, and HTML5.

## Features

### User Auth

* Users are able to create accounts, login and logout using BCrypt authentication system and rails backend. Demo user provided to navigate site.

```javascript
class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception 

    helper_method :logged_in?, :current_user
    private

    def current_user
        @current_user = User.find_by_session_token(session[:session_token])
        if @current_user
            return @current_user
        else 
            return nil 
        end 

    end

    def logged_in?
        !!current_user
    end

    def login(user)
        
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def ensure_logged_in
        unless logged_in?
            render json: { base: ['invalid credentials'] }, status: 401 
        end 
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil 
        @current_user = nil
    end

end

```

### Surfspot bookings
  
* Interactive bookings calendar, That adds reservations to the specific surfspot and logged in user profile. Verifies User and opens log in modal if User is not signed in when attempting to reserve surfspot
![surfspot calander](https://user-images.githubusercontent.com/48927999/63971495-99641180-ca74-11e9-9042-57f0d3720240.png)
```javascript
class BookingForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            num_guest: 1,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
    }
    
    componentWillUnmount() {
        this.props.removeErrors()
    }
     
    handleSubmit(event){     
        event.preventDefault();

        if(!this.props.currentUserId){
            this.props.openModal('login');
        }else{
            
            let booking = merge({},this.state);
            booking.user_id = this.props.currentUserId;
            booking.surfspot_id = this.props.surfspot.id;
            booking.host_id = this.props.surfspot.host_id;
            
            this.props.createBooking(booking);
        }
    }

    handleDayClick(inOut){
        return day=>{
            let selectedDay = format(day, "YYYY-MM-DD");          
            this.setState({[inOut]: selectedDay});     
        };
    }

    handleNumGuest(plusMinus) {
        return event => {
            if ((plusMinus === '+') && (this.state.num_guest + 1 <= this.props.surfspot.max_guest)) {
                this.setState({ num_guest: (this.state.num_guest += 1) });
            } else if ((plusMinus === '-') && (this.state.num_guest - 1 >= 1)) {
                this.setState({ num_guest: (this.state.num_guest -= 1) });
            }
        }
    }

```

### Surfspot show page

* Each surfspot's show page contains: 
* A photo carousel of the campsite and surrounding location.
* Bookings Calendar
* Campsite info
* List all reviews and allows User to add Review 

![surfspot show page](https://user-images.githubusercontent.com/48927999/63622694-7a253a00-c5c5-11e9-9d26-019d941381ad.png)
```javascript
export const fetchSurfspots = ()=>dispatch =>{
    
    return(SurfSpotsAPIUtil.fetchSurfspots()
            .then(surfspots => dispatch(receiveSurfspots(surfspots)
        ), err =>(
            dispatch(receiveErrors(err.responseJson))
        )))
};

export const fetchSurfspot = (id)=> dispatch =>(
    SurfSpotsAPIUtil.fetchSurfspot(id)
        .then(surfspot=>(dispatch(receiveSurfspot(surfspot))
        ), err =>(
            dispatch(receiveErrors(err.responseJson))
        ))
);

export const deleteSurfspot = (id)=> dispatch=>(
    SurfSpotsAPIUtil.deleteSurfspot(id).then(surfspot=>
        (dispatch(removeSurfspot(id))
        ), err =>(
            dispatch(receiveErrors(err.responseJson))
        ))
)

export const updateSurfspot = surfspot => dispatch=>(
    SurfSpotsAPIUtil.updateSurfspot(surfspot).then(surfspot=>
        (dispatch(receiveSurfspot(surfspot))
        ), err =>(
           dispatch(receiveErrors(err.responseJson)) 
        ))
)

```

 
# Future plans
* Add search bar function and Google maps


