require 'jwt'

class Auth
  ALGORITHM = "HS256"
  SECRET = SecureRandom.urlsafe_base64

  def self.issue(payload)
    JWT.encode(payload, SECRET, ALGORITHM)
  end

  def self.decode(token)
    JWT.decode token, SECRET, true, { algorithm: ALGORITHM }
  end

end