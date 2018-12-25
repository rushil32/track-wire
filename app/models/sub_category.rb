class SubCategory < ApplicationRecord
  belongs_to :category
  has_and_belongs_to_many :users
  has_many :courses
end
