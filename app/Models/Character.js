export class Character {
  constructor(data) {
    this.name = data.name
    this.actor = data.actor
    this.alive = data.alive
    // Adapter Pattern
    this.eyeColor = data.eyeColour
    this.hair = data.hairColour
    this.house = data.house
    this.imgUrl = data.image
  }


  // if !alive add grayscale class to img tag


  get Template() {
    return `
    <div class="col-3 p-3">
      <div class="bg-white rounded">
        <img class="w-100 ${!this.alive ? 'grayscale' : ''}" src="${this.imgUrl}" alt="${this.name}">
        <div class="p-relative d-flex justify-content-center">
          <div class="p-absolute p-2 bg-primary title-tag text-light">
            <p class="m-0">${this.name}</p>
          </div>
        </div>
      </div>
    </div>
    `
  }

}





/**
 * actor: "Daniel Radcliffe"
alive: true
alternate_actors: []
alternate_names: []
ancestry: "half-blood"
dateOfBirth: "31-07-1980"
eyeColour: "green"
gender: "male"
hairColour: "black"
hogwartsStaff: false
hogwartsStudent: true
house: "Gryffindor"
image: "http://hp-api.herokuapp.com/images/harry.jpg"
name: "Harry Potter"
patronus: "stag"
species: "human"
wand: {wood: 'holly', core: 'phoenix feather', length: 11}
wizard: true
yearOfBirth: 1980
 */