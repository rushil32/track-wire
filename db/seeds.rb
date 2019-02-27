# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Post.delete_all
Comment.delete_all

user = User.create(
  :name => "Jeremy Lin",
  :picture => "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/p130x130/11866204_10153052137208202_9185614353626074331_n.jpg?_nc_cat=108&_nc_ht=scontent-lga3-1.xx&oh=d7d99ab3997de573851efed94a2b56ab&oe=5CE5C1F1",
  :email => "jlin@gmail.com",
  :password => 'foobar',
)

post = Post.create(
  :name => 'All the small things',
  :artist => 'Blink 182',
  :uri => 'spotify:track:7yCPwWs66K8Ba5lFuU2bcx',
  :album => 'Enema of the State',
  :user_id => user.id,
  :body => 'Before Tom left',
  :likes => 3,
  :image => 'https://i.scdn.co/image/5ec4ff29311f065813234bdeee7c1364960f0c3e'
)

comment = Comment.create(
  :body => 'Throwback!',
  :post_id => post.id,
  :user_id => user.id
)
