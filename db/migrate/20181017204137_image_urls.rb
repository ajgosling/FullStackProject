class ImageUrls < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :image_url, :text, :default => "https://secure.gravatar.com/avatar/123abcd123bc12b3c.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0000-512.png"
  end
end
