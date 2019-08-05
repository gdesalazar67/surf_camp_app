class User < ApplicationRecord
    validates :first_name, :last_name, :email, :session_token, :password_digest, :zip_code, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :surfspots

    # has_many :reviews,
    #     primary_key: :id,
    #     foreign_key: :author_id,
    #     class_name: :Review  

    has_many :bookings,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Booking

    has_many :booked_spots,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :Booking

    def self.find_by_creds(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        else  
            return nil 
        end 
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end 


end
