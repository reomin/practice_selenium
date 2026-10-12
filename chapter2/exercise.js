// Chapter 2: 課題
//
// 【課題 2-1】By.tagName を使う
// - https://example.com を開く
// - <h1> タグのテキストを取得して表示する
// - <p> タグを全て取得して、それぞれのテキストを表示する
//
// 【課題 2-2】By.linkText を使う
// - https://example.com を開く
// - "More information..." というリンクを By.linkText で取得する
// - そのリンクの href 属性（URL）を表示する
//
// 【課題 2-3】findElements を使う
// - https://books.toscrape.com を開く
//   （スクレイピング練習用の本の一覧サイト）
// - <article> タグを全て取得して数を表示する
// - 最初の3冊の h3 タグのテキスト（本のタイトル）を表示する
//   ヒント: article の中に h3 がある
//         await articleElement.findElement(By.tagName("h3"))
//
// 採点基準:
//   - [ ] 課題2-1: h1テキスト・全p要素が取得できている
//   - [ ] 課題2-2: linkText でリンクを取得し href を表示している
//   - [ ] 課題2-3: article の数が正しい / タイトルが表示されている
//   - [ ] await が正しく使えている
//   - [ ] try/finally でブラウザを安全に閉じている

const { Builder, By } = require("selenium-webdriver");

async function main() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    // 課題 2-1
    console.log("=== 課題 2-1 ===");
    // TODO: ここに実装する

    // 課題 2-2
    console.log("\n=== 課題 2-2 ===");
    // TODO: ここに実装する

    // 課題 2-3
    console.log("\n=== 課題 2-3 ===");
    // TODO: ここに実装する
  } finally {
    await driver.quit();
  }
}

main();
