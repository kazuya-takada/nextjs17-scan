# 趣旨

- Nextjs17 で react-qr-barcode-scanner ライブラリが使用できるか？検証
  - https://www.npmjs.com/package/react-qr-barcode-scanner?activeTab=versions
  - https://github.com/jamenamcinteer/react-qr-barcode-scanner

# デプロイ先・検証結果

- デプロイ先：
- 検証端末：IPhone8, ios15.2
- 結果：
- iOS-14.3 未満は chrome だと動かないらしい（safari は OK）
  - https://github.com/jamenamcinteer/react-qr-barcode-scanner#known-issues

# 開発メモ

- Nextjs(react17)へ
  - 一旦、Typescript なしで。（ダウングレードをスムーズにしたかったので）
  - `npm i next@12 react@17 react-dom@17 eslint-config-next@12`
  - `@next/font`を`pakage.json`から削除 →`npm install`
- `window is not defined`のエラーに関しては以下参照
  - https://github.com/jamenamcinteer/react-qr-barcode-scanner/issues/29
- スタイリングには Tailwind を使用
  - `tailwind.config.js`に`mode: 'jit'`を設定すること
