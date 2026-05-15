// function: Hàm
function helloWorld() {
    console.log("Hello World!")
};

helloWorld(); // gọi hàm

// In ten hoc vien
function printStudentName(studentName) {
    console.log(`Ten hoc vien: ${studentName}`)
};

printStudentName("Viet Hoang"); // truyen tham so

// Viet ham tinh tong > tra ve tong cua a va b
function caculate(a, b) {
    const sum = a + b;
    return sum;
}

const total = caculate(5, 6);
console.log(total);



//mang 
let studentArr = ["han", "yen", "trang","my","linh"]


                    // truyen
function printArrChar(studentArr) {
    for (let i = 0; i < studentArr.length; i++) {
        console.log(studentArr[i]);
    }
}

printArrChar(studentArr)