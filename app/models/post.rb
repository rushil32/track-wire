class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  default_scope -> { order(created_at: :desc) }

  validates :name, presence: true
  validates :user_id, presence: true
  validates :uri, presence: true
end
