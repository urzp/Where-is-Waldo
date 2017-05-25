class BoardsController < ApplicationController

  def index
    @boards = Board.all
  end

  def new
    @board = Board.new
  end

  def edit
    @user = Board.find(params[:id])
  end

end
