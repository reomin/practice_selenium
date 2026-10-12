# Chapter 5: 総合演習

## 学習目標

- Chapter 1〜4 の知識を組み合わせて実践的なスクリプトを書ける
- エラーハンドリングを含む堅牢なコードを書ける

---

## 5-1. これまでの復習

| 章 | 学んだこと |
|---|---|
| Chapter 1 | Builder, forBrowser, get, getTitle, quit, async/await, try/finally |
| Chapter 2 | findElement, findElements, By の各メソッド, getText, getAttribute |
| Chapter 3 | click, sendKeys, clear, Key.RETURN, takeScreenshot |
| Chapter 4 | driver.wait, until の各条件, 暗黙的待機 |

---

## 5-2. 実践でよく使うパターン

### ページ遷移後の確認

```javascript
await button.click();
await driver.wait(until.urlContains("/dashboard"), 10000);
console.log("ダッシュボードに遷移しました");
```

### 要素の存在確認（エラーを出さずに）

```javascript
const elements = await driver.findElements(By.id("error-message"));
if (elements.length > 0) {
  console.log("エラーメッセージ:", await elements[0].getText());
}
```

### 複数ページを順に処理する

```javascript
const urls = [
  "https://example.com/page1",
  "https://example.com/page2",
];

for (const url of urls) {
  await driver.get(url);
  const title = await driver.getTitle();
  console.log(`${url}: ${title}`);
}
```

---

## 5-3. 総合課題について

`exercise.js` には総合課題があります。  
これまで学んだ全ての技術を使って挑戦してください。

---

## お疲れ様でした！

Chapter 1〜5 を完了したら、Seleniumの基本はひと通り身についています。  
次のステップとして以下を学ぶと更に実践的なコードが書けます：

- **Page Object Model (POM)** : テストコードの保守性を高める設計パターン
- **Mocha / Jest** : テストフレームワークとの組み合わせ
- **ヘッドレスモード** : GUIなしでバックグラウンド実行
