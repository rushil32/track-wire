module SessionsHelper
  def set_permanent_cookie(name, value)
    response.set_cookie(name, 
      value: value, 
      expires: 20.years.from_now
    )
  end

  def logged_in?
    !current_user.nil?
  end

  def log_in(user)
    user.remember
    token = Auth.issue({ user_id: user.id })

    set_permanent_cookie("user_id", token)
    set_permanent_cookie("remember_token", user.remember_token)
  end

  def current_user
    if response.cookies["user_id"] && response.cookies["remember_token"]
      user_id = Auth.decode(response.cookies["user_id"])[0]["user_id"]
      @current_user ||= User.find_by(id: user_id)
    else
      nil
    end
  end

  def log_out
    response.delete_cookie("user_id")
    response.delete_cookie("remember_token")
    current_user.forget
  end
end
