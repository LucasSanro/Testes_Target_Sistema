// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const distribuidoras=[

  { 
    estado:"SP",
    faturamento: 67836.43,
    
  },
  { 
    estado:"RJ",
    faturamento: 36678.66,

  },
  { 
    estado:"MG",
    faturamento: 29229.88,

  },
  { 
    estado:"ES",
    faturamento: 27165.48,

  },
  { 
    estado:"Outros Estados",
    faturamento: 19849.53,
  },

];

const sumall = distribuidoras.map(item => item.faturamento).reduce((prev, curr) => prev + curr, 0);

function stateParcipation(distribuidora,sumall){

  let parcipation =(distribuidora.faturamento/sumall)*100
  return(parcipation.toFixed(0)+"%")

}

function stateParcipationMensage(distribuidora){

  console.log(`A distribuidora de: ${distribuidora.estado} representa ${stateParcipation(distribuidora,sumall)}`)

}

console.log(`O Faturamento Mensal foi de : R$ ${sumall}` )

for(distribuidora of distribuidoras){
  stateParcipationMensage(distribuidora)
}