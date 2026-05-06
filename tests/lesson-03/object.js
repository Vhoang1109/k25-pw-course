/* 
- Student: name = linh, age: 20, role: QA, address: Ha Noi, class: K25
*/

let studentName = "Linh";
let studentAge = 20;
let studentRole = "QA";

let student = {
    name: "Linh",
    age: 20,
    role: "QA",
    address: {
         number: 10,
         street: "Thanh Tri"
    },
   
    isLearningPlaywright: true
};

//Truy xuat thuoc tinh cua doi tuong
// console.log(`Student: ${student}`);
// console.log(`Student name: ${student.name}`);
// console.log(`Student name: ${student.address.street}`);

// co te dung ngoac vuong
console.log(`Student name: ${student["name"]}`);
console.log(`Student street: ${student["address"]["street"]}`);
console.log(`Student class: ${student["class"]}`);

student.class = "K25";
console.log(`Student class: ${student["class"]}`);

student.class = "K25 Playwright automation test";
console.log(`Student class: ${student["class"]}`);