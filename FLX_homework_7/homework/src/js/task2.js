var start_prompt=confirm("Do you want to play a game?");//Asking user for a game
var win_prompt;//Prompt if user did gues a number
var fail_prompt;//Prompt if user did not guess a number
var user_number;
var total_prize=0;
var range_increment=5;
var prize=10;
var attempts=3;
while(start_prompt===true){
var rand=Math.floor(Math.random() * (range_increment+1));
alert("Random is: "+rand);
user_number=prompt("Enter a number from 0 to "+range_increment+"\nAttempts left: "+attempts+"\nTotal prize: "
+Math.floor(total_prize)+"\nPossible prize on current attempt: "+Math.floor(prize));
if(Number(user_number)===rand){
    attempts=3;
    total_prize=total_prize+prize;
    win_prompt=confirm("Congratulation!\nYour prize is: "+Math.floor(total_prize)+"\nDo you want to continue?");
    if(win_prompt===true){
        prize*=3;
        range_increment*=2;
        rand=Math.floor(Math.random() * (range_increment+1));
    }else{
        alert("Thank you for a game. Your prize is: "+ Math.floor(total_prize));
        fail_prompt=confirm("Do you want to play again?");
        break;
    }
}else{
    alert("Thank you for a game. Your prize is: "+ Math.floor(total_prize));
    prize=prize/2;
    fail_prompt=confirm("Do you want to play again?")
    if(fail_prompt===true){
        attempts--;
    }else{
        break;
    }
}
if(attempts===0){
    if(fail_prompt===true){
        attempts=3;
        prize=10;
        total_prize=0;
        range_increment=5;
    }
}
}
if(start_prompt===false){
    alert("You did not become a millionaire, but can.");
}