class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_creds(
            params[:user][:email],
             params[:user][:password]
            )

        if @user
            login(@user)
            render "api/users/show"  
        else
            render json: ["invalid email/password combination"], status: 401
        end   
    end

    def destroy
        @user = current_user
        if @user 
            logout
            render "api/session"
        else
            render json: ["You are not signed in"], status: 401
        end
    end
    

end

