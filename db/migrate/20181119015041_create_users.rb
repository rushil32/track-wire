class CreateUsers < ActiveRecord::Migration[5.2]
  def up
    create_table :users do |t|
      t.string "email", :null => false
      t.string "name"
      t.string "picture"
      t.timestamps
    end
  end

  def down
    drop_table :users
  end
end
