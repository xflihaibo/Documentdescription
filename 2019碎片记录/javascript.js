// https://juejin.im/post/5d0644976fb9a07ed064b0ca

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');
//12
console.log(lydia);
console.log(sarah);



事件传播的三个阶段是什么？
捕获 > 目标 > 冒泡


基础对象指原型链终点的对象。基础对象的原型是null


function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`; //["", "is", "years old"] Lydia 21
 eval("10*10+5");


const obj = { a: "one", b: "two", a: "three" };
console.log(obj); { a: "three", b: "two" }
 





