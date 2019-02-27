class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user

  default_scope -> { order(created_at: :desc) }

  validates :body, presence: true, length: { maximum: 140 }
  validates :post_id, presence: true
  validates :user_id, presence: true
end
