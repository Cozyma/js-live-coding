# JavaScript ライブコーディング

技術面談用のライブコーディング環境

## 使い方

```bash
# 問題一覧を表示
node run.js

# 問題を表示
node run.js fizzbuzz

# 解答を検証（全テストケース）
node run.js fizzbuzz --test
node run.js fizzbuzz -t      # 短縮形

# 任意の引数で実行（実装途中の確認用）
node run.js fizzbuzz --run 5
node run.js fizzbuzz -r 15
node run.js unique --run '[1,2,2,3]'   # 配列はJSON形式

# 任意のファイルで検証
node run.js fizzbuzz myfile.js
```

## ディレクトリ構成

```
.
├── run.js              # 実行スクリプト
├── blank.js            # 空のテンプレート（ここから書き始める）
├── template.js         # 回答例・学習用サンプル
├── problems/           # 問題定義
│   ├── _template.js    # 問題作成用テンプレート
│   ├── fizzbuzz.js
│   └── unique.js
└── answers/            # 問題別の解答ファイル
    ├── fizzbuzz.js
    └── unique.js
```

## ワークフロー

1. `node run.js` で問題一覧を確認
2. `node run.js <問題名>` で問題を表示
3. `answers/<問題名>.js` を編集して実装
4. `node run.js <問題名> --test` で検証

## 問題の追加

```bash
# 1. 問題ファイルを作成
cp problems/_template.js problems/myproblem.js

# 2. 解答ファイルを作成
touch answers/myproblem.js
```

問題ファイルの構造:

```javascript
module.exports = {
  title: '問題名',
  description: '問題の説明文',
  signature: 'function solve(x)',
  examples: [                        // 問題表示用の例
    { input: 'solve(1)', expected: 2 },
  ],
  testCases: [                       // 検証用テストケース
    { args: [1], expected: 2 },
    { args: [5], expected: 10 },
  ],
};
```

## 解答の書き方

`answers/<問題名>.js` に関数をエクスポート:

```javascript
function solve(n) {
  // 実装
}

module.exports = solve;
```
