const curry = require('../src')

const idt = a => a
const testFn = (a, b, c, d) => a + b + c + d

const curriedUnaryFn = curry(idt)
const curriedQuaternionFn = curry(testFn)

test('调用被柯里化的一元函数', () => {
  expect(curriedUnaryFn(1)).toBe(1)
  expect(curriedUnaryFn(2)).toBe(2)
})

test('成功调用被柯里化的四元函数', () => {
  expect(curriedQuaternionFn(1)(2)(3)(4)).toBe(10)
  expect(curriedQuaternionFn(1)(2, 3, 4)).toBe(10)
  expect(curriedQuaternionFn(1, 2)(3, 4)).toBe(10)
  expect(curriedQuaternionFn(1, 2, 3)(4)).toBe(10)
  expect(curriedQuaternionFn(1, 2, 3, 4)).toBe(10)
})
