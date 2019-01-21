# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

me = User.create(
  :name => "Jeremy Lin",
  :picture => "",
  :email => "jlin@gmail.com",
  :password => "foobar",
  :password_confirmation => "foobar"
)

category = Category.create(:name => 'Tech')
Category.create(:name => 'Management')
Category.create(:name => 'Marketing')
Category.create(:name => 'Data Science')
Category.create(:name => 'Project Management')
Category.create(:name => 'Design')
Category.create(:name => 'Fashion')

sub_category = SubCategory.create(:name => 'JavaScript', :category_id => category.id)
SubCategory.create(:name => 'Python', :category_id => category.id)
SubCategory.create(:name => 'Ruby on Rails', :category_id => category.id)

course = Course.create(
  :title => 'Web performance', 
  :description => 'All the latest stuff from Google to help load pages instantly',
  :level => 2,
  :sub_category_id => sub_category.id,
  :user_id => me.id
)

course = Course.create(
  :title => 'The best from Google', 
  :description => 'Google\'s best web development resources',
  :level => 2,
  :sub_category_id => sub_category.id,
  :user_id => me.id
)

course = Course.create(
  :title => 'Back to basics', 
  :description => 'Just starting off? This is the absolute beginners guide to learning JS',
  :level => 1,
  :sub_category_id => sub_category.id,
  :user_id => me.id
)

course = Course.create(
  :title => 'Back to basics', 
  :description => 'Just starting off? This is the absolute beginners guide to learning JS',
  :level => 1,
  :sub_category_id => sub_category.id,
  :user_id => me.id
)

course = Course.create(
  :title => 'The best from Google', 
  :description => 'Google\'s best web development resources',
  :level => 2,
  :sub_category_id => sub_category.id,
  :user_id => me.id
)

course = Course.create(
  :title => 'The best from Google', 
  :description => 'Google\'s best web development resources',
  :level => 2,
  :sub_category_id => sub_category.id,
  :user_id => me.id
)

Link.create(
  :url => 'https://developers.google.com/web/fundamentals/architecture/app-shell',
  :course_id => course.id,
  :user_id => me.id
)
Link.create(
  :url => 'https://developers.google.com/web/fundamentals/performance/why-performance-matters/',
  :course_id => course.id,
  :user_id => me.id
)
Link.create(
  :url => 'https://developers.google.com/web/fundamentals/security/',
  :user_id => me.id
)
Link.create(
  :url => 'https://developers.google.com/web/fundamentals/security/csp/',
  :user_id => me.id
)




