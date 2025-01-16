const squadre = [
    squadra1 = {
        nome:"juve",
        punti : 0,
        falliSubiti : 0
    },
    squadra2 = {
        nome:"roma",
        punti : 0,
        falliSubiti : 0
    },
    squadra3 = {
        nome:"lazio",
        punti : 0,
        falliSubiti : 0
    },
    squadra4 = {
        nome:"torino",
        punti : 0,
        falliSubiti : 0
    },
    // squadra5 = {
    //     nome:"milan",
    //     punti : 0,
    //     falliSubiti : 0
    // }

];

const nomiEFalli =[];
let middle ={
    nome : "",
    falliSubiti : 0
};

for (i = 0; i < squadre.length; i++){
    squadre[i].punti = Math.floor(Math.random() * 100);
    squadre[i].falliSubiti = Math.floor(Math.random() * 100)
    console.log(squadre[i]);
    nomiEFalli.push(squadre[i].nome);
    nomiEFalli.push(squadre[i].falliSubiti)
    console.log(nomiEFalli);
    
}
