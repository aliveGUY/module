const test = require("node:test");
const func1 = require('./module')

test("will pass", () => {
    const arr = func1([1, 2, 3, 4])
    const exp = [11, 12, 13, 14]

    if (JSON.stringify(arr) == JSON.stringify(exp)) {
        return console.log('success')
    }

    throw new Error("failed")
});
