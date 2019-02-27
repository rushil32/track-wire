Rails.application.routes.draw do  
  resources :user, :post, :comment

  get 'sessions/new'
  get 'course/:limit/recent', to: 'course#recent'
  get '/spotify-token', to: 'spotify#auth_token'
  put '/post/like/:id', to: 'post#like'
  post '/facebook-login', to: 'user#create'
  
  get    '/login', to: 'sessions#user'
  post   '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
