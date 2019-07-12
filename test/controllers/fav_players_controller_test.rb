require 'test_helper'

class FavPlayersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @fav_player = fav_players(:one)
  end

  test "should get index" do
    get fav_players_url, as: :json
    assert_response :success
  end

  test "should create fav_player" do
    assert_difference('FavPlayer.count') do
      post fav_players_url, params: { fav_player: { firstname: @fav_player.firstname, img: @fav_player.img, lastname: @fav_player.lastname, position: @fav_player.position, salary: @fav_player.salary, string: @fav_player.string } }, as: :json
    end

    assert_response 201
  end

  test "should show fav_player" do
    get fav_player_url(@fav_player), as: :json
    assert_response :success
  end

  test "should update fav_player" do
    patch fav_player_url(@fav_player), params: { fav_player: { firstname: @fav_player.firstname, img: @fav_player.img, lastname: @fav_player.lastname, position: @fav_player.position, salary: @fav_player.salary, string: @fav_player.string } }, as: :json
    assert_response 200
  end

  test "should destroy fav_player" do
    assert_difference('FavPlayer.count', -1) do
      delete fav_player_url(@fav_player), as: :json
    end

    assert_response 204
  end
end
