// Chapter 4: 待機処理サンプル
const { Builder, By, Key, until } = require("selenium-webdriver");

async function main() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    // Google検索
    await driver.get("https://www.google.com");

    const searchBox = await driver.findElement(By.name("q"));
    await searchBox.sendKeys("Selenium");
    await searchBox.sendKeys(Key.RETURN);

    // 明示的待機: タイトルに "Selenium" が含まれるまで最大10秒待つ
    await driver.wait(until.titleContains("Selenium"), 10000);
    console.log(`タイトル確認OK: ${await driver.getTitle()}`);

    // 明示的待機: 検索結果の要素が現れるまで待つ
    const results = await driver.wait(
      until.elementLocated(By.id("search")),
      10000
    );
    console.log("検索結果エリアが見つかりました");

    // 結果内のリンクを最初の3件取得
    const links = await results.findElements(By.tagName("a"));
    console.log(`\n最初の3件のリンク:`);
    for (let i = 0; i < Math.min(3, links.length); i++) {
      const text = await links[i].getText();
      if (text) console.log(`  ${i + 1}. ${text.substring(0, 60)}`);
    }
  } finally {
    await driver.quit();
  }
}

main();
