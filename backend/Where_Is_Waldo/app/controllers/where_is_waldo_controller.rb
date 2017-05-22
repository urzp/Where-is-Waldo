class WhereIsWaldoController < ApplicationController
  def home
  end

  def games
    @boards = Board.all
  end

  def records
    @boards = Board.all
  end

  def target

    puts "xClick=#{params['xClick']} yClick=#{params['yClick']} "
    render json: { success: true}
  end
end
