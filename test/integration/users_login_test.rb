require 'test_helper'

class UsersLoginTest < ActionDispatch::IntegrationTest
  fixtures :all

  def setup
    @user = users(:michael)
  end

  test "login with invalid info" do
    post '/login', params: { session: { email: "", password: "" } }
    json_response = JSON.parse(response.body)

    assert json_response.key? "errors"
    assert_equal "Incorrect username/password combination", json_response["errors"]
  end

  test "login with valid info" do
    post '/login', params: { session: { email: "michael@dundermifflin.com", password: "password" } }
    json_response = JSON.parse(response.body)

    assert json_response.key?("logged_in")
    assert_equal "true", json_response["logged_in"], "Logged in set to true"
    assert response.cookies.key?("user_id"), "User ID cookie set"
    assert response.cookies.key?("remember_token"), "Remember cookie set"
  end

  test "log a user out" do
    delete '/logout'
    json_response = JSON.parse(response.body)

    assert json_response.key?("logged_in")
    assert_equal false, json_response["logged_in"], "Logged in set to false"
    assert_equal nil, response.cookies["user_id"], "User ID cookie removed"
    assert_equal nil, response.cookies["remember_token"], "Remember cookie removed"
  end
end
