require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base
end

class Order < ActiveRecord::Base
end

get '/' do
	@products = Product.all
	erb :index			
end

get '/about' do
	erb :about			
end

get '/admin' do
	@orders = Order.order 'created_at DESC'
	erb :admin
end

post '/cart' do
	@orders_input = params[:orders_input]
	@items = parse_orders_input @orders_input

	@items.each do |item|
		# id, cnt
		item[0] = Product.find item[0]
	end

	if @items.length == 0
		return erb :cart_is_empty
	end

	erb :cart
end

post '/order' do
	o = Order.new params[:order]
	o.save

	erb :order_placed
end


def parse_orders_input orders_input

	s1 = orders_input.split(/,/)

	arr = []

	s1.each do |x|

		s2 = x.split(/\=/)

		s3 = s2[0].split(/_/)

		id = s3[1]
		cnt = s2[1]

		arr2 = [id, cnt]

		arr << arr2

	end

	arr

end
