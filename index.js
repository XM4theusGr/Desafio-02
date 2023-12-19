//DEFININDO A VARIAVEL DO RESULTADO DO SALDO DE VITÓRIAS
let Result = CalculateWB(100,1)
let Nivel = SettingLV (100)


//IMPRIMINDO A RESPOSTA COM O RESULTADO DAS FUNÇÕES
console.log("O Herói tem o saldo de " + Result + " vitórias " + "está no nível de " + Nivel)

//CALCULANDO O SALDO DE VITÓRIAS
function CalculateWB(numV, numD){
    let Balance = numV - numD
    return Balance
}
//DEFININDO O RANK DE ACORDO COM O NÚMERO DE VITÓRIAS
function SettingLV(numV){
    if(numV<= 10){
        rank = "Ferro"
    
    }else if(numV<=20){
        rank = "Bronze"
    
    }else if(numV<=50){
        rank = "Prata"
    
    }else if(numV<=80){
        rank = "Ouro"
    
    }else if(numV<=90){
        rank = "Diamante"
    
    }else if(numV<=100){
        rank ="Lendário"
    
    }else if(numV>=101){
        rank = "Imortal"
    
    }
    return rank
    
}