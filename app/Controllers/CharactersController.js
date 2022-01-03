import { ProxyState } from "../AppState.js"
import { charactersService } from "../Services/CharactersService.js"

function _drawCharacters() {
  let characters = ProxyState.characters
  let template = ''
  characters.forEach(c => template += c.Template)
  document.getElementById('characters').innerHTML = template
}

export class CharactersController {
  constructor() {
    ProxyState.on('characters', _drawCharacters)

    charactersService.getAllCharacters()
  }
}