class CreateCourses < ActiveRecord::Migration[5.2]
  def up
    create_table :courses do |t|
      t.string "title", :null => false
      t.string "description"
      t.integer "level"
      t.integer "sub_category_id", :null => false
      t.integer "user_id", :null => false
      t.timestamps
    end

    add_index("courses", "sub_category_id")
  end

  def down
    drop_table :courses
  end
end
