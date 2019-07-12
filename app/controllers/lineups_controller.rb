class LineupsController < ApplicationController
  before_action :set_lineup, only: [:show, :update, :destroy]

  # GET /lineups
  def index
    @lineups = Lineup.all

    render json: @lineups
  end

  # GET /lineups/1
  def show
    render json: @lineup
  end

  # POST /lineups
  def create
    @lineup = Lineup.new(lineup_params)

    if @lineup.save
      render json: @lineup, status: :created, location: @lineup
    else
      render json: @lineup.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lineups/1
  def update
    if @lineup.update(lineup_params)
      render json: @lineup
    else
      render json: @lineup.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lineups/1
  def destroy
    @lineup.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lineup
      @lineup = Lineup.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def lineup_params
      params.require(:lineup).permit(:salary, :pg, :sg, :sf, :pf, :c, :g, :f, :util)
    end
end
