// 不初始化情况下，默认值为undefined
var message;

var message = "hi";
// 弱类型，变量随意赋值
message = 100;

function test() {
    // 严格模式下，给未声明的变量赋值会直接报错ReferenceError
    // "use strict";

    // 局部变量，函数退出时离开作用域
    var messageLocal = "hi";

    // 全局变量，函数退出时不离开作用域
    // 不推荐这么定义全局变量，可维护性几乎为0
    messageGlobal = "hi messageGlobal";
}
test();
// not defined
// console.log(messageLocal);
console.log(messageGlobal);

// 变量声明提升
function test2() {
    console.log(message);
    // 只提升声明，不提升赋值
    var message = "hi messageGlobal";
}
test2();

function foo() {
    // 反复只用var声明，相当于提升至头声明一次，
    // 然后反复赋值
    var age = 16;
    var age = 26;
    var age = 36;
    console.log(age);
}
foo();

function scopeDiff() {
    if (true) {
        // var作用域以函数为单位
        var name = 'Matt';
        console.log(name);
    }
    console.log(name);
    if (true) {
        // let作用域以块为单位
        let age = 26;
        console.log(age);
    }
    console.log(age);
}
// scopeDiff();

function multiDeclareDiff() {
    var name;
    var name;
    // let不允许冗余声明
    let age;
    // let age;
}

function hoistDiff() {
    console.log(age);
    var age = 28;

    // let声明的变量不会被提升
    // i.e. temporal dead zone 暂时性死区
    // console.log(name);
    let name = 'frank';
}
hoistDiff();

// 全局作用域中var声明的变量会自动成为window对象的属性
// let声明的变量则不会
var nameGlobal = 'Frank';
console.log('window.nameGlobal:', window.nameGlobal);
let ageGlobal = 28;
console.log('window.ageGlobal:', window.ageGlobal);

function forLoop() {
    // for循环中声明的var变量会外泄至函数作用域
    for (var i = 0; i < 5; i ++) {
        var k = 0;
    }
    console.log(i, k);
    // let声明的变量就不会
    for (let j = 0; j < 5; j ++) {

    }
    // console.log(j);

    for (var i = 0; i < 5; i ++) {
        // 1. setTimeout会创建一个闭包，i是对外层作用域i的引用
        // 2. setTimeout会加入事件队列，在所有同步代码块执行完毕之前，里面的代码都不会被执行
        // setTimeout设定的时间并不是它真正的延迟时间，而是它被加入到任务队列中等待执行的时间
        // 因此等到执行时，i已经变成5，所以输出时5个5
        setTimeout(() => console.log(i), 0)
    }

    for (let i = 0; i < 5; i ++) {
        // 因为let具有块作用域，每次循环绑定的i是不同的
        setTimeout(() => console.log(i), 0)
    }

}
forLoop();

function constVar() {
    const age = 26;
    // const为常量，声明时赋值，之后不许在赋值
    // age = 36;

    // 但是在const仅限变量自身的引用，对象内部的改变不算
    const person = {};
    person.name = 'frank';

    // const非常适合搭配for-in for-of使用
    // 使得绑定值不可变
    for (const key in { a: 1, b: 2}) {
        console.log(key);
    }
    for (const value of [1, 2, 3, 4, 5]) {
        console.log(value);
    }
}
constVar();