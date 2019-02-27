require 'test_helper'

class PostTest < ActiveSupport::TestCase
  fixtures :all

  def setup
    @user = users(:michael)

    @post = @user.posts.build(
      :name => 'All the small things',
      :artist => 'Blink 182',
      :uri => 'spotify:track:7yCPwWs66K8Ba5lFuU2bcx',
      :album => 'Enema of the State',
      :body => 'Before Tom left',
      :likes => 3,
      :image => 'https://i.scdn.co/image/5ec4ff29311f065813234bdeee7c1364960f0c3e'
    )
  end

  test "post should be valid" do
    assert @post.valid?
  end

  test "user id should be present" do
    @post.user_id = nil;
    assert_not @post.valid?
  end

  test "uri should be present" do
    @post.uri = ""
    assert_not @post.valid?
  end

  test "most recent should be first" do
    assert_equal posts(:most_recent), Post.first
  end
end
