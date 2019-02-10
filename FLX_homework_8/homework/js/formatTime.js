function formatTime(a){
    var days=Math.floor(a/1400);
    var hours=Math.floor((a%1400)/60);
    var minutes=Math.floor((a%1400)%60);
    return days+" day(s) "+hours+" hour(s) "+ minutes+ " minute(s)";
}   
formatTime(3200);