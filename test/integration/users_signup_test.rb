require 'test_helper'

class UsersSignupTest < ActionDispatch::IntegrationTest

  test "invalid signup information" do
    assert_no_difference 'User.count' do
      post '/user', params: {
        user: {
          name: "",
          email: "user@invalid",
          password: "foo",
          password_confirmation: "bar"
        }
      }
    end
  end

  test "valid signup information" do
    assert_difference 'User.count', 1 do
      post '/user', params: {
        user: {
          name: "Test User",
          email: "user@test.com",
          password: "testpassword",
          password_confirmation: "testpassword"
        }
      }
    end
  end
end
