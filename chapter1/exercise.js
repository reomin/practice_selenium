// Chapter 1: 課題
//
// 【課題 1-1】
// - https://example.com を開いてください
// - ページのタイトルを console.log で表示してください
// - 最後にブラウザを閉じてください
//
// 【課題 1-2】
// - ブラウザを起動してから閉じるまでの処理を
//   try / finally を使って安全に書いてください
//   （エラーが発生しても必ず driver.quit() が呼ばれるように）
//
// ヒント:
//   try {
//     // 処理
//   } finally {
//     await driver.quit();
//   }
//
// 採点基準:
//   - [ ] ブラウザが起動できている
//   - [ ] 正しいURLに遷移できている
//   - [ ] タイトルが表示されている
//   - [ ] try/finally で安全に閉じている
//   - [ ] await が正しく使えている

const { Builder } = require("selenium-webdriver");

async function main() {
  // TODO: 課題 1-1 と 1-2 をここに実装する
  let driver;
  try{
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://example.com");
    const title = await driver.getTitle();
    console.log(title);
  }finally{
    await driver.quit();
  }
}

main();
