let arr = Array.from(Array(10)) 
arr = arr.map( 
    (i) => 
    Math.round(Math.random() * 100) 
) 
console.log(arr) 
 
let min = arr[0] 
 
for (let i = 1; i < arr.length; i++) { 
 
    nextnumber = arr[i] 
 
    if (nextnumber < min) { 
 
        min = nextnumber 
    } 
 
 
} 
 
console.log('Мінімальне число' + " " + min)