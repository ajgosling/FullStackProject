@channels.each do |channel|
  json.set! channel.id do {
    json.extract! channel, :id, :title
    json.direct channel.is_direct
  }
end
