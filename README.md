# JavaScript ライブコーディング

技術面談用のライブコーディング環境

## 使い方

```bash
# 問題一覧を表示
node run.js

# 問題を表示
node run.js fizzbuzz

# 解答を検証
node run.js fizzbuzz answer.js
```

## 問題の追加

`problems/` ディレクトリにファイルを追加:

```javascript
module.exports = {
  title: '問題名',
  description: '問題の説明文',
  signature: 'function foo(x)',
  examples: [
    { input: 'foo(1)', expected: 2 },
  ],
  testCases: [
    { args: [1], expected: 2 },
    { args: [5], expected: 10 },
  ],
};
```

## 解答の書き方

`answer.js` または任意のファイルに関数をエクスポート:

```javascript
module.exports = function(n) {
  // 実装
};
```
