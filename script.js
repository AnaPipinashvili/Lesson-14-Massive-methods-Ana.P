//  1. 

// let array =[ 2, 5, 8, 10, 150, 67 ];
// array.push('javascript', 'python');
// console.log(array);

// array.unshift('html' , 'css');
// console.log(array);

// let length = array.length;
// console.log(length);

// array.shift();
// array.pop();
// console.log(array);

// let finalLength= array.length;
// console.log(finalLength);


// 2 

// let array = ['orange', 'banana', 'pear']
// let length= array.length;
// console.log(length);

// array.push('apple', 'ananas');
// array.unshift('watermelon');
// console.log(array);
// let newLenght= array.length;
// console.log(newLenght);

// array.splice(2, 0, 'mango');
// console.log(array);

// array.shift();
// array.pop();
// console.log(array);
// let length2 = array.length;
// console.log(length2);


// 3

// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let result= array.map(x => x /3); 
// console.log(result);


// 4

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// let newArray = array.filter(v => typeof v === 'number');
// console.log(newArray);

// 5

// let languages = ['html', 'css', 'javascript', 'python', 'php'];
// let newlanguages= languages.filter( x => x.length > 3 );
// console.log(newlanguages);

// 6
// let array= ['academy', 'of', 'digital', 'industries'].reduce(function (x, y){
//        return x.concat (y);
// },
// ''
// )
// console.log(array);
 

// 7 - ძველი ვერსიით:
// let array = [12, 'google', 32, null, 'yahoo', 25];
// let newArray= array.map(function(x){
//     if (typeof x === 'number'){
//         return x*x;
//     } else if (typeof x === 'string'){
//         return x.toUpperCase();
//     } else {
//         return x;
//     }
// } )
//  console.log(newArray);


 // "7"  -*** ვცადე ამ ახალი ჩანაწერითაც 
// let array = [12, 'google', 32, null, 'yahoo', 25];
// let result=  array.map(x => typeof x === "number" ? x=x*x :
//     (typeof x === "string")? x.toUpperCase() :
//     x
//     )
//     console.log(result);


// 8
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// let newWords = words.filter(x => x.includes('m') || x.includes('M'));
// console.log(newWords);