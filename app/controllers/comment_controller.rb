class CommentController < ApplicationController
  def index
    render json: Comment.all
  end
  
  def create
    comment = Comment.new(comment_params)

    if (comment.save)
      render json: comment
    else
      render json: comment.errors, status: :bad_request
    end
  end

  private

  def comment_params
    params.permit(:body, :post_id)
  end
end
