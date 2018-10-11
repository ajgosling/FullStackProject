class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :title, null: false
      t.text :description
      t.boolean :private, default: false, null: false
      t.boolean :is_direct, default: false, null: false
      t.integer :creator_id, null: false
      t.timestamps
    end
    add_index :channels, :creator_id
  end
end
