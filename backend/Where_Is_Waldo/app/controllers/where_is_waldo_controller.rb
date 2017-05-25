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
    id = params['board_id']
    xClick = params['xClick'].to_i
    yClick = params['yClick'].to_i
    board = Board.find(id)
    target = board.target

    if (xClick.between?(target.start_point_x, target.end_point_x) && yClick.between?(target.start_point_y, target.end_point_y) )  then
       render json: { success: true}
     else
       render json: { success: false}
     end


  end
end
