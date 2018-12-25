class CourseController < ApplicationController
  def index
  end

  def show
    render :json => Course.find_by_id(params[:id])
  end

  def create
    @course = Course.new(course_params)

    if @course.save
      render :json => @course
    else
      render json: @category.errors, status: :bad_request
    end
  end

  def recent
    render :json => Course.with_sub_category.take(params[:limit])
  end

  def delete
  end

  def course_params
    params.permit(:title, :level, :description, :sub_category_id, :user_id)
  end
end
