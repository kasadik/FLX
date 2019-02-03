// cycle=true using due to validation error in the "while" cycle
var cycle=true;
var val = prompt ("Enter your amount of money:");
while(cycle){
    if (isNaN(val) || val<=0 || val>=10000000){
        alert("Invalid amount of money, try again");
        val= prompt("Enter your amount of money again");
        continue;
    }else{
            break;
        }
}
var disc = prompt ("Enter your disc value:");
while(cycle){
    if (isNaN(disc) || disc<=0 || disc>=100){
        alert("Invalid discount value!, try again");
        disc= prompt("Enter your discount value again");
        continue;
    }else{
            break;
        }
}
val=Number(val);
disc=Number(disc);
disc=disc/100;
var s=val*disc;
var res=val-s;
val=Math.round(val * 100)/100;
disc=Math.round((disc* 100)*100)/100;
res=Math.round(res * 100)/100;
s=Math.round(s * 100)/100;
alert("Price without discount:"+val+"\n"+"discount:"+disc+"%"+'\n'+"Price with discount:"+res+"\n"+"Saved:"+s);