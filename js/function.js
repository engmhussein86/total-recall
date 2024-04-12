console.log('functions');
//A. printGreeting
console.log('A. printGreeting');
console.log(printGreeting("Slimer"));

//B. printCool
console.log('B. printCool');
console.log(printCool("Slimer"));
//C. calculateCube
console.log('C. calculateCube');
console.log(calculateCube(5));
//D. isVowel
console.log('D. isVowel');
console.log(isVowel("a"));
//E. getTwoLengths
console.log('E. getTwoLengths');
console.log(getTwoLengths("Hank", "Hippopopalous"));
//F. getMultipleLengths
console.log('F. getMultipleLengthsyyy');
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
//G. maxOfThree
console.log('G. maxOfThree');
console.log(maxOfThree(6, 9, 1));
//H. printLongestWord
console.log('H. printLongestWord');
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));







//////////////Functions/////////
function printGreeting (name){
    return 'Hello there, '+name;
}
///////////////B////////// 
function printCool (name){
    return `${name} is cool!`
}
///////////////C////////// 
function calculateCube (side_length){
    return side_length ** 3;
}
///////////D/////////////
function isVowel(char){
    char = char.toLowerCase();

    if(char === 'a' ||char === 'e' || char === 'i' ||char === 'u' ||
    char === 'o' ){
        return true;
    }
    else{
        return false;
    }
}
///////////E//////////////
function getTwoLengths(txt1, txt2){
    return [txt1.length , txt2.length];
}
/////////F/////////////
function getMultipleLengths(arr){
    let arr_length = [];
    for(let  i = 0 ; i < arr.length; i++){
        arr_length.push(arr[i].length);
    }
    return arr_length;
}
///////////////G//////////
function maxOfThree(n1,n2,n3){
    return Math.max(n1, n2, n3);
}
/////////////H/////////
function printLongestWord(arr){
    let arr_length = [];
    for(let  i = 0 ; i < arr.length; i++){
        arr_length.push(arr[i].length);
    }
    return arr[arr_length.indexOf(Math.max(...arr_length))]; 
}