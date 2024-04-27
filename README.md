# nextjs-myapp-tutorial

このリポジトリは、個人的な Next.js の検証用です。

## 学習ロードマップ

### 未分類

- [x] markdown 系の Extension 追加
- [ ] sourcemap 有効化

### MUI 

- [ ] Component 検証
  - [x] Button
  - [ ] TextField
    - [x] select prop
  - [x] Menu, MenuList, MenuItem
- [x] Theme 検証
  - [x] Theme Object の理解と活用
  - [x] createTheme() の検証
  - [x] Theme の適用
    - [x] Component の sx prop での指定
    - [x] ThemeProvider での指定

### Tailwind CSS

いまのところなし

### React, Next.js

- [x] tutorials ページ保存先のディレクトリ作成
- [x] 各 tutorials ページへのリンクを自動生成するコードを追加
- [x] 上記をコンポーネント化
- [x] リストのフィルタ
  - [x] 一部を出力
  - [x] 一部の書式を変更
- [x] コンポーネント引数に handler を渡す
- [x] クライアントコンポーネント境界でファイルを分ける
- [x] ページごとにタイトルを変える
- [x] Image コンポーネントを試す
- [x] フォント変更
- [ ] useState 弄くり倒す
- [ ] tutorials ページ共通の概要コンポーネントを追加
  - ページ概要
  - ねらい
  - 学んだこと
- [ ] 複数のコンポーネントを１ファイルで定義し、任意に指定して import する
- [ ] コンポーネントの管理粒度のベストプラクティスを理解する
  - １ファイル１コンポーネント
  - １ファイル複数コンポーネント
- [ ] コンポーネント変数の命名規則を理解する
- [ ] Metadata を知る
- [ ] Next.js の特殊ファイルごとの描画領域を可視化してみる
  - layout.tsx
  - page.tsx
  - subdir/layout.tsx
  - subdir/page.tsx
- [ ] 特殊ファイルをそれぞれ試す
- [ ] next.revalidate を検証する
- [ ] next/headers の cookies を試す
- [ ] next/headers の headers を試す
- [ ] next/server の NextRequest を試す
- [ ] next/navigation の redirect を試す
- [ ] Request Memoization(リクエスト重複排除) の条件を知り試す
- [ ] suspense と fallback を検証する
- [ ] 利用端末によるビューの切り替え方法を知る
  - [ ] 画面幅に応じて display を切り替える方法
- [ ] UI のテスト方法を知る
