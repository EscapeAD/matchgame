class GamesController < ApplicationController
  def index
    # @highscores = Highscore.order(score: :desc).limit(10)
  end

  def show
    @highscores = Highscore.order(score: :desc).limit(10)
  end

  def create
    @highscore  = Highscore.new(highscore_params)
    @highscore.save
  end
private

  def highscore_params
    params.require(:highscore).permit(:name, :score)
  end
end
