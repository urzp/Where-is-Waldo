class Board < ActiveRecord::Base
  has_one :target
  accepts_nested_attributes_for :target
end
