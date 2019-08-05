class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :surfspot_id, null: false
      t.date :check_in, null: false
      t.date :check_out, null: false
      t.integer :num_guest, null: false
      t.integer :host_id, null: false
      t.timestamps
    end
    add_index :bookings, [:user_id, :surfspot_id, :host_id]
  end
end
