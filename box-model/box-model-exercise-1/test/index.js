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
