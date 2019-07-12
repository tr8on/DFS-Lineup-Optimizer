class CreateLineups < ActiveRecord::Migration[5.2]
  def change
    create_table :lineups do |t|
      t.integer :salary
      t.integer :pg
      t.integer :sg
      t.integer :sf
      t.integer :pf
      t.integer :c
      t.integer :g
      t.integer :f
      t.integer :util

      t.timestamps
    end
  end
end
