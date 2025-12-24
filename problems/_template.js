// 問題テンプレート
// 使い方: このファイルをコピーして問題名.js にリネーム

module.exports = {
  title: '問題タイトル',
  description: `問題の説明をここに書く。
複数行も可能。`,
  signature: 'function solve(x)',
  examples: [
    { input: 'solve(1)', expected: 2 },
    { input: 'solve(5)', expected: 10 },
  ],
  testCases: [
    { args: [1], expected: 2 },
    { args: [5], expected: 10 },
    // テストケースを追加
  ],
};
