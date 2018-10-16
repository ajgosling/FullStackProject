class Api::MessagesController < ApplicationController
  def index
    channel = Channel.find(params[:channel_id])
    @messages = channel.messages

    render "api/messages/index"
  end
end
