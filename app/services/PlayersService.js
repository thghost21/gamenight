import { AppState } from "../AppState.js"


class PlayersService {


  scorePoint(playerName) {
    console.log('service score', playerName)
    const playerToScore = AppState.players.find(player => player.name == playerName)
    playerToScore.score++
    console.log(playerToScore.name, playerToScore.score);

  }
}

export const playersService = new PlayersService()