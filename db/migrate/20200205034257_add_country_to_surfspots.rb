class AddCountryToSurfspots < ActiveRecord::Migration[5.2]
  def change
    add_column :surfspots, :country, :string
    add_index :surfspots, :country
  end
end
