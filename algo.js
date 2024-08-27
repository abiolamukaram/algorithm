// iteration or looping
const numbers=[1,4,5,7,8,9,2,3,6,10]
let sum = 0
// numbers.forEach((num)=>{
//     sum += num
// })
// console.log(sum)


// another algorithm
for(let i=0;i<numbers.length; i++){
    sum += numbers[i]
}
console.log(sum)

// Linear Search
const users = [
    {
        id:1,
        name: "DML"

    },
    {
        id:2,
        name: "Abiola"

    },
    {
        id:3,
        name: "Juwon"

    },
    {
        id:4,
        name: "Bossbaby"

    }
]
// const SearchByName = (name) => {
//     return users.find((user)=> user.name === name)
    
// }

const SearchByName = (id) => {
    return users.find((user)=> user.id === id)
    
}

console.log(SearchByName("Bossbaby"))


// Binary Search
const binarySearch= (array,target)=>{
let left = 0
let right = array.length - 1
while(left <= right){
const mid = Math.floor((left + right)/2)
if (array[mid]===target){
    return mid
}
else if(array[mid]<target){
left = mid+1
}else{
right = mid -1
}
}
return -1
}

const sortedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const target = 10
console.log(binarySearch(sortedArray,target))

// bubble sort
const products = [
    {name:"beans", price:1000},
    {name:"rice", price:1500},
    {name:"spageethi", price:2000},
    {name:"noodles", price:2500},

]

const sortedProduct = products.sort((a,b) => 
b.price-a.price
)
console.log(sortedProduct)

// Merge sort
const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  };
  
  
  const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  };
  
  const unsortedArray = [34, 7, 23, 32, 5, 62];
  console.log(mergeSort(unsortedArray))