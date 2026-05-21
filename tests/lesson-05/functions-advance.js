// Arrow func
// co tham so co return
const add = (a, b) => {
    return a + b;
}
console.log(add(2, 6));

//khong co tham so, khong co return
const greet = () => {
    console.log("hello anh em");
}
greet();
// note: until, map cung dung arrow func


// Anonymous functions (hàm 0 tên sd 1 l)
//bien               prara co truyen bth
let greet = function (){
    console.log("hello anh em");
}
greet();