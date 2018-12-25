class User < ApplicationRecord
  has_many :courses
  has_many :links
  validates_uniqueness_of :email
end
