class CreateTargets < ActiveRecord::Migration
  def change
    create_table :targets do |t|
      t.integer :start_point_x
      t.integer :start_point_y
      t.integer :end_point_x
      t.integer :end_point_y
      t.timestamps null: false
    end
  end
end
