json.extract! channel, :id, :title, :description
json.created channel.created_at.to_date
json.direct channel.is_direct
json.members channel.user_ids
json.creator User.find(channel.creator_id).username
