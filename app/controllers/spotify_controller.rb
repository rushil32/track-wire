class SpotifyController < ApplicationController
  @@updated_at = nil
  @@token = nil

  CLIENT_ID = "8c06c0bb526149eb93d03629faa201c6"
  CLIENT_SECRET = "6f5d5b880177479dbf9ac97994071076"
  SPOTIFY_AUTH_URL = "https://accounts.spotify.com/api/token"
  SPOTIFY_AUTH = Base64.encode64(CLIENT_ID + ':' + CLIENT_SECRET).delete("\n")

  def auth_token
    if !@@token or !@@updated_at or token_expired?
      @@token = get_token
      @@updated_at = Time.now
    end

    render json: { "token": @@token }
  end

  def token_expired?
    (Time.now - @@updated_at) > 3300
  end

  def get_token
    response = HTTParty.post(
      SPOTIFY_AUTH_URL,
      :body => {
        :grant_type => "client_credentials",
      },
      :headers => {
        "Authorization" => "Basic #{SPOTIFY_AUTH}",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    )

    response["access_token"]
  end
end
