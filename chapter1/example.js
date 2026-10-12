// Chapter 1: 最初のSeleniumコード
const { Builder } = require("selenium-webdriver");

async function main() {
  // Chromeブラウザを起動する
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    // Googleを開く
    await driver.get("https://www.google.com");

    // タイトルを取得して表示する
    const title = await driver.getTitle();
    console.log(`ページタイトル: ${title}`);

    // 現在のURLを取得して表示する
    const url = await driver.getCurrentUrl();
    console.log(`現在のURL: ${url}`);
  } finally {
    // ブラウザを閉じる（エラーが起きても必ず実行される）
    await driver.quit();
  }

  console.log("完了！");
}

main();
