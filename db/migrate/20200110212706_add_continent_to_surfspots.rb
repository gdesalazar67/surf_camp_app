class AddContinentToSurfspots < ActiveRecord::Migration[5.2]
  def change
    add_column :surfspots, :continent, :string
    add_index :surfspots, :continent
  end
end