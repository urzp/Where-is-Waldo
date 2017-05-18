class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :title
      t.string :hard_level
      t.string :image_name


      t.timestamps null: false
    end
  end
end
