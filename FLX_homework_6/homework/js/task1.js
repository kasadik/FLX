// cycle=true using due to validation error in the "while" cycle
var cycle=true;
var a = prompt ("Enter value for 'a'");
while(cycle){
    if (isNaN(a)){
        alert("Invalid input for 'a' try again");
        a= prompt("Enter value for 'a' again");
        continue;
    }else{
            break;
        }
}
var b = prompt ("Enter value for 'b'");
while(cycle){
    if (isNaN(b)){
        alert("Invalid input for 'b' try again");
        b= prompt("Enter value for 'b' again");
        continue;
    } else{
            break;
        }
}
var c = prompt ("Enter value for 'c'");
while(cycle){
    if (isNaN(c)){
        alert("Invalid input for 'c' try again");
        c= prompt("Enter value for 'c' again");
        continue;
    }else{
            break;
        }
}
var D = (b * b) - (4 * a * c);
alert("Discriminant="+D);
if (D > 0) {
           var x1=(-b+Math.sqrt(D))/(2*a);
           var x2=(-b-Math.sqrt(D))/(2*a);
            alert('Two roots found:\n'+"x1="+Number(x1.toFixed(4))+"\n"+"x2="+Number(x2.toFixed(4)));
        } if (D < 0) {
            alert("No Solution");
        } if (D === 0) {
           var x=-b/(2*a);
            alert("One root: "+Number(x.toFixed(4)));
        }
