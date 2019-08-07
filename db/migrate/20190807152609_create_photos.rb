class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :surfspot_id, null: false
      t.string :img_url, null: false
      t.timestamps
    end
    add_index :photos, :surfspot_id
  end
end
