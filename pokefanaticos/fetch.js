const pokes = document.querySelector("#pokes");

window.addEventListener("load", function () {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=12&offset=0")
    .then((res) => res.json())
    .then((data) => {
      const poke = data.results;
      poke.map((pokemon, indice) => {
        let index = indice + 1;
        pokes.innerHTML += `
        <div class="card">
            <div class="card-back">
                <div class="card-title">${pokemon.name}</div>
                <div class="card-avatar">
                    <img class="avatar" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png" alt="Pokemon" />
                </div>
            </div>
        </div>`;
      });
    })
    .catch((err) => alert(err));
});
