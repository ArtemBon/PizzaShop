class CreateOrders < ActiveRecord::Migration[5.2]
	def change

		create_table :orders do |t|
			t.text :orders_input, :name, :phone, :address

			t.timestamps
		end

	end
end
