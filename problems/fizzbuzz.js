module.exports = {
  title: 'FizzBuzz',
  description: `1からnまでの数値を配列で返す関数を作成してください。
ただし:
- 3の倍数の場合は数値の代わりに "Fizz"
- 5の倍数の場合は "Buzz"
- 3と5両方の倍数の場合は "FizzBuzz"
を返すこと。`,
  signature: 'function fizzbuzz(n)',
  examples: [
    { input: 'fizzbuzz(5)', expected: [1, 2, 'Fizz', 4, 'Buzz'] },
    { input: 'fizzbuzz(15)', expected: '..., "FizzBuzz"' },
  ],
  testCases: [
    { args: [1], expected: [1] },
    { args: [3], expected: [1, 2, 'Fizz'] },
    { args: [5], expected: [1, 2, 'Fizz', 4, 'Buzz'] },
    { args: [15], expected: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'] },
  ],
};
