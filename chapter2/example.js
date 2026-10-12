// Chapter 2: 要素の取得サンプル
const { Builder, By } = require("selenium-webdriver");

async function main() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://example.com");

    // h1タグを取得してテキストを表示
    const h1 = await driver.findElement(By.tagName("h1"));
    console.log(`h1のテキスト: ${await h1.getText()}`);

    // リンクをすべて取得
    const links = await driver.findElements(By.tagName("a"));
    console.log(`\nリンクの数: ${links.length}`);
    for (const link of links) {
      const text = await link.getText();
      const href = await link.getAttribute("href");
      console.log(`  テキスト: ${text}, URL: ${href}`);
    }

    // pタグを取得
    const paragraphs = await driver.findElements(By.tagName("p"));
    console.log(`\n段落の数: ${paragraphs.length}`);
    for (let i = 0; i < paragraphs.length; i++) {
      const text = await paragraphs[i].getText();
      console.log(`  p[${i}]: ${text.substring(0, 50)}`);  // 最初の50文字
    }
  } finally {
    await driver.quit();
  }
}

main();
