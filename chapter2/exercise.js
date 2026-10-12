// Chapter 2: 課題
//
// 【課題 2-1】By.tagName を使う
// - https://example.com を開く
// - <p> タグを全て取得して、それぞれのテキスト（最初の40文字）を表示する
// - <a> タグを全て取得して数を表示する
//
// 【課題 2-2】By.linkText を使う
// - https://example.com を開く
// - "Learn more" というリンクを By.linkText で取得する
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
//   - [ ] 課題2-1: 全p要素・aタグの数が取得できている
//   - [ ] 課題2-2: linkText でリンクを取得し href を表示している
//   - [ ] 課題2-3: article の数が正しい / タイトルが表示されている
//   - [ ] await が正しく使えている
//   - [ ] try/finally でブラウザを安全に閉じている

const { Builder, By } = require("selenium-webdriver");

async function main() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://example.com");
    // 課題 2-1
    console.log("=== 課題 2-1 ===");
    // TODO: ここに実装する
    const pElements = await driver.findElements(By.tagName("p"));
    const aElements = await driver.findElements(By.tagName("a"));

    for(const p of pElements ){
      const text = await p.getText();
      console.log(text.substring(0,40));
    }

    console.log(`aタグの数: ${aElements.length}`);


    // 課題 2-2
    console.log("\n=== 課題 2-2 ===");
    const linkText = await driver.findElement(By.linkText("Learn more"));
    const href = await linkText.getAttribute("href");
    console.log(href);

    // 課題 2-3
    await driver.get("https://books.toscrape.com");
    const articles = await driver.findElements(By.tagName("article"));
    console.log("\n=== 課題 2-3 ===");
    
    for(const article of articles.slice(0,3)){
      const h3 = await article.findElement(By.tagName("h3"));
      const text = await h3.getText();
      console.log(text);
    }
  } finally {
    await driver.quit();
  }
}

main();
