const biciclette = [
    bici1 = {
        nome : "rossa",
        peso: 580
    },
    bici2 = {
        nome : "gialla", 
        peso : 550
    },
    bici3 = {
        nome : "verde", 
        peso : 536
    },
    bici4 = {
        nome : "bianca", 
        peso : 600
    },
    bici5 = {
        nome : "nera", 
        peso : 700
    }
]


let biciLeggera ={
    nome :'',
    peso : 999
};
for (i = 0; i< biciclette.length; i++){   
    if( biciLeggera.peso > biciclette[i].peso){
        biciLeggera.nome = biciclette[i].nome;
        biciLeggera.peso = biciclette[i].peso;
    }
}
console.log(biciLeggera);




