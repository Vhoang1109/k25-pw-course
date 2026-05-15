let student1 = "Han";
let student2 = "Yen";
//                  0       1       2       3        4       5   6     7
const studentArr = ["Hanh", "Yen", "Linh", "Trang", "Binh", false, 5, { student: { age: 18 } }];

const count = studentArr.length;
console.log(count);

console.log(studentArr[3]);

// vd tìm số index, với 1 phần tử 0 xuất hiện trong mảng in ra -1
console.log(studentArr.indexOf("trádas"));