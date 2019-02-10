function reverseNumber (a){
    a=(a.toString()).split('');//Convert to string and then to array
    var b=new Array();//Reversed array container
    for (var i = a.length - 1; i >= 0; i--) {
      b.push(a[i]);
    }
    if(b.includes("-")){
     b.pop();//Removing minus from the end of array
     b.unshift("-")//Adding minus to the array start
    }
    b=b.join("");//convert to string
    return Number(b);//convert to number
  }
reverseNumber(-456);