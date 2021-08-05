// 這是 arrow function
const f = () => {
    console.log('hello world');
}

// 這是解構範例
var d = { a: 1, b: 2, c: 3 };
var { a, ...rest } = d;

// 呼叫 f
f();

// 輸出 a
console.log(a);

// 輸出 {b,c}
console.log(rest);
