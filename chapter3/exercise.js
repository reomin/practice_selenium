// Chapter 3: 課題
//
// 【課題 3-1】テキスト入力とEnterキー
// - https://www.google.com を開く
// - 検索ボックス（name="q"）に好きなキーワードを入力する
// - Key.RETURN でEnterキーを押して検索を実行する
// - 検索後のページタイトルを表示する
// - スクリーンショットを "chapter3_result.png" として保存する
//
// 【課題 3-2】フォームへの入力
// - https://the-internet.herokuapp.com/login を開く
// - ユーザー名フィールド（id="username"）に "tomsmith" を入力する
// - パスワードフィールド（id="password"）に "SuperSecretPassword!" を入力する
// - ログインボタン（class="radius"）をクリックする
// - ログイン後のページに表示される <h2> タグのテキストを表示する
//
// 【課題 3-3】（発展）clear() を使う
// - 課題 3-2 のログインページを開く
// - username フィールドに一度 "wronguser" と入力する
// - clear() で消す
// - 正しい "tomsmith" を入力してログインする
// - 課題3-2と同じ確認を行う
//
// 採点基準:
//   - [ ] 課題3-1: 検索・タイトル表示・スクリーンショット保存ができている
//   - [ ] 課題3-2: 正しくログインしてh2テキストが表示できている
//   - [ ] 課題3-3: clear()が正しく使えている
//   - [ ] await が全ての非同期処理に付いている
//   - [ ] try/finally でブラウザを安全に閉じている

const { Builder, By, Key } = require("selenium-webdriver");
const { writeFileSync } = require("fs");

async function main() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    // 課題 3-1
    console.log("=== 課題 3-1 ===");
    // TODO: ここに実装する
    await driver.sleep(2000);

    // 課題 3-2
    console.log("\n=== 課題 3-2 ===");
    // TODO: ここに実装する
    await driver.sleep(2000);

    // 課題 3-3
    console.log("\n=== 課題 3-3 ===");
    // TODO: ここに実装する
    await driver.sleep(2000);
  } finally {
    await driver.quit();
  }
}

main();
