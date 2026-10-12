// Chapter 3: 要素操作サンプル（Google検索）
const { Builder, By, Key } = require("selenium-webdriver");
const { writeFileSync } = require("fs");

async function main() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    // Googleを開く
    await driver.get("https://www.google.com");

    // 検索ボックスを取得（name="q"）
    const searchBox = await driver.findElement(By.name("q"));

    // "Selenium JavaScript" と入力してEnterキーを押す
    await searchBox.sendKeys("Selenium JavaScript");
    await searchBox.sendKeys(Key.RETURN);

    // 少し待つ（Chapter 4で正しい待機方法を学びます）
    await driver.sleep(2000);

    // タイトルを表示
    const title = await driver.getTitle();
    console.log(`タイトル: ${title}`);

    const url = await driver.getCurrentUrl();
    console.log(`URL: ${url}`);

    // スクリーンショットを保存
    const screenshot = await driver.takeScreenshot();
    writeFileSync("search_result.png", screenshot, "base64");
    console.log("スクリーンショットを保存しました: search_result.png");
  } finally {
    await driver.quit();
  }
}

main();
