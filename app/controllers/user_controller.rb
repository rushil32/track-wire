class UserController < ApplicationController
  def create
    puts user_params
    user = User.find_by_email(user_params[:email])

    if user.nil?
      user = User.new(user_params)
      user.save
      render json: user
      return
    else
      if user_params[:picture] # If user exists, update profiel pictre
        user[:picture] = user_params[:picture]
        user.save
      end

      render json: user
      return
    end
  end

  private
  def user_params
    params.permit(:name, :email, :picture)
  end
end
