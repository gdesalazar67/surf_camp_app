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
