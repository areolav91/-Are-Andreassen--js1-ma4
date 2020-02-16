const getGames = "https://api.rawg.io/api/games";

fetch(getGames)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGames(json);
    })
    .catch(function(error) {
        console.log(error);
    });

    function createGames(json) {
      console.dir(json);
    }

function createGames(json) {
    const results = json.results;
    console.dir(results);

    const resultsContainer = document.querySelector(".game");

    let html = "";

    results.forEach(function(result) {
      html += `<div class="game">
    <h2>$(result.name)</h2>
    <img src="${result.background_image}"> alt ="${result.name}">
</div>`;
    });

    resultsContainer.innerHTML = html;
}
