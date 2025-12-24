#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('使い方: node run.js <問題名> [オプション]');
  console.log('');
  console.log('例:');
  console.log('  node run.js fizzbuzz            # 問題を表示');
  console.log('  node run.js fizzbuzz --test     # answers/fizzbuzz.js で検証');
  console.log('  node run.js fizzbuzz --run 5    # 引数5で実行して結果を確認');
  console.log('  node run.js fizzbuzz answer.js  # 指定ファイルで検証');
  console.log('');
  console.log('利用可能な問題:');
  const problemsDir = path.join(__dirname, 'problems');
  if (fs.existsSync(problemsDir)) {
    fs.readdirSync(problemsDir)
      .filter(f => f.endsWith('.js') && !f.startsWith('_'))
      .forEach(f => console.log(`  - ${f.replace('.js', '')}`));
  }
  process.exit(0);
}

const problemName = args[0];
const problemPath = path.join(__dirname, 'problems', `${problemName}.js`);

// オプションの処理
let answerFile = null;
let runArgs = null;

if (args[1] === '--test' || args[1] === '-t') {
  answerFile = path.join(__dirname, 'answers', `${problemName}.js`);
} else if (args[1] === '--run' || args[1] === '-r') {
  // --run: 任意の引数で実行
  answerFile = path.join(__dirname, 'answers', `${problemName}.js`);
  runArgs = args.slice(2).map(arg => {
    try {
      return JSON.parse(arg);
    } catch {
      return arg; // パースできなければ文字列として扱う
    }
  });
} else if (args[1]) {
  answerFile = args[1];
}

if (!fs.existsSync(problemPath)) {
  console.error(`問題 "${problemName}" が見つかりません`);
  process.exit(1);
}

const problem = require(problemPath);

if (!answerFile) {
  // 問題を表示
  console.log('='.repeat(50));
  console.log(`問題: ${problem.title}`);
  console.log('='.repeat(50));
  console.log('');
  console.log(problem.description);
  console.log('');
  console.log('関数シグネチャ:');
  console.log(`  ${problem.signature}`);
  console.log('');
  console.log('例:');
  problem.examples.forEach(ex => {
    console.log(`  ${ex.input} => ${JSON.stringify(ex.expected)}`);
  });
  process.exit(0);
}

// --run モード: 任意の引数で実行
if (runArgs !== null) {
  if (!fs.existsSync(answerFile)) {
    console.error(`解答ファイル "${answerFile}" が見つかりません`);
    process.exit(1);
  }
  const answer = require(path.resolve(answerFile));
  console.log(`実行: ${problem.title}`);
  console.log(`引数: ${JSON.stringify(runArgs)}`);
  console.log('-'.repeat(50));
  try {
    const result = answer(...runArgs);
    console.log('結果:', JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('エラー:', err.message);
    process.exit(1);
  }
  process.exit(0);
}

// 解答を実行・検証
if (!fs.existsSync(answerFile)) {
  console.error(`解答ファイル "${answerFile}" が見つかりません`);
  console.error('');
  console.error('ヒント: answers/ ディレクトリに解答を作成してください');
  console.error(`  例: answers/${problemName}.js`);
  process.exit(1);
}

const answer = require(path.resolve(answerFile));

console.log(`テスト実行: ${problem.title}`);
console.log(`解答ファイル: ${answerFile}`);
console.log('-'.repeat(50));

let passed = 0;
let failed = 0;

problem.testCases.forEach((tc, i) => {
  try {
    const result = answer(...tc.args);
    const expected = tc.expected;
    const isEqual = JSON.stringify(result) === JSON.stringify(expected);

    if (isEqual) {
      console.log(`✓ テスト ${i + 1}: PASS`);
      passed++;
    } else {
      console.log(`✗ テスト ${i + 1}: FAIL`);
      console.log(`  入力: ${JSON.stringify(tc.args)}`);
      console.log(`  期待: ${JSON.stringify(expected)}`);
      console.log(`  結果: ${JSON.stringify(result)}`);
      failed++;
    }
  } catch (err) {
    console.log(`✗ テスト ${i + 1}: ERROR`);
    console.log(`  ${err.message}`);
    failed++;
  }
});

console.log('-'.repeat(50));
console.log(`結果: ${passed}/${passed + failed} テスト成功`);
process.exit(failed > 0 ? 1 : 0);
