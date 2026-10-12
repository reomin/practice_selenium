# Chapter 1: 環境構築

## 学習目標

- Seleniumのインストールができる
- ブラウザを起動・終了できる
- async/await の基本を理解できる

---

## 1-1. Seleniumとは

Seleniumは、Webブラウザを自動操作するためのライブラリです。
テストの自動化や、Webスクレイピングに広く使われています。

**できること:**
- ボタンをクリックする
- テキストを入力する
- Webページの内容を取得する
- スクリーンショットを撮る

---

## 1-2. インストール

ターミナルで以下を実行してください：

```bash
npm init -y
npm install selenium-webdriver
```

`selenium-webdriver` v4.11以降はChromeDriverを自動でダウンロード・管理します。
別途インストールは不要です。

---

## 1-3. ChromeDriverとは

SeleniumでChromeを操作するには、**ChromeDriver**という仲介プログラムが必要です。

```
あなたのコード → selenium-webdriver → ChromeDriver → Chrome
```

最新版の `selenium-webdriver` はこれを自動で処理してくれます。

---

## 1-4. async/await について

Seleniumの操作は**非同期処理**です。JavaScriptでは `async/await` を使って順番に実行します。

```javascript
// async 関数の中で await を使う
async function main() {
  await driver.get("https://example.com");  // ページが読み込まれるまで待つ
  const title = await driver.getTitle();    // タイトルを取得する
  console.log(title);
}

main();
```

`await` を忘れると、処理が完了する前に次の行が実行されてエラーになるので注意してください。

---

## 1-5. 最初のコード

`example.js` を開いて、実際にコードを動かしてみましょう。

```bash
node example.js
```

ブラウザが起動してGoogleのページが開いたら成功です！

---

## 次のステップ

`example.js` を動かしたら、`exercise.js` の課題に挑戦してください。
