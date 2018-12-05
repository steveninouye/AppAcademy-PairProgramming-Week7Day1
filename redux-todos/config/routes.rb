Rails.application.routes.draw do
  namespace :api , defaults: {format: :json} do
    resources :steps, only: [:create, :destroy, :update]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:index, :create, :destroy, :update]
  end

  root to: 'static_pages#root'
end
