import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";
import { playersService } from "../services/PlayersService.js";

export class PlayersController {
  constructor() {
    console.log(AppState.players);
    this.drawPlayers()

  }

  drawPlayers() {
    const players = AppState.players

    let playerContent = ''

    players.forEach(player => playerContent += player.PlayerTemplateCard)

    const playerElem = document.getElementById('playerCardSection')
    playerElem.innerHTML = playerContent

  }

  scorePoint(playerName) {
    console.log('Clicked Button', playerName)
    playersService.scorePoint(playerName)
    this.drawPlayers()
  }

}