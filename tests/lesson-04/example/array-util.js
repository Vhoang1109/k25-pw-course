// map

// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.map(num => num * 2);
// console.log(newNumbers);


// filter 
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.filter(num => num % 2 === 0); // loc cac so chia het cho 2
// console.log(newNumbers);

// find
// let numbers = [1, 2,  3, 4, 5];
// let firstEven = numbers.find(num => num % 2 === 0); 
// console.log(firstEven);

// reduce()
// let numbers = [1, 2, 3, 4, 5]; // tinh tong cac phan tu
// let sum = numbers.reduce((total, num) => total + num, 0) //0 la gia tri khoi tao
// console.log(sum);

/*
- total: bien nhan gia tri duy nhat
- num : cac phan tu trong mang
- 0 : gia tri khoi tao dau tien cho bien total

b1 gan total =0 sau do thuc hien qua cac vong lap
total= 0 + 1 = 1 => total = 1
1+2 = 3 
3+3 = 6
6 + 4 = 10
10+ 5 = 15
*/

// some( )

// let numbers = [1,2 ,3, 5, 13]; 
// //tim phan tu thoa man dieu kien tra ra true hay false
// let hasEven = numbers.some(num => num % 2 === 0); 
// console.log(hasEven);


// every()
// let numbers = [2,4,6,8,9]; 
// //tim phan tu thoa man dieu kien tra ra true hay false
// let hasEven = numbers.every(num => num % 2 === 0); 
// console.log(hasEven);

// push
// let numbers = [2, 2, 2, 4, 6]
// numbers.push(7, 8);
// console.log(numbers);

//shift
// let numbers = [2, 2, 2, 4, 6]
// let firstNumber = numbers.shift();
// console.log(firstNumber); // so 2 la so dau tien bi day ra
// console.log(numbers);

// sort
/*
Tips
Mac dinh: a la so dung truoc, b la so dung sau
- Tang dan dung: sort((a, b) => a - b)
a - b = negative (am) => a < b => a dung truoc b
a - b = positive (duong) => a > b => b dung truoc a

- Giam dan dung: sort((a, b) => b - a)
b - a = negative = b  < a => a dung truoc b
b - a = positive = b  > a => b dung truoc a
*/

let numbers = [1,2,3,4,5];
numbers.sort(); // tra be tu be den lon
console.log(numbers);

numbers.sort((a, b) => b - a); // tra tu lon den be
console.log(numbers);