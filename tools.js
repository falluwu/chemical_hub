/*
  ツールを追加するには(3ステップ。フォルダは使いません)
  1. ツールのHTMLファイルを、このファイルと同じ場所に置く   例: newtool.html
  2. サムネイル画像も同じ場所に置く(横長、600×384 程度の jpg か png)  例: newtool.jpg
  3. 下の一覧に1つ書き足す(最後の } のあとに , を付けて続ける)

  並び順は、この一覧の上から順です。
  サムネイルが無い場合は、タイトルの頭文字が表示されます。
*/
var TOOLS = [
  {
    title: "化学ポテンシャル曲面 μ-P-T",
    desc:  "固体・液体・気体の曲面と、P-T・μ-T・μ-P の断面を見る",
    path:  "mupt.html",
    thumb: "mupt.jpg"
  },
  {
    title: "軌道の立体モデル",
    desc:  "s・p・d・f 軌道と、σ・π 分子軌道の形を回して見る",
    path:  "orbitals.html",
    thumb: "orbitals.jpg"
  },
  {
    title: "シクロアルカンの立体配座",
    desc:  "炭素数4〜8の配座を回して見る",
    path:  "cycloalkane.html",
    thumb: "cycloalkane.jpg"
  }
];
