const prompt = require("prompt-sync")();

let cadastros = []


function create(){
  let nome = prompt("Diga seu nome: ")

  if (nome !== String || nome.length < 3){
    return console.log("Você deve digitar um nome válido!")
  }
 let voto = prompt("Digite seu voto(escolha um: 1, 2, 3, 4): ")

 if (voto < 1 || voto > 4){
    return console.log("Você deve selecionar um dos números acima!")
 }


}

function read(){

}

function update(){

}

function del(){

}

let functions = {
    create,
    read,
    update,
    del,
}

module.exports = functions