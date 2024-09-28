class CreateFriends < ActiveRecord::Migration[7.2]
  def change
    unless table_exists?(:friends)
      create_table :friends do |t|
        t.string :first_name
        t.string :last_name
        t.string :email
        t.string :phone
        t.string :twitter

        t.timestamps
      end
    end
  end
end
