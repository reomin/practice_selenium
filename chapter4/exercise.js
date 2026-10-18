// Chapter 4: 課題
//
// 【課題 4-1】暗黙的待機を設定する
// - https://the-internet.herokuapp.com/dynamic_loading/1 を開く
// - 暗黙的待機を 10秒 に設定する
// - "Start" ボタン（id="start" の中のbutton）をクリックする
// - id="finish" の <h4> タグのテキストを表示する
//
// 【課題 4-2】明示的待機を使う（★推奨の書き方）
// - 同じページを開く
// - 今度は driver.sleep() も暗黙的待機も使わず、
//   until.elementLocated と until.elementIsVisible だけを使って
//   課題 4-1 と同じ結果を表示する
//
//   ヒント:
//     const finish = await driver.wait(
//       until.elementLocated(By.id("finish")),
//       10000
//     );
//     await driver.wait(until.elementIsVisible(finish), 5000);
//
// 【課題 4-3】URLの変化を待つ
// - https://the-internet.herokuapp.com/login を開く
// - tomsmith / SuperSecretPassword! でログインする
// - until.urlContains を使って、URLに "secure" が含まれるまで待つ
// - ログイン後のURLとh2テキストを表示する
//
// 採点基準:
//   - [ ] 課題4-1: 暗黙的待機が設定されている / finish の h4 が表示されている
//   - [ ] 課題4-2: sleep も暗黙的待機も使わず until だけで実装できている
//   - [ ] 課題4-3: until.urlContains が正しく使えている
//   - [ ] try/finally でブラウザを安全に閉じている

const { Builder, By, until } = require("selenium-webdriver");

async function main() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    // 課題 4-1
    console.log("=== 課題 4-1 ===");
    // TODO: ここに実装する
    await driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");
    await driver.manage().setTimeouts({
      implicit: 10000
    });

    const start = await driver.findElement(By.id("start"));
    const button = await start.findElement(By.tagName("button"));
    await button.click();

    const finish = await driver.findElement(By.id("finish"));
    const h4 = await finish.findElement(By.tagName("h4"));
    console.log(await h4.getText());

    // 課題 4-2
    console.log("\n=== 課題 4-2 ===");
    // TODO: ここに実装する
    await driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");
    
    const start2 = await driver.wait(
      until.elementLocated(By.id("start")),
      10000
    );

     await driver.wait(
      until.elementIsVisible(start2),
      5000
    );

    const button2 = await start2.findElement(By.tagName("button"));
    await button2.click();
    // const button = await start.findElement(By.tagName("button"));
    // await button.click();

    const finish2 = await driver.wait(
      until.elementLocated(By.id("finish")),
      10000
    );

     await driver.wait(
      until.elementIsVisible(finish2),
      5000
    );
    const h42 = await finish2.findElement(By.tagName("h4"));

    console.log(await h42.getText());


    // 課題 4-3
    console.log("\n=== 課題 4-3 ===");
    // TODO: ここに実装する
    await driver.get("https://the-internet.herokuapp.com/login");

    const username = await driver.wait(
      until.elementLocated(By.id("username")),
      10000
    );
    await driver.wait(
      until.elementIsVisible(username),
      5000
    );
    await username.sendKeys("tomsmith");


    const password = await driver.wait(
      until.elementLocated(By.id("password")),
      10000
    );
    await driver.wait(
      until.elementIsVisible(password),
      5000
    );
    await password.sendKeys("SuperSecretPassword!");

    const radius = await driver.wait(
      until.elementLocated(By.tagName("button")),
      10000
    );
    await driver.wait(
      until.elementIsVisible(radius),
      5000
    );

    await radius.click();

    await driver.wait(
      until.urlContains("secure"),
      10000
    );

    const h2 = await driver.wait(
      until.elementLocated(By.tagName("h2")),
      10000
    );

    const url = await driver.getCurrentUrl();

    console.log(await h2.getText());
    console.log(url);
  

  } finally {
    await driver.quit();
  }
}

main();
