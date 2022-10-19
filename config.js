export default {
    SEED_CARD:[
        { imgId: 1, lv: 1, title: "ケーキか死か", text: "自分以外にケーキか死かを聞いて、過半数のプレイヤーが死を選んだ場合、あなたは敗北する。過半数がケーキを選んだ場合、死を選んだ人が敗北。同数だった場合、あなたは勝利する。" , canPreview: false},
        { imgId: 2, lv: 1, title: "道徳的には正しい", text: "残っているプレイヤー全員が勝利する。", canPreview: true},
        { imgId: 3, lv: 1, title: "敗北", text: "このカードを使うと敗北する。まじで", canPreview: true},
        { imgId: 4, lv: 1, title: "バナナ", text: "バナナうまいなぁ～( ᐛ )", canPreview: true},
        { imgId: 5, lv: 1, title: "ついったー", text: "クラスメイトに自分のアカウントが見つかって、中二病がばれてしまう。世間体もゲームもあなたは敗北する。", canPreview: true},
        { imgId: 6, lv: 2, title: "ドラゴン王", text: "２人以上が同時に敗北するとき、あなただけが勝利する。", canPreview: true},
        { imgId: 7, lv: 2, title: "プレゼント", text: "2択選択 ３種類 ヘビ:いる＝敗北 子猫:いらない＝敗北 空っぽ:いる＝各プレイヤーから一枚選んでそれを奪う", canPreview: false},
        { imgId: 8, lv: 2, title: "シャッフル", text: "自分以外のプレイヤーの手札をシャッフルする。", canPreview: true},
        { imgId: 9, lv: 2, title: "リセット", text: "敗北者も含めすべてのカードを集め初めからやり直す", canPreview: true},
        { imgId: 10, lv: 2, title: "スキップ", text: "次のプレイヤーの手番をスキップする。", canPreview: true},
        { imgId: 11, lv: 2, title: "ジ・エンド", text: "自分の前にこのカードを置く。あなたの次の手番終了時に、あなたを含むすべてのプレイヤーは敗北する。", canPreview: true},
        { imgId: 12, lv: 2, title: "びっくり", text: "残りプレイヤーが２人で、あなたが敗北したときに使用する。あなたは勝利する。", canPreview: true},
        { imgId: 13, lv: 2, title: "戦闘", text: "全員でじゃんけんをして、グーを出したプレイヤーは敗北する。チョキ、パーも可", canPreview: true},
        { imgId: 14, lv: 3, title: "ドラゴン", text: "任意のプレイヤーの前にこのカードを置く。手番終了時にこのカードが自分の前に置かれていた場合、そのプレイヤーは即座に敗北する。", canPreview: true},
        { imgId: 15, lv: 3, title: "科学", text: "自分の前にドラゴンのカードが置かれていた場合、任意のプレイヤーの前にドラゴンのカードを移動させることができる。（それ以外の場合は5pt獲得）", canPreview: true},
        { imgId: 16, lv: 3, title: "手札補充なし", text: "自分の前にこのカードを置く。以降、いずれのプレイヤーも、いかなる理由があろうと山札からカードを引けない。自分の手番に使えるカードがなくなれば敗北。", canPreview: true},
        { imgId: 17, lv: 3, title: "マヒマヒ", text: "全員、自分の手札を左隣のプレイヤーに渡す。渡すカードがないプレイヤーは敗北する。", canPreview: true},
        { imgId: 18, lv: 3, title: "いじわる", text: "他プレイヤーが勝利したときに使用する。あなたも相手も敗北する", canPreview: true},
        { imgId: 19, lv: 4, title: "サメ", text: "他のプレイヤーの前にこのカードを置く。手番終了時にこのカードが自分の前に置かれていた場合、そのプレイヤーはサメに食べられ敗北する。その後、このカードを右隣りのプレイヤーの前に置く。", canPreview: true},
        { imgId: 20, lv: 3, title: "勝利", text: "条件設定して、当てはまれば勝利。", canPreview: true},
        { imgId: 21, lv: 3, title: "ルーレット", text: "ルーレットを回して何かをする（すでにあるカードを実行するとか、あたった人が敗北するとか）", canPreview: true}
    ], 
    NUM_CARDS: 50,
    NUM_PLAYERS: 4,
    NUM_INITIAL_CARDS: 2
}

