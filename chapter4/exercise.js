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

    // 課題 4-2
    console.log("\n=== 課題 4-2 ===");
    // TODO: ここに実装する

    // 課題 4-3
    console.log("\n=== 課題 4-3 ===");
    // TODO: ここに実装する
  } finally {
    await driver.quit();
  }
}

main();
