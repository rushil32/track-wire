class CreateSubCategories < ActiveRecord::Migration[5.2]
  def up
    create_table :sub_categories do |t|
      t.string "name", :null => false
      t.integer "category_id", :null => false
      t.timestamps
    end

    add_index("sub_categories", "category_id")
  end

  def down
    drop_table(:sub_categories)
  end
end
