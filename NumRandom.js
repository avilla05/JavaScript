var numeri=[20];
var numero;
for(let i=0;i<20;i++){
    numero=Math.floor(Math.random()*49)+1;

    while(numeri.includes(numero)==true){
        numero=Math.floor(Math.random()*49)+1;
    }
    numeri[i]=numero;
    document.write(numeri[i]+";  ");
}
