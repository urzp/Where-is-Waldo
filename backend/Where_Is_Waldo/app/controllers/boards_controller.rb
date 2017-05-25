class BoardsController < ApplicationController

  def index
    @boards = Board.all
  end

  def new
    @board = Board.new
  end

  def edit
    @board = Board.find(params[:id])
  end

end
