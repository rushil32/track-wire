class PostController < ApplicationController
  def index
    render json: Post.all
  end

  def show
    render json: Post.find_by_id(params[:id])
  end

  def create
    post = Post.new(post_params)
    
    if (post.save)
      render json: post
    else
      render json: post.errors, status: :bad_request
    end
  end

  def like
    post = Post.find_by_id(params[:id])
    post.likes += 1
    
    if (post.save)
      render json: post
    else
      render json: post.errors, status: :bad_request
    end
  end

  private

  def post_params
    params.permit(:name, :artist, :album, :image, :user_id, :uri)
  end
end
