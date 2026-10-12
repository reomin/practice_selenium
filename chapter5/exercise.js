// Chapter 5: 総合課題
//
// 【総合課題】書籍情報収集スクリプト
//
// https://books.toscrape.com を使って、以下を実装してください。
//
// Step 1: トップページを開く
//
// Step 2: 全カテゴリのリンクを取得する
//         - 左サイドバーの <ul class="nav-list"> の中にある <a> タグ
//         - By.css("ul.nav-list li a") で取得できます
//         - カテゴリ名とURLを配列として保持する
//         - 最初の "Books" カテゴリは除き、残りのカテゴリ一覧を表示する
//
// Step 3: 最初のカテゴリページを開く
//         - Step 2 で取得した最初のカテゴリ（index=1）のURLに遷移する
//
// Step 4: そのカテゴリの本を全て取得する
//         - <article class="product_pod"> を全て取得する
//         - 各本から以下の情報を取得して表示する:
//           - タイトル: h3 > a の title 属性
//           - 価格: <p class="price_color"> のテキスト
//           - 評価: <p class="star-rating"> の class 属性（例："star-rating Three"）
//
// Step 5: スクリーンショットを "chapter5_result.png" として保存する
//
// 実装のヒント:
//   - findElements はページ遷移後、要素を直接 findElements で取得してOK
//   - リンクのhref取得後にページ遷移すると要素が stale になるので、
//     先にURLを全て文字列として収集してからループで遷移する
//   - class属性の取得: await element.getAttribute("class")
//
// 採点基準:
//   - [ ] カテゴリ一覧が表示されている
//   - [ ] 最初のカテゴリページに正しく遷移している
//   - [ ] 本のタイトル・価格・評価が全て表示されている
//   - [ ] スクリーンショットが保存されている
//   - [ ] await が全非同期処理に付いている
//   - [ ] try/finally でブラウザを安全に閉じている
//   - [ ] （ボーナス）明示的待機（until）を活用している

const { Builder, By, until } = require("selenium-webdriver");
const { writeFileSync } = require("fs");

async function main() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    // Step 1
    console.log("=== Step 1: ページを開く ===");
    // TODO:

    // Step 2
    console.log("\n=== Step 2: カテゴリ一覧を取得 ===");
    // TODO:

    // Step 3
    console.log("\n=== Step 3: カテゴリページに遷移 ===");
    // TODO:

    // Step 4
    console.log("\n=== Step 4: 書籍情報を取得 ===");
    // TODO:

    // Step 5
    console.log("\n=== Step 5: スクリーンショット保存 ===");
    // TODO:
  } finally {
    await driver.quit();
  }
}

main();
