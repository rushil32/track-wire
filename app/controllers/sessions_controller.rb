require "net/http"
require "uri"
require "json"
require "base64"
require "httparty"


class SessionsController < ApplicationController
  def user
    render json: current_user
  end

  def create
    user = User.find_by(email: params[:user][:email].downcase)
    
    if (user && user.authenticate(params[:user][:password]))
      log_in user
      puts current_user
      render json: { "logged_in": "true" }
    else
      render json: { "errors": "Incorrect username/password combination" } , status: :bad_request
    end
  end

  def destroy
    log_out if logged_in?
    render json: { "logged_in": false }
  end
end
