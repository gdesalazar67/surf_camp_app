class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
    end 

    private 

    def user_params
        params.require(:user).permit(:email, :password, :zip_code, :first_name, :last_name, :photo)
    end

end


