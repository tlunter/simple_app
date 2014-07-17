require 'sinatra'

class App < Sinatra::Base
  routes = ['/', '/cool_page']

  routes.each do |page|
    get page do
      erb ''
    end
  end
end

run App
