const NOME1 = "Luca"
const NOME2 = "Simone"

let n1 = 1;
let n2 = 3;

let numero = prompt('inserisci un valore');
let risultato =0;

for(let i=0; i<=numero; i++)
{
    document.write(i + '<br>')
    risultato += i;
}

document.write(risultato)


if(numero%2 == 0)
{
alert('pari');
}else
{
alert('dispari');
}