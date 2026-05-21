//for .. in
// let product = {
//     banana: 20,
//     Apple: 30,
//     Orange: 15,
//     // property: undefined
// }

// // dung for.. in
// for(let property in product) {
//     console.log(property);
//     console.log(product[property]);

// }

// console.log(product.property);

//lay gia tri cua thuoc tinh
// console.log(product.banana); // cach 1
// console.log(product["banana"]); // cach 2


// with array
// const arr = ["a", "b", "c"];
// // 
// for (let i in arr) {
//     console.log(i);
//     console.log(arr[i]); // in ra gia tri abc
// }


// forEach -> dung cho array

/*
array.forEach((value, index) => {
    console.log(`${index}: ${value});
    } )
*/

// const arr = ["a", "b", "c"];
// arr.forEach((value, index) => {
//     console.log(`${index}: ${value}`);
//     })


// for ... of  -> dung cho array ( tuong tu nhu for in lap qua cac phan tu)

const arr =  ["a", "b", "c"];
for (let value of arr) {
    console.log(value);
}