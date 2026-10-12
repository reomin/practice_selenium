# Selenium 初級者向け学習コース（JavaScript）

## 概要

このコースでは、JavaScriptでSeleniumを使ったWebブラウザ自動化の基礎を学びます。

## カリキュラム

| 章 | テーマ | 内容 |
|---|---|---|
| Chapter 1 | 環境構築 | Seleniumのインストール、ChromeDriverのセットアップ |
| Chapter 2 | 基本操作 | ブラウザ起動、URL遷移、要素取得 |
| Chapter 3 | 要素操作 | クリック、テキスト入力、フォーム操作 |
| Chapter 4 | 待機処理 | 明示的待機・暗黙的待機 |
| Chapter 5 | 実践演習 | 総合課題 |

## 進め方

1. 各章の `lesson.md` を読む
2. `example.js` のサンプルコードを手元で動かす
3. `exercise.js` の課題を解く
4. 私（Claude）に採点してもらう

## 環境要件

- Node.js 18+
- Google Chrome（最新版）
- npm

## セットアップ

```bash
npm init -y
npm install selenium-webdriver
```

ChromeDriverは `selenium-webdriver` が自動で管理します（v4.11+）。

## 採点の依頼方法

課題を解いたら、以下のように私に見せてください：

```
Chapter X の課題を解きました。採点してください。
[コードを貼り付け]
```
