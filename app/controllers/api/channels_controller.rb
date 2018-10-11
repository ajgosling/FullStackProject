class Api::ChannelsController < ApplicationController
  def index
    @channels = current_user.channels
    render "api/channels/index"
  end

  def show
    @channel = current_user.channels.find(params[:id])
    if @channel
      render "api/channels/show"
    else
      render json: ["Channel not found or you do not have access"], status: 401
    end
  end

  def create

  end

  def update

  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
