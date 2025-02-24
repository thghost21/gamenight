export class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  // Player.js
  get PlayerTemplateCard() {
    return /*html*/`
      <div class="card">
          <div class="card-body">
              ${this.name} - ${this.score}
          </div>
          <button onclick="app.PlayersController.scorePoint('${this.name}')" class='btn btn-primary'> + </button>
      </div>`
  }


}