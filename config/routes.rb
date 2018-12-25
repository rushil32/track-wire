Rails.application.routes.draw do
  root 'category#index'

  get 'category/:id/sub_categories', to: 'category#sub_categories'
  get 'sub_category/:id/courses', to: 'sub_category#courses'
  
  resources :category, :sub_category, :course, :link, :user

  get 'course/:limit/recent', to: 'course#recent'
end
