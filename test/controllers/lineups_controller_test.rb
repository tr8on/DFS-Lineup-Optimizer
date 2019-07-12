require 'test_helper'

class LineupsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lineup = lineups(:one)
  end

  test "should get index" do
    get lineups_url, as: :json
    assert_response :success
  end

  test "should create lineup" do
    assert_difference('Lineup.count') do
      post lineups_url, params: { lineup: { c: @lineup.c, f: @lineup.f, g: @lineup.g, pf: @lineup.pf, pg: @lineup.pg, salary: @lineup.salary, sf: @lineup.sf, sg: @lineup.sg, util: @lineup.util } }, as: :json
    end

    assert_response 201
  end

  test "should show lineup" do
    get lineup_url(@lineup), as: :json
    assert_response :success
  end

  test "should update lineup" do
    patch lineup_url(@lineup), params: { lineup: { c: @lineup.c, f: @lineup.f, g: @lineup.g, pf: @lineup.pf, pg: @lineup.pg, salary: @lineup.salary, sf: @lineup.sf, sg: @lineup.sg, util: @lineup.util } }, as: :json
    assert_response 200
  end

  test "should destroy lineup" do
    assert_difference('Lineup.count', -1) do
      delete lineup_url(@lineup), as: :json
    end

    assert_response 204
  end
end
