function getMin(){
    var min;
    var arr=arguments;
    for (var i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            min=arr[i];
        }
        }
    return min;
}
getMin(3,0,-3);