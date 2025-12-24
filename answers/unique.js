// 配列の重複削除 の解答
// 実行: node run.js unique

/**
 * 配列から重複する要素を取り除き、出現順を保持した配列を返す
 */
function unique(arr) {
  // ここに実装を書く
  console.log("引数:", arr);
  const answer = []
  arr.forEach((item, index) => {
  // forEachのコールバック関数は、要素、添字、配列自体を受け取る
  console.log(`要素: ${item}, 添字: ${index}`);
  const dupCount = arr.filter(thing => thing === item).length
  console.log(dupCount);
  if (dupCount === 1){
    answer.push(item)
    return
  };
    if (dupCount > 1 && !answer.includes(item)){
    answer.push(item)
    return
  };

});

  return answer

}

module.exports = unique;
