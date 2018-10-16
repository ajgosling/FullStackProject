class Api::UsersController < ApplicationController

  def index
    @users = User.all

    render "api/users/index"
  end

  def create
    @user = User.new(user_params)

    if @user.save
      Subscription.create(channel_id: 1, user_id: @user.id)
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
