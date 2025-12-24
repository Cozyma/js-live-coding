// FizzBuzz の解答
// 実行: node run.js fizzbuzz

/**
 * 1からnまでの数値を配列で返す
 * - 3の倍数: "Fizz"
 * - 5の倍数: "Buzz"
 * - 3と5両方の倍数: "FizzBuzz"
 */
function fizzbuzz(n) {
  console.log("受け取った引数:", n);
  const answer = []
  for (let i = 1; i < n+1; i++) {
    let item = i
    const isFizz = i % 3 === 0
    const isBuzz = i % 5 === 0
    if (isFizz) {
      item = "Fizz"
    }
    if (isBuzz) {
      item = "Buzz"
    }
    if (isBuzz && isFizz) {
      item = "FizzBuzz"
    }
    answer.push(item)
  }
  return answer

}

module.exports = fizzbuzz;