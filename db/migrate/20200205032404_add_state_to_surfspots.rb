class AddStateToSurfspots < ActiveRecord::Migration[5.2]
  def change
    add_column :surfspots, :state, :string
    add_index :surfspots, :state
  end
end
