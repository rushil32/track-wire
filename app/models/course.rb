class Course < ApplicationRecord
  has_many :links
  belongs_to :sub_category
  belongs_to :user

  scope :with_sub_category, -> { 
    joins(:sub_category)
      .select('courses.*, sub_categories.name as sub_category_name')
      .order("created_at DESC") 
  }
end
