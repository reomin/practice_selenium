# Chapter 2: 要素の取得

## 学習目標

- HTML要素をSeleniumで取得できる
- 複数の取得方法（By）を使い分けられる
- 要素のテキストや属性を取得できる

---

## 2-1. 要素の取得方法

Seleniumでは `findElement()` を使って、HTML上の要素を取得します。

```javascript
const { By } = require("selenium-webdriver");

const element = await driver.findElement(By.id("search"));
```

---

## 2-2. By の種類

| メソッド | 説明 | 例 |
|---|---|---|
| `By.id()` | id属性で探す | `By.id("submit")` |
| `By.name()` | name属性で探す | `By.name("q")` |
| `By.className()` | class属性で探す | `By.className("btn")` |
| `By.tagName()` | タグ名で探す | `By.tagName("h1")` |
| `By.css()` | CSSセレクタで探す | `By.css("div.main")` |
| `By.xpath()` | XPathで探す | `By.xpath("//button[@type='submit']")` |
| `By.linkText()` | リンクテキストで探す（完全一致）| `By.linkText("詳細はこちら")` |
| `By.partialLinkText()` | リンクテキストで探す（部分一致）| `By.partialLinkText("詳細")` |

---

## 2-3. 複数要素の取得

`findElements()` （sがつく）で、条件に一致する**全要素**を配列で取得できます。

```javascript
// 全てのリンクを取得
const links = await driver.findElements(By.tagName("a"));
for (const link of links) {
  const text = await link.getText();
  console.log(text);
}
```

---

## 2-4. 要素の情報を取得する

```javascript
const element = await driver.findElement(By.id("title"));

await element.getText()               // テキスト内容
await element.getAttribute("href")   // 属性値
await element.getTagName()           // タグ名
await element.isDisplayed()          // 表示されているか
await element.isEnabled()            // 操作可能か
```

---

## 2-5. よくあるエラー

**NoSuchElementError**  
要素が見つからなかったときに発生します。
- セレクタのスペルミスを確認する
- ページが読み込み完了前に取得しようとしていないか確認する（→ Chapter 4で学びます）

---

## 次のステップ

`example.js` でさまざまな取得方法を試してから、`exercise.js` に挑戦してください。
