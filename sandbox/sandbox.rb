require 'open-uri'
require 'nokogiri'


doc = Nokogiri::HTML(open('https://www.shopkeep.com'))
puts doc.css('meta')