require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(
      name: "Rushil",
      email: "test@gmail.com",
      password: "foobar",
      password_confirmation: "foobar"
    )
  end

  test "should be valid" do
    assert @user.valid?
  end

  test "name should be present" do
    @user.name = ""
    assert_not @user.valid?
  end

  test "email should be present" do
    @user.email = ""
    assert_not @user.valid?
  end

  test "email should not be too long" do
    @user.email = "a" * 244 + "@example.com"
    assert_not @user.valid?
  end

  test "email validation should accept valid email addresses" do
    valid_addresses = %w[user@example.com USER@foo.com A_US-ER@foo.bar.org
                         first.last@foo.jp alice+bob@baz.cn]
    
    valid_addresses.each do |valid_address|
      @user.email = valid_address
      assert @user.valid?, "#{valid_address.inspect} should be valid"
    end
  end

  test "email validation should reject invalid email addresses" do 
    invalid_addresses = %w[user@example,com user_at_foo.org user.name@example.
      foo@bar_baz.com foo@bar+baz.com]

    invalid_addresses.each do |invalid_address|
      @user.email = invalid_address
      assert_not @user.valid?, "#{invalid_address.inspect} should be invalid"
    end
  end

  test "email addresses should be unique" do
    duplicate_user = @user.dup
    duplicate_user.email = @user.email.upcase
    @user.save
    assert_not duplicate_user.valid?
  end

  test "email addresses should be lower cased" do
    MIXED_CASE_EMAIL = "Foo@ExAMPle.CoM"
    
    @user.email = MIXED_CASE_EMAIL
    @user.save
    
    assert_equal @user.reload.email, MIXED_CASE_EMAIL.downcase
  end

  test "password should not be blank" do
    @user.password = @user.password_confirmation = " " * 6
    assert_not @user.valid?
  end

  test "password should have a minimum length" do
    @user.password = @user.password_confirmation = "a" * 5
    assert_not @user.valid?
  end

  test "authenticated? should return false for user with nil digest" do
    assert_not @user.authenticated?('')
  end

  test "associated posts and comments should be destroyed" do
    @user.save
    post = @user.posts.create(
      :name => 'All the small things',
      :artist => 'Blink 182',
      :uri => 'spotify:track:7yCPwWs66K8Ba5lFuU2bcx',
      :album => 'Enema of the State',
      :body => 'Before Tom left',
      :likes => 3,
      :image => 'https://i.scdn.co/image/5ec4ff29311f065813234bdeee7c1364960f0c3e'
    )

    post.comments.create(
      :body => 'Throwback!',
      :user_id => @user.id
    )

    assert_difference ['Post.count', 'Comment.count'], -1 do
      @user.destroy
    end
  end
end
