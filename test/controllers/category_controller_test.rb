require 'test_helper'

class CategoryControllerTest < ActionDispatch::IntegrationTest
  test "should list all categories" do
    get "/category"
    assert_response :success
  end

  test "should get a specific category" do
    get "/category/1"
    assert_response :success
  end
end
