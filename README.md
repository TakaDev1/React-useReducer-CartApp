# React-useReducer-CartApp

Reactの`useReducer`と`useContext`を使用して、ショッピングカート機能を実装した練習用アプリです。

## 概要

商品名と金額を入力して商品を追加し、カート内の商品を確認・削除できます。

カートの状態管理には`useReducer`、コンポーネント間の状態共有には`useContext`を使用しています。

## Features

* 商品の追加
* 商品名・金額の入力
* 入力値のバリデーション
* カート内の商品表示
* 商品の削除
* カートのクリア
* カートが空の場合の表示切り替え
* UUIDによる商品IDの生成

## Tech Stack

* React
* TypeScript
* Vite
* useState
* useReducer
* useContext
* Tailwind CSS
* uuid

## Project Structure

```text
src/
├── feature/
│   ├── components/
│   │   ├── AddProduct.tsx
│   │   ├── ClearCart.tsx
│   │   └── DisplayCart.tsx
│   ├── contexts/
│   │   └── CartContext.tsx
│   ├── reducers/
│   │   └── CartReducer.ts
│   └── types/
│       └── ProductCart.ts
├── App.tsx
└── main.tsx
```

## State Management

`CartContext`でカートの状態と`dispatch`を共有し、`CartReducer`で状態変更を管理しています。

```text
Component
    ↓
dispatch
    ↓
CartReducer
    ↓
State
    ↓
Component
```

## Input Validation

商品名は`trim()`で前後の空白を除去し、未入力の場合はエラーにします。

金額は正規表現を使用して数字のみを許可し、`Number()`で`number`型へ変換しています。

```tsx
const trimmedInput = input.trim();
const trimmedPrice = price.trim();

if (!trimmedInput) {
  throw new Error("商品名が未入力です");
}

if (!/^\d+$/.test(trimmedPrice)) {
  throw new Error("金額が不正な値です");
}
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

ブラウザで表示されたURLにアクセスしてアプリを確認できます。
