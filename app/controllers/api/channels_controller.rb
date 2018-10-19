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
    my_params = channel_params
    ids = my_params[:ids]
    my_params.delete(:ids)
    @channel = Channel.new(my_params)

    if @channel.save
      ids.each do |id|
        Subscription.create(channel_id: @channel.id, user_id: id)
      end
      render "api/channels/show"
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update

  end

  def destroy

  end

  private

  def channel_params
    params.require(:channel).permit(:title, :description, :private, :is_direct, :creator_id, :ids => [])
  end
end
