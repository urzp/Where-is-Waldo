class TargetAddIdBoardCollum < ActiveRecord::Migration
  def change
    add_column :targets, :board_id, :integer
  end
end
