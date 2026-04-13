 class Jogador{
    constructor(classe, ataqueDeClasse){
        this.classe = classe
        this.ataqueDeClasse = ataqueDeClasse
        }
    escrever(){
        console.log(`o ${this.classe} atacou usando ${this.ataqueDeClasse}`)
    }
}

let Mago = new  Jogador("Mago", "Magia")
let Guerreiro = new Jogador("Guerreiro", "Espada")
let Monge = new Jogador("Monge", "Artes Marciais")
let Ninja = new Jogador("Ninja", "Shuriken")

Guerreiro.escrever()