// trim()

// let str = "   K16 Playwright    ";
// console.log(str);

// str = str.trim();

// console.log(str);

// toLowerCase()  va toUpperCase()

// str = str.toLowerCase();
// console.log(str);
// console.log(str.toUpperCase());

// includes() -> boolen
// console.log(str.includes("K16"))
// console.log(str.includes("k16"))

//replace()
// str = str.replace("Playwright", "Cypress");
// console.log(str);

// split()
// console.log(str.split("")); // ['K16', 'Playwright' ]
const emails = "emailA@gmail.com, emailB@gmail.com";
console.log(emails.split(",")); // ['emailA@gmai.com', '[emailB@gmail.com]']
console.log(emails.split(".")); //  ['emailA@gmai', 'com, emailB@gmail', 'com'] (cat dau cham thanh 3 phan tu)

//substring

// let str = "Hello World!";
// console.log(str.substring( 0, 5));
// console.log(str.substring( 6))

//indexOf
let str ="Hello World!";
console.log(str.indexOf("World!")); // vi tri 6
console.log(str.indexOf("Hello")); // -1 ( o tim thay ptu)