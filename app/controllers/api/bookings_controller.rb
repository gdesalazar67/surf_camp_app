class Api::BookingsController < ApplicationController

    def index
        if current_user
            @bookings = current_user.bookings
            render "api/bookings/index"
        else
            render json: ["Please Login to see bookings"], status: 404
        end
    end

    def show 
        @booking = Booking.find(params[:id])
        if @booking 
            render "api/bookings/show"
        else
            render json: ["Booking not found"], status: 404
        end 
    end 

    def create
        @booking = Booking.new(booking_params)
        if @booking.save
            render "api/bookings/show"
        else
            render json: @booking.errors.full_messages,  status: 422
        end 
    end
    
    def update
        bookings = current_user.bookings
        @booking = Booking.find(params[:id])
        render json: ["This booking is not under you user profile"] unless bookings.include?(@booking)
        
        if @booking.update(booking_params)
            render "api/bookings/show"
        else
            render json: @booking.errors.full_messages,  status: 422
        end
    end 
    
    def destroy
        bookings = current_user.bookings
        @booking = Booking.find(params[:id])
        render json: ["This booking is not under you user profile"] unless bookings.include?(@booking)
        
        if @booking.destroy 
            render "api/bookings"
        else
            render json: ["Error occured when trying to delete"],  status: 422
        end

    end 


    private

    def booking_params
        params.require(:booking).permit(:user_id, :surfspot_id, :check_in, :check_out, :num_guest, :host_id)
    end
end
