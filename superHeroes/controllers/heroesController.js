let fs = require('fs');
// {"Content-Type": "text/html; charset=utf-8"}
let heroesController = {
    listarJson: function(req, res) {
        let listaHeroesJson = fs.readFileSync("./data/heroes.json", "utf8");
        return listaHeroesJson;
    },
    listarHeroesBien: function(req, res) {
        let arrayHeroes = JSON.parse(this.listarJson);
        res.send(arrayHeroes)
    }
}

module.exports = heroesController;