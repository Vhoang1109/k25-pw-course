// // cach 1: hau to
// const nameStudent1 = "student 1";
// const cityStudent1 = "HCM";

// // cach 1: hau to
// const nameStudent2 = "student 2";
// const cityStudent2 = "HN";

// // object
// const student1 = {
//     name: "student 1",
//     city: "HCM"
// };
// //CamelCase
// const student2 = {
//     name: "student 2",
//     city: "HN"
// };

// trong lp nhiều hs, miss thông tin
// PascalCase -> Class
// cach 3: Class -> Dung template
class Student {
    // thuoc tinh chung
    name: string;
    city: string;
    // email: "";
    // phoneNumber: "";

    // ham khoi tao
    constructor(name: string, city: string) {
        this.name = name;
        this.city = city;
        // Trai Dung thuoc tinh chung, Phai truyen tham so vao contructor
    }

    // method
    sayMyName() {  //it xay ra
        console.log(`My name is ${this.name}`);
    }

    // saySomeThing(message: string) { // dung nhieu
    //     console.log(`My name is ${this.name} says: ${message}`);
    // } 

//  Khong noi j co dc k, 
     saySomeThing(message?: string) { //dau ?: tham so 0 yeu cau dien, minh dien cx dc, hoac khong dien cx dc (param tuy y 0 require)
       if (message) {   
        console.log(`My name is ${this.name} says: ${message}`); // sua 1 cho la an tat ca obj, tai su dung code 
    } else {
         console.log(`Nothing`);
    }
}
}
// khoi tao bien    kieu    tham so
let student1 = new Student("Student 1", "HCM");
let student2 = new Student("Student 2", "HaNoi"); // su dung lai phuong thuc va thuoc tinh trung obj student

console.log(student1);
student1.sayMyName(); // goi ham
student2.sayMyName(); // goi ham

// student1.saySomeThing("hello ba gia"); // goi ham
student1.saySomeThing(); // goi ham