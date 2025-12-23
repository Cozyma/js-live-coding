module.exports = {
  title: '配列の重複削除',
  description: `配列から重複する要素を取り除き、出現順を保持した配列を返す関数を作成してください。`,
  signature: 'function unique(arr)',
  examples: [
    { input: 'unique([1, 2, 2, 3])', expected: [1, 2, 3] },
    { input: 'unique(["a", "b", "a"])', expected: ['a', 'b'] },
  ],
  testCases: [
    { args: [[1, 2, 2, 3]], expected: [1, 2, 3] },
    { args: [[1, 1, 1]], expected: [1] },
    { args: [['a', 'b', 'a', 'c']], expected: ['a', 'b', 'c'] },
    { args: [[]], expected: [] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
  ],
};
