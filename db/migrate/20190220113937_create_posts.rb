class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string "name", :null => false
      t.string "uri", :null => false
      t.text "artist"
      t.text "album"
      t.text "body", :limit => 140
      t.string "image"
      t.integer "likes", :default => 0
      t.timestamps
    end

    add_reference :posts, :user, index: true, foreign_key: true
    add_index :posts, :created_at
  end
end
