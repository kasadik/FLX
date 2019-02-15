//task 1
function findTypes (){
    var a=new Array();
    for (var i=0;i<arguments.length;i++){
        a.push(typeof(arguments[i]))
    }
    return a;
}
//task 2
function executeforEach(arr){
    var a=arr;
    a.forEach(function(el){
        console.log(el)
    });
}
//task 3
function mapArray(arr){
    var a=arr;
    var b=new Array();
    a.forEach(function(el){
        b.push(el+3);
    });
return b;
}
//task 4
function filterArray(arr){
    var a=arr;
    var b=new Array();
    a.filter(function(el){
        if(el>3){
            b.push(el)
        }
    return b;
    });
    return b;
}
//task 5
function getAmountOfAdultPeople(data){
    var b=data.filter(function(el){
        if (el.age>18){
            return el;
        }
        return b;
    });
    var c=new Array();
    for (var i=0;i<b.length;i++){
        c.push(b[i].name)
    }
    return c.length;
}
//task 6
function getGreenAdultBananaLovers(data){
    var b=data.filter(function(el){
        if (el.age>18 && el.favoriteFruit==="banana" && el.eyeColor==="green" ){
            return el;
        }
        return b;
    });
    var c=new Array();
    for (var i=0;i<b.length;i++){
        c.push(b[i].name)
    }
    return c;
}
//task 7
function keys(object){
    var a = new Array();
    for (var keys in object){
        a.push(keys)
    }
    return a;
}
//task 8
function values(object){
    var a = new Array();
    for (var values in object){
        a.push(object[values])
    }
    return a;
}
//task 9
function showFormattedDate(a){
    var options = { month: 'long'};
    var month=new Intl.DateTimeFormat('en-US', options).format(a);
    month=month.substring(0, 3);
    var day=a.getDate();
    var year=a.getFullYear();
    return "Date: "+ day + " of "+ month+", "+year;
}
//task 10
function isEvenYear(a){
    var year=a.getFullYear();
    if(year%2===0){
        return true
    }else{
        return false 
    }
}
//task 11
function isEvenMonth(a){
    var month=a.getMonth()
    if(month%2===0){
        return false
    }else{
        return true
    }
}
//Data for tasks 5 and 6
var data=[
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      "age": 39,
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      "age": 38,
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      "age": 2,
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      "age": 19,
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
  ]
//Execution..............................................
findTypes(null, 5, "hello");
executeforEach([1,2,3]);
mapArray([2, 5, 8]);
filterArray([2, 5, 8]);
getAmountOfAdultPeople(data);
getGreenAdultBananaLovers(data);
keys({keyOne: 1, keyTwo: 2, keyThree: 3});
values({keyOne: 1, keyTwo: 2, keyThree: 3});
showFormattedDate(new Date('2019-01-27T01:10:00'));
isEvenYear(new Date('2019-01-27T01:10:00'));
isEvenMonth(new Date('2019-02-27T01:10:00'));


