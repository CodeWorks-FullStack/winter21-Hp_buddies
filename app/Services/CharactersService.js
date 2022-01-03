import { ProxyState } from "../AppState.js"
import { Character } from "../Models/Character.js"
import { hpApi } from "./AxiosService.js"

class CharactersService {
  async getAllCharacters() {
    // Axios makes the get request adding the provided string to the BaseURL
    let res = await hpApi.get('')
    // the axios response object includes the data from the server in the 'data' property
    // console.log(res.data)
    res.data = res.data.filter(c => c.image)
    // map itterates over the collection of pojos from the server and turns them into class objects that we defined
    let characters = res.data.map(c => new Character(c))
    console.log(characters)
    ProxyState.characters = characters
  }

}


export const charactersService = new CharactersService()