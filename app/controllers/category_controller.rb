class CategoryController < ApplicationController
  def index
    render :json => Category.all
  end

  def show
    render :json => Category.find_by_id(params[:id])
  end

  def create
    puts category_params
    @category = Category.new(category_params)

    if @category.save
      render json: @category
    else
      render json: @category.errors, status: :bad_request
    end
  end

  def update
    @category = Category.find(params[:id])

    if @category.update_attributes(category_params)
      render json: @category
    else
      render json: @category.errors, status: :bad_request
    end
  end

  def sub_categories
    @category = Category.find_by_id(params[:id]);

    render :json => {
      "category_name": @category.name,
      "sub_categories": @category.sub_categories
    }
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy

    render json: @category
  end

  private

  def category_params
    params.permit(:name)
  end
end
