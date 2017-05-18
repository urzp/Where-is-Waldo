class WhereIsWaldoController < ApplicationController
  def home
  end

  def games
    @boards = Board.all
  end

  def records
  end

end
