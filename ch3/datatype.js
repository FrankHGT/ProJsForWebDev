function typeofDemo() {
    let message = "some string";
    console.log(typeof message);
    console.log(typeof(message));
    console.log(typeof 95);
    console.log('typeof null:', typeof null);
}

function undefinedType() {
    // undefined是声明了但没有赋值过，并不是未声明变量
    let message;
    console.log('message if undefined:', message == undefined);
    // let age;
    // console.log(age); // 报错

    // 对于未声明的变量只能执行一个有用的操作
    // 不过有一点比较迷惑，就是两种情况的typeof都是undefined
    console.log('typeof age:', typeof age);
    console.log('typeof message:', typeof message);

    // undefined值作为if输入时会判断为false
    if (message) {
        console.log('message is not undefined');
    }
    // 未声明变量不能这么用
    // if (age) {
    //     console.log('age is not undefined');
    // }
    // undefined值类型就是undefined
    console.log('typeof undefined:', typeof undefined);
}

function nullType() {
    // null是一个特殊值，它表示一个空对象指针
    // 这就是为什么typeof null是object
    let message = null;
    console.log('message if null:', message == null);
    console.log('typeof message:', typeof message);
    console.log('typeof null:', typeof null);
    // undefined由null派生而来，因此下面等式始终为true，这是ECMA-262定义
    // GPT回答：
    // 这段话主要是在讨论编程语言JavaScript中的一些特殊值和特性。
    // JavaScript语言中，'undefined' 和 'null' 都是特殊的数据类型。
    // 'undefined' 表示一个变量已经被声明，但是没有赋值。也就是说，它表示“缺少值”或“未定义值”。
    // 而 'null' 意味着一个变量被明确赋予了无值状态，或者说它表示“没有对象”。虽然 'null' 也代表了缺乏值，但这是一个主动赋予的状态。
    // ECMA-262 是JavaScript的规范，它规定了'undefined'和'null'这两个值在某些情况下是可以被看作是相等的。在非严格等于(==)比较时，
    // 'undefined' 和 'null' 是相等的。例如，当我们执行 'undefined == null' 时，结果会是 'true'。
    // 言归正传，"undefined值是由null值派生而来的"这句话可能在一些方式上有误导。
    // 实质上，'undefined' 和 'null' 在JavaScript的背后设计中并无派生关系。它们都是它们自己独特的数据类型，只是在非严格比较操作中被视为相等。
    console.log('null == undefined:', null == undefined);

    // null也是一个假值
    if (!message) {
        console.log('message is null');
    }
}

function booleanType() {
    let message = "Hello world! ";
    let messageAsBoolean = Boolean(message);
    console.log('messageAsBoolean', messageAsBoolean);
    // if等流控制语句会自动做类型转换: if (Boolean(message))
    if (message) {
        console.log("message is not empty");
    }
}

function numberType() {
    console.log('Number.MIN_VALUE:', Number.MIN_VALUE);
    console.log('Number.MIN_VALUE:', Number.MAX_VALUE);
    console.log('Number.NEGATIVE_INFINITY:', Number.NEGATIVE_INFINITY);
    console.log('Number.POSITIVE_INFINITY:', Number.POSITIVE_INFINITY);
    // 0除0在ECMAScript中不会abort，而是会返回NaN
    console.log('0 / 0 = ', 0 / 0);
    // 如果分子非0，将返回Infinity
    console.log('5 / 0 =', 5 / 0);
    // 涉及NaN的计算，结果仍然是NaN
    console.log('NaN / 10 =', NaN / 10);
    // NaN不等于任何值，包括NaN自身
    console.log('NaN == NaN:', NaN == NaN);

    parseIntTest();
}

function parseIntTest() {
    debugger;
    let num1 = parseInt("1234blue");    // 1234
    let num2 = parseInt("");            // NaN
    let num3 = parseInt("0xA");         // 10
    let num4 = parseInt(22.5);          // 22
    let num44 = parseInt("22.5");       // 22
    let num5 = parseInt("70");          // 70
    let num6 = parseInt("0xf");         // 15
}

function stringType() {
    let text = "This is the letter sigma: \u03a3.";
    console.log(text);
    console.log('length of text:', text.length)

    // 重新申请空间，之前的会销毁掉
    let lang = "Java";
    lang = lang + "Script";

    // type to string
    let age = 11;
    let ageAsString = age.toString();
    let found = true;
    let foundAsString = found.toString();
}

function main() {
    typeofDemo();
    undefinedType();
    nullType();
    booleanType();
    numberType();
    stringType();
}

main();