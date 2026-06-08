const name = "shaghayegh";
console.log(typeof name);

const value = 40;
console.log(typeof value);

const posetive = false;
console.log(typeof posetive);

const userInfo = {
  FirstName: "shaghayegh",
  LastName: "tavakoli",
  age: 24,
  isMarried: false,
};
console.log(userInfo);

const car = {
  color: "red",
  year: "2002",
  price: 200000,
  brand: "bmw",
};
car.year = 2004;
const selectedKey = "color";
car["color"] = "blue";
console.log(car.color);

const family = ["sara", "ali", "mani", "sepehr", "negin"];
console.log(family[3]);

function hello() {
  console.log("salam");
}
hello();

function salam(firstName) {
  console.log("hello " + firstName);
}
salam("shaghayegh");

function colorName(color) {
  console.log(`This is a  ${color} ball.`);
}
colorName("red");
colorName("green");
colorName("gray");

let a = 82;
let b = 7;
console.log(a + b);
console.log(a % b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a ** b);
console.log(++b);
console.log(--a);

const x = 8 + 12 * 21;
console.log(x);

let c = 7;
let d = 5;
c += 4;
console.log(c);
d -= 7;
console.log(d);

let e = 1;
console.log(e > 1);
console.log(e >= 1);
console.log(e < 1);
console.log(e === 1);
console.log(e !== 1);
console.log(e == "1");
