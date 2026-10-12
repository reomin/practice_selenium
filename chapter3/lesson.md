# Chapter 3: 要素の操作

## 学習目標

- ボタンをクリックできる
- テキストフィールドに文字を入力できる
- フォームを送信できる
- キーボード操作ができる

---

## 3-1. クリック

```javascript
const button = await driver.findElement(By.id("submit"));
await button.click();
```

---

## 3-2. テキスト入力

```javascript
const inputBox = await driver.findElement(By.name("q"));
await inputBox.sendKeys("Selenium 学習");
```

**フィールドをクリアしてから入力する場合:**

```javascript
await inputBox.clear();
await inputBox.sendKeys("新しいテキスト");
```

---

## 3-3. キーボード操作

特殊キーは `Key` クラスを使います。

```javascript
const { Key } = require("selenium-webdriver");

await inputBox.sendKeys("検索ワード");
await inputBox.sendKeys(Key.RETURN);  // Enterキー
```

| Key の定数 | 対応キー |
|---|---|
| `Key.RETURN` | Enter |
| `Key.TAB` | Tab |
| `Key.ESCAPE` | Escape |
| `Key.BACK_SPACE` | Backspace |
| `Key.chord(Key.CONTROL, "a")` | Ctrl+A（全選択）|

---

## 3-4. セレクトボックス

`Select` クラスはJavaScript版にはありません。  
CSSセレクタやXPathで option 要素を直接操作します。

```javascript
// value="python" の option をクリック
await driver.findElement(By.css("select option[value='python']")).click();

// または XPath でテキストを指定して選択
await driver.findElement(By.xpath("//option[text()='Python']")).click();
```

---

## 3-5. スクリーンショットを撮る

```javascript
const { writeFileSync } = require("fs");

const screenshot = await driver.takeScreenshot();
writeFileSync("screenshot.png", screenshot, "base64");
```

---

## 次のステップ

`example.js` で操作を確認し、`exercise.js` に挑戦してください。
