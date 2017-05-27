class BoardsController < ApplicationController

  def index
    @boards = Board.all

  end

  def new
    @board = Board.new
    @board.target = Target.new
    render "edit"
  end

  def create

    @board  = Board.new(board_params)

    if @board.save
      @boards = Board.all
      render 'index'
    else
      render 'new'
    end

  end

  def update
  end

  def edit
    @board = Board.find(params[:id])
    @target = @board.target
  end

  private

  def board_params
    params.require(:board).permit(:title, :hard_level, :image_name, :target_attributes=>[:start_point_x, :start_point_y, :end_point_x, :end_point_y] )
  end


end
