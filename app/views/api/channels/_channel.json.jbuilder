json.extract! channel, :id, :title
json.direct channel.is_direct
json.creatorId channel.creator_id
json.members channel.user_ids
