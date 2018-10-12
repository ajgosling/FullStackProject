class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
    render "api/channels/index"
  end

  def show
    @channel = Channel.find(params[:id])
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

  def channel_params
    params.require(:channel).permit(:title, :description, :private, :is_direct, :creator_id)
  end
end
