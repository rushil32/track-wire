class CreateUsersSubCategoriesJoin < ActiveRecord::Migration[5.2]
  def up
    create_table :sub_categories_users, :id => false do |t|
      t.integer "user_id"
      t.integer "sub_category_id"
    end

    add_index("sub_categories_users", ["user_id", "sub_category_id"])
  end

  def down
    drop_table(:sub_categories_users)
  end
end
