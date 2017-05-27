class BoardsController < ApplicationController

  def index
    @boards = Board.all

  end

  def new
    @board = Board.new
    @board.target = Target.new
    @target = @board.target
    render "edit"
  end

  def create
    puts params
    #@board  = User.new(user_params)    # Not the final implementation!
    if @user.save
      flash[:success] = "Welcome to the Sample App!"
      sign_in @user
      redirect_to @user
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



end
