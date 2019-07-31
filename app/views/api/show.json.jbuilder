json.set! id: @user.id do 
    json.exract! @user, :id, :first_name, :last_name, :email
end