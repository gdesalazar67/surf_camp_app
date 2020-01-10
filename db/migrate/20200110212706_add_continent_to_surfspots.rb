class AddContinentToSurfspots < ActiveRecord::Migration[5.2]
  def change
    add_column :surfspots, :continent, :integer
    add_index :surfspots, :continent
  end
end
