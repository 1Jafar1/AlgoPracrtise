let numbers=[1,2,3,4,5]
// let sum=0
// for(let i = 0 ; i < numbers.length;
//     i++
// ){
//     sum+=numbers[i]
// }
// console.log(sum)



function SumArray(arr){
    let sum=0
    for(let i = 0 ; i < arr.length;i++){
        sum+=arr[i]
    } 
    return sum
}
console.log(SumArray(numbers))