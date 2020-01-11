class Api::SurfspotsController < ApplicationController

    def create
        @surfspot = Surfspot.new(surfspot_params)
        if @surfspot.save
            render "api/surfspots/show"
        else 
            render json: @surfspot.errors.full_messages, status: 422
        end
    end

    def index
        @surfspots = Surfspot.searchFor(params["searchParams"])
    end

    def update
        @surfspot = Surfspot.find(params[:id])
        if @surfspot.update(surfspot_params)
            render "api/surfspots/show"
        else 
            render json: @surfspot.errors.full_messages, status: 422
        end    
    end

    def destroy
        @surfspot = Surfspot.find(params[:id])
        if @surfspot.destroy
            render "api/surfspots/index"
        else 
            render json: @surfspot.errors.full_messages, status: 422
        end 
    end

    def show
        @surfspot = Surfspot.find(params[:id])
        render "api/surfspots/show"
    end

    private 

    # keys = {:host_id, :title, :description, :price, :lat, :long,
    #         :max_guest, :campfire?, :pets?, :toilets? :showers?,    
    #         :wifi?, :water?, :tent?}  
    def surfspot_params
        params.permit(:surfspot).require(:host_id, :title, :description, :price, :lat, :long,
            :max_guest, :campfire?, :pets?, :toilets?, :showers?,    
            :wifi?, :water?, :tent?)
    end

end
