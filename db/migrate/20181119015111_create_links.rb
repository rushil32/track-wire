class CreateLinks < ActiveRecord::Migration[5.2]
  def up
    create_table :links do |t|
      t.string "url", :limit => 200, :null => false
      t.string "title", :default => ''
      t.string "description", :default => ''
      t.string "image", :default => ''
      t.integer "course_id"
      t.integer "user_id"
      t.boolean "paid", :default => false
      t.timestamps
    end

    add_index("links", "course_id")
  end

  def down
    drop_table :links
  end
end
