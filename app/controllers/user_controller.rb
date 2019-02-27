class UserController < ApplicationController

  def create
    user = User.new(user_params)
    debugger
    if user.save
      log_in user
      render json: user
    else
      render json: { "errors": user.errors }, status: :bad_request
    end
  end

  def show
    render :json => User.find_by_id(params[:id])
  end

  def update
    user = User.find(params[:id])

    if (user.update_attributes(user_params))
      render json: user
    else
      render json: { "errors": user.errors }, status: :bad_request
    end
  end

  private

    def user_params
      params
        .require(:user)
        .permit(:name, :email, :picture, :password, :password_confirmation)
    end
end
