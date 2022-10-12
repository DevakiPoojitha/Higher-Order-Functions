//Function #1: Array Slice
const foods = [pizza, burger, fingerChips, donuts, springRoll];
const modifiedFood = foods.slice(1,4);
console.log(modifiedFood);

//Function 2 Array splice
const modifiedfood=foods.splice(2,0,"noodles","icecream");
console.log(modifiedfood);

// Function 3 Filter method
const numberArray = [12,324,213,4,2,3,45,4234];
const isEven =numberArray.filter(iseven);
function isEven(num){
  
    return num%2==0?true:false;

}
console.log(isEven);

const isPrime =numberArray.filter(num=>{
    for(var i=2;i<num;i++)
    {
        if(num%i==0) return false;
    }
        return true;
   });
   console.log(isPrime);

//Function 4 reject
const non_Prime = numberArray.filter(number=>{
    for(var i=2;i<number;i++){
        if(number%i==0) return true;
    }
    return false;
});
console.log(non_Prime);

//Function 5 Lambda

const numbArray = [12,324,213,4,2,3,45,4234];
const isEven = numberArray.filter(even=>even%2==0?true:false);
console.log(isEven);


//Function 6 Map

const myArray = [11, 34, 20, 5, 53, 16];
const findSquare =myArray.map(function findSquareOfNumbers(number){
    return number*number;
});
console.log(findSquare);

//Function 7 Reduce
const myArr = [2,3,5,10];
const multiple = myArr.reduce((total,number)=>total*=number)
console.log(multiple);
