let arr=[10,21,13,22,19,29,3]
for(let x of arr){
    if(x %2==0){
        console.log("even:"+x)
    }else{
        console.log("odd:"+x)
    }
}
console.log(arr.length)
arr.push(45)
console.log(arr)
arr.pop(45)
console.log(arr)