// ライブコーディング用テンプレート

// 引数を受け取る
const args = process.argv.slice(2);
console.log("受け取った引数:", args);
console.log("");

// 1. 空配列の作成
const arr = [];
console.log("--- 初期設定: 空配列 ---");
console.log(`配列の作成: ${JSON.stringify(arr)}`);
console.log(`配列の長さ (初期): ${arr.length}`);

// 2. 空オブジェクトの作成 (オブジェクトリテラル構文を使用)
const obj = {};
console.log("--- 初期設定: 空オブジェクト ---");
console.log(`オブジェクトの作成: ${JSON.stringify(obj)}`);
console.log(`オブジェクトのプロパティ数: ${Object.keys(obj).length}`);

// 3. ループ処理 (forループを使用)
const loopLimit = args.length;
console.log(`--- ループ処理 (0から${loopLimit - 1}まで) ---`);

for (let i = 0; i < loopLimit; i++) {
  // ループごとの処理開始をログ出力
  console.log(`\n--- ループ開始 (i = ${i}) ---`);

  // 配列に要素を追加する例
  arr.push(args[i]);
  console.log(`配列に追加: arr.push('${args[i]}')`);
  console.log(`現在の配列: ${JSON.stringify(arr)}`);
  console.log(`現在の配列の長さ: ${arr.length}`);

  // オブジェクトにプロパティを追加する例
  const key = `key${i}`;
  const value = args[i];
  obj[key] = value;
  console.log(`オブジェクトにプロパティを設定: obj['${key}'] = '${value}'`);
  console.log(`現在のオブジェクト: ${JSON.stringify(obj)}`);

  // 条件分岐の例
  if (i % 2 === 0) { // 偶数チェック
    console.log(`i = ${i} は偶数です。`);
  } else {
    console.log(`i = ${i} は奇数です。`);
  }
}

// 4. ループ後の最終的なログ出力
console.log("\n--- ループ終了後の最終結果 ---");
console.log(`最終的な配列: ${JSON.stringify(arr)}`);
console.log(`最終的なオブジェクト: ${JSON.stringify(obj)}`);

// 5. Array.prototype.forEach() を使用した反復処理の例
console.log("\n--- Array.prototype.forEach() で要素を処理 ---");
arr.forEach((item, index) => {
  // forEachのコールバック関数は、要素、添字、配列自体を受け取る
  console.log(`要素: ${item}, 添字: ${index}`);
});

// 6. Object.entries() を使用したオブジェクトの反復処理の例
console.log("\n--- Object.entries() でオブジェクトのプロパティを処理 ---");
Object.entries(obj).forEach(([key, value]) => {
  console.log(`キー: ${key}, 値: ${value}`);
});

// 7. 二重ループの例（コメントアウト解除で実行）
// console.log("\n--- 二重ループ処理 ---");
// for (let i = 0; i < args.length; i++) {
//   for (let j = 0; j < args.length; j++) {
//     console.log(`i=${i}, j=${j}: ${args[i]} × ${args[j]}`);
//   }
// }

// 8. 二重ループで二次元配列を作成する例
// console.log("\n--- 二次元配列の作成 ---");
// const matrix = [];
// for (let i = 0; i < args.length; i++) {
//   const row = [];
//   for (let j = 0; j < args.length; j++) {
//     row.push(`${args[i]}-${args[j]}`);
//   }
//   matrix.push(row);
//   console.log(`行${i}: ${JSON.stringify(row)}`);
// }
// console.log(`完成した二次元配列: ${JSON.stringify(matrix)}`);

// 9. ネストしたオブジェクトを作成する例
// console.log("\n--- ネストしたオブジェクト ---");
// const nested = {};
// for (let i = 0; i < args.length; i++) {
//   nested[args[i]] = {};
//   for (let j = 0; j < args.length; j++) {
//     nested[args[i]][`prop${j}`] = args[j];
//   }
//   console.log(`${args[i]}: ${JSON.stringify(nested[args[i]])}`);
// }
// console.log(`完成したネストオブジェクト: ${JSON.stringify(nested, null, 2)}`);
