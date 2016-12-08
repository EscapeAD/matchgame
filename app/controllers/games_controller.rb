class GamesController < ApplicationController
  def index
    # @highscores = Highscore.order(score: :desc).limit(10)
  end

  def show
    @highscores = Highscore.order(score: :desc).limit(10)
  end
end
