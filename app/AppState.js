import { Player } from './models/Player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
  players = [
    new Player("Tyler"),
    new Player("james"),
    new Player("jeff"),
    new Player("joff"),
    new Player("jif"),
    new Player("geff"),
    new Player("kelly")
  ];
}


export const AppState = createObservableProxy(new ObservableAppState())