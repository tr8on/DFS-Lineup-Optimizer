class CreateFavPlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :fav_players do |t|
      t.string :firstname
      t.string :lastname
      t.integer :salary
      t.string :position
      t.string :img
      

      t.timestamps
    end
  end
end
