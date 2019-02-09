var user=prompt("Enter your user name:");
var hours=new Date().getHours();
var cycle=true;
while(cycle){
if(user===null || user===""){
    alert("Cenceled");
    user=prompt("Enter your user name again:");
    continue;
    }else if(user.length<4){
        alert("I don't know any users having name length less than 4 symbols");
        user=prompt("Enter your user name:");
        continue;
    }else if(user==="User" || user==="Admin"){
        break;
    }else{
        continue
    }
}
var password=prompt("Enter your password");
while(cycle){
if (user==="User" && password==="UserPass"){
    if(hours<20){
        alert("Good day, dear User!");
    }else if(hours>=20){
        alert("Good evening, dear User!");
    }
break;
}else if(user==="Admin" && password==="RootPass"){
    if(hours<20){
        alert("Good day, dear Admin!");
    }else if(hours>=20){
        alert("Good evening, dear Admin!");
    }
break;
}else{
    alert("Wrong Password!")
    password=prompt("Enter your password");
    continue;
}
}      
