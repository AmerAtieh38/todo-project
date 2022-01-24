var ourweb=prompt("Do you like our website?(yes/no)");
ourweb.toLocaleLowerCase;
if(ourweb===""){
    ourweb="invalid";
};

var happy=prompt("Are you happy?(yes/no)");
happy.toLocaleLowerCase;
if(happy===""){
    happy="invalid";
};

var life=prompt("Do you like this life?");
life.toLocaleLowerCase;
if(life===""){
    life="invalid";
}
  
var totalArray=[ourweb,happy,life];
var forTotal=[];
for(let i=0;i<totalArray.length;i++){
    forTotal[i]=totalArray[totalArray.length-1-i];
}
totalArray=forTotal;
console.log(totalArray);
