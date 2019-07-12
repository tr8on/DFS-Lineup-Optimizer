class FavPlayersController < ApplicationController
  before_action :set_fav_player, only: [:show, :update, :destroy]

  # GET /fav_players
  def index
    @fav_players = FavPlayer.all

    render json: @fav_players
  end

  # GET /fav_players/1
  def show
    render json: @fav_player
  end

  # POST /fav_players
  def create
    @fav_player = FavPlayer.new(fav_player_params)

    if @fav_player.save
      render json: @fav_player, status: :created, location: @fav_player
    else
      render json: @fav_player.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /fav_players/1
  def update
    if @fav_player.update(fav_player_params)
      render json: @fav_player
    else
      render json: @fav_player.errors, status: :unprocessable_entity
    end
  end

  # DELETE /fav_players/1
  def destroy
    @fav_player.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fav_player
      @fav_player = FavPlayer.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def fav_player_params
      params.require(:fav_player).permit(:firstname, :lastname, :salary, :position, :img, :string)
    end
end
