# Chapter 4: 待機処理

## 学習目標

- なぜ待機が必要かを理解できる
- 暗黙的待機（Implicit Wait）を使える
- 明示的待機（Explicit Wait）を使える
- 適切な待機方法を選べる

---

## 4-1. なぜ待機が必要か

Webページは非同期で読み込まれます。  
Seleniumがコードを実行するスピードは、ブラウザがHTMLをレンダリングするスピードより速いことがあります。

**よくある失敗パターン:**
```javascript
await driver.get("https://example.com");
// ページが完全に読み込まれる前に要素を探そうとしてエラー
const element = await driver.findElement(By.id("dynamic-content"));  // NoSuchElementError!
```

---

## 4-2. driver.sleep()（NG）

```javascript
await driver.sleep(3000);  // 3秒待つ
```

**問題点:** 要素の準備に関わらず必ず待つため、遅くて非効率です。  
学習中の確認以外では使わないようにしましょう。

---

## 4-3. 暗黙的待機（Implicit Wait）

ドライバ全体に一度だけ設定します。要素が見つからない場合、指定した時間まで自動でリトライします。

```javascript
await driver.manage().setTimeouts({ implicit: 10000 });  // 最大10秒（ミリ秒）
```

**特徴:**
- 一度設定すれば全ての `findElement` に適用される
- シンプルで使いやすい

---

## 4-4. 明示的待機（Explicit Wait）★推奨

特定の条件が満たされるまで待ちます。より細かい制御ができます。

```javascript
const { until } = require("selenium-webdriver");

// 要素が表示されるまで最大10秒待つ
const element = await driver.wait(
  until.elementLocated(By.id("result")),
  10000
);
```

---

## 4-5. よく使う until の条件

| 条件 | 説明 |
|---|---|
| `until.elementLocated(locator)` | 要素がDOM上に存在する |
| `until.elementIsVisible(element)` | 要素が表示されている |
| `until.elementIsEnabled(element)` | 要素が操作可能 |
| `until.titleContains(str)` | タイトルが文字列を含む |
| `until.urlContains(str)` | URLが文字列を含む |

---

## 4-6. 2段階の待機パターン

要素を取得してから、表示されるのを待つパターンです。

```javascript
// 1. 要素がDOMに現れるのを待つ
const element = await driver.wait(
  until.elementLocated(By.id("result")),
  10000
);

// 2. 要素が表示されるのを待つ
await driver.wait(until.elementIsVisible(element), 5000);
```

---

## 4-7. 暗黙的 vs 明示的

| | 暗黙的 | 明示的 |
|---|---|---|
| 設定 | 一度だけ | 必要なたびに |
| 条件 | 要素の存在のみ | 様々な条件を指定可能 |
| 推奨度 | △ | ★ |
| 併用 | 非推奨（動作が不安定になる）| |

---

## 次のステップ

`example.js` で明示的待機を体験してから、`exercise.js` に挑戦してください。
