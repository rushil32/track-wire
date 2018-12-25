require 'open-uri'
require 'nokogiri'

class LinkController < ApplicationController
  def get_meta(doc, item)
    if doc.at_css("meta[property='og:#{item}']") 
      return doc
        .at_css("meta[property='og:#{item}']")["content"]
    
    elsif doc.at_css("meta[name='twitter:#{item}']")
      return doc
        .at_css("meta[name='twitter:#{item}']")["content"]
    
    elsif doc.at_css("meta[name='#{item}']")
      return doc
        .at_css("meta[name='#{item}']")["content"]
    
    else
      return ''
    end
  end
  
  def create
    url = link_params['url']
    link = Link.new(link_params)

    begin
      doc = Nokogiri::HTML(open(url))

      link['title'] = get_meta(doc, 'title')
      link['description'] = get_meta(doc, 'description')
      link['image'] = get_meta(doc, 'image')
      
    rescue
      render json: { error: 'Invalid URL' }, status: :bad_request
      return false
    end

    if link.save
      render :json => link
    else
      render json: link.errors, status: :bad_request
    end
  end

  private
  def link_params
    params.permit(:url, :course_id, :user_id, :paid)
  end
end
