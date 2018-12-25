class SubCategoryController < ApplicationController
  def index
    render :json => SubCategory.all
  end

  def courses
    sub_category = SubCategory.find_by_id(params[:id])
    courses = sub_category
      .courses
      .as_json
      .map { |x| x.merge ({ "sub_category_name": sub_category.name }) }

    if sub_category
      render :json => {
        "sub_category_name": sub_category.name,
        "courses": courses
      }
    else
      render json: { "error": "Courses not found" }, status: :bad_request
    end
  end

  def create
    @sub_category = SubCategory.new(sub_category_params)

    if @sub_category.save
      render json: @sub_category
    else
      render json: @sub_category.errors, status: :bad_request
    end
  end

  def destroy
  end

  def show
  end

  private

  def sub_category_params
    params.permit(:name, :category_id)
  end
end
