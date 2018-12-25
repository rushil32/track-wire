class Category < ApplicationRecord
  has_many :sub_categories
  validates_presence_of :name
end
