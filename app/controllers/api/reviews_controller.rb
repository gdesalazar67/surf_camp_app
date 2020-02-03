class Api::ReviewsController < ApplicationController

    def create

        @review = Review.new(review_params)

        if @review.save
            render "api/reviews/show"
        else  
            render json: @review.errors.full_messages, status: 401
        end

    end 

    def update
        @review = Review.find(params[:id])
        return render json: ["You are not the author of this review"] unless @review.author_id == current_user.id

        if @review.update(review_params)
            render "api/bookings/show"
        else  
            render json: @review.errors.full_messages, status: 401
        end

    end 

    def destroy 
        @review = Review.find(params[:id])
        if @review.destroy 
            render "api/reviews/show"
        else 
            render json: ["Error occured when trying to delete"],  status: 422
        end

    end 

    def index
        
        if params["user"]
                @reviews = current_user.reviews
                render "api/reviews/index"
        else
            @reviews = Surfspot.find(params[:surfspot_id]).reviews
            render "api/reviews/index"
        end
    end 

    def show
        @review = Review.find(params[:id])
        render = "api/reviews/show"
    end 

    private

    def review_params
        params.require(:review).permit(:author_id, :surfspot_id, :body)
    end 

end
