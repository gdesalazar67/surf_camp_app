class CreateSurfspots < ActiveRecord::Migration[5.2]
  def change
    create_table :surfspots do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.integer :price, null: false
      t.decimal :lat, null: false
      t.decimal :long, null: false
      t.integer :max_guest, null: false
      t.boolean :campfire?, null: false
      t.boolean :pets?, null: false
      t.boolean :toilets?, null: false
      t.boolean :showers?, null: false
      t.boolean :wifi?, null: false
      t.boolean :water?, null: false
      t.boolean :tent?, null: false
      t.timestamps
    end
    add_index :surfspots, [:host_id, :lat, :long, :price]
    add_index :surfspots, :title, unique: true
  end
end
