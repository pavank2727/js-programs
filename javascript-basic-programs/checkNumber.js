function numberType(number){
    if(number>0){
        return `The number ${number} is positive`
    }
   else if(number<0){
        return `The number ${number} in negative`
    }
    else{
        return `The number ${number} is null`
    }
}
console.log(numberType(4));
console.log(numberType(-2));
console.log(numberType(0));


