import type {
  Phrase,
  QuizQuestion,
  Sentence,
  Word,
} from './types'

interface PhraseSeed {
  furigana: string
  meaningZh: string
  kanaOption: string
}

interface PracticeSentenceSeed {
  furigana: string
  meaningZh: string
  clozeSentence: string
  answerKana: string
}

interface VocabularySeed {
  id: string
  wordJa: string
  kana: string
  meaningZh: string
  partOfSpeech: string
  jlptLevel: Word['jlptLevel']
  tags: string[]
  sortOrder: number
  phrases: [PhraseSeed, PhraseSeed]
  learning: {
    furigana: string
    meaningZh: string
  }
  quiz: PracticeSentenceSeed
  reviewA: PracticeSentenceSeed
  reviewC: {
    furigana: string
    meaningZh: string
  }
  explanationZh: string
}

const vocabularySeeds: VocabularySeed[] = [
  {
    id: 'word-make-sure',
    wordJa: '確かめる',
    kana: 'たしかめる',
    meaningZh: '確認、弄清楚',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N3',
    tags: ['日常', '確認', '工作'],
    sortOrder: 61,
    phrases: [
      {
        furigana: '時間（じかん）を確（たし）かめる',
        meaningZh: '確認時間',
        kanaOption: 'じかんをたしかめる',
      },
      {
        furigana: '住所（じゅうしょ）を確（たし）かめる',
        meaningZh: '確認地址',
        kanaOption: 'じゅうしょをたしかめる',
      },
    ],
    learning: {
      furigana:
        '出（で）かける前（まえ）に、集合時間（しゅうごうじかん）を確（たし）かめました。',
      meaningZh: '出門前，我確認了集合時間。',
    },
    quiz: {
      furigana:
        'メールを送（おく）る前（まえ）に、内容（ないよう）を確（たし）かめます。',
      meaningZh: '寄信前會確認內容。',
      clozeSentence:
        'メールを送（おく）る前（まえ）に、内容（ないよう）を＿＿＿＿。',
      answerKana: 'たしかめます',
    },
    reviewA: {
      furigana:
        '店（みせ）に行（い）く前（まえ）に、休（やす）みの日（ひ）を確（たし）かめました。',
      meaningZh: '去店裡前，我確認了公休日。',
      clozeSentence:
        '店（みせ）に行（い）く前（まえ）に、休（やす）みの日（ひ）を＿＿＿＿。',
      answerKana: 'たしかめました',
    },
    reviewC: {
      furigana:
        '駅（えき）で待（ま）ち合（あ）わせの場所（ばしょ）を確（たし）かめました。',
      meaningZh: '我在車站確認了碰面的地點。',
    },
    explanationZh: '「確かめる」表示為了避免錯誤而確認內容或情況。',
  },
  {
    id: 'word-clean-up',
    wordJa: '片付ける',
    kana: 'かたづける',
    meaningZh: '整理、收拾',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['家事', '日常', '生活'],
    sortOrder: 62,
    phrases: [
      {
        furigana: '部屋（へや）を片付（かたづ）ける',
        meaningZh: '整理房間',
        kanaOption: 'へやをかたづける',
      },
      {
        furigana: '机（つくえ）の上（うえ）を片付（かたづ）ける',
        meaningZh: '整理桌上',
        kanaOption: 'つくえのうえをかたづける',
      },
    ],
    learning: {
      furigana:
        '友（とも）だちが来（く）るので、部屋（へや）を片付（かたづ）けました。',
      meaningZh: '因為朋友要來，所以我整理了房間。',
    },
    quiz: {
      furigana:
        '晩（ばん）ご飯（はん）の後（あと）で、テーブルを片付（かたづ）けます。',
      meaningZh: '晚餐後會收拾桌子。',
      clozeSentence: '晩（ばん）ご飯（はん）の後（あと）で、テーブルを＿＿＿＿。',
      answerKana: 'かたづけます',
    },
    reviewA: {
      furigana:
        '寝（ね）る前（まえ）に、机（つくえ）の上（うえ）を片付（かたづ）けました。',
      meaningZh: '睡前我整理了桌上。',
      clozeSentence:
        '寝（ね）る前（まえ）に、机（つくえ）の上（うえ）を＿＿＿＿。',
      answerKana: 'かたづけました',
    },
    reviewC: {
      furigana:
        '休（やす）みの日（ひ）に、台所（だいどころ）を片付（かたづ）けました。',
      meaningZh: '休息日我整理了廚房。',
    },
    explanationZh: '「片付ける」常用於整理房間、桌面或收拾東西。',
  },
  {
    id: 'word-throw-away',
    wordJa: '捨てる',
    kana: 'すてる',
    meaningZh: '丟掉、捨棄',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['家事', '日常', '物品'],
    sortOrder: 63,
    phrases: [
      {
        furigana: 'ごみを捨（す）てる',
        meaningZh: '丟垃圾',
        kanaOption: 'ごみをすてる',
      },
      {
        furigana: '古（ふる）い服（ふく）を捨（す）てる',
        meaningZh: '丟掉舊衣服',
        kanaOption: 'ふるいふくをすてる',
      },
    ],
    learning: {
      furigana:
        '朝（あさ）、会社（かいしゃ）へ行（い）く前（まえ）にごみを捨（す）てました。',
      meaningZh: '早上去公司前，我丟了垃圾。',
    },
    quiz: {
      furigana:
        '使（つか）わない紙（かみ）は、この箱（はこ）に捨（す）てます。',
      meaningZh: '不用的紙丟到這個箱子裡。',
      clozeSentence: '使（つか）わない紙（かみ）は、この箱（はこ）に＿＿＿＿。',
      answerKana: 'すてます',
    },
    reviewA: {
      furigana:
        '古（ふる）い雑誌（ざっし）をまとめて捨（す）てました。',
      meaningZh: '我把舊雜誌整理後丟掉了。',
      clozeSentence: '古（ふる）い雑誌（ざっし）をまとめて＿＿＿＿。',
      answerKana: 'すてました',
    },
    reviewC: {
      furigana:
        '冷蔵庫（れいぞうこ）の古（ふる）い食（た）べ物（もの）を捨（す）てました。',
      meaningZh: '我丟掉了冰箱裡的舊食物。',
    },
    explanationZh: '「捨てる」表示把不需要的東西丟掉。',
  },
  {
    id: 'word-pick-up-item',
    wordJa: '拾う',
    kana: 'ひろう',
    meaningZh: '撿、拾起',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['日常', '物品', '外出'],
    sortOrder: 64,
    phrases: [
      {
        furigana: '財布（さいふ）を拾（ひろ）う',
        meaningZh: '撿到錢包',
        kanaOption: 'さいふをひろう',
      },
      {
        furigana: '落（お）ちた鍵（かぎ）を拾（ひろ）う',
        meaningZh: '撿起掉落的鑰匙',
        kanaOption: 'おちたかぎをひろう',
      },
    ],
    learning: {
      furigana:
        '道（みち）で財布（さいふ）を拾（ひろ）ったので、交番（こうばん）へ持（も）って行（い）きました。',
      meaningZh: '我在路上撿到錢包，所以拿去了派出所。',
    },
    quiz: {
      furigana:
        '駅（えき）の前（まえ）で落（お）ちていた鍵（かぎ）を拾（ひろ）いました。',
      meaningZh: '我在車站前撿起掉在地上的鑰匙。',
      clozeSentence:
        '駅（えき）の前（まえ）で落（お）ちていた鍵（かぎ）を＿＿＿＿。',
      answerKana: 'ひろいました',
    },
    reviewA: {
      furigana:
        '公園（こうえん）で小（ちい）さいボールを拾（ひろ）いました。',
      meaningZh: '我在公園撿到小球。',
      clozeSentence: '公園（こうえん）で小（ちい）さいボールを＿＿＿＿。',
      answerKana: 'ひろいました',
    },
    reviewC: {
      furigana:
        '道（みち）に落（お）ちていたカードを拾（ひろ）いました。',
      meaningZh: '我撿起了掉在路上的卡片。',
    },
    explanationZh: '「拾う」表示把掉在地上或路上的東西撿起來。',
  },
  {
    id: 'word-make-noise',
    wordJa: '騒ぐ',
    kana: 'さわぐ',
    meaningZh: '吵鬧、騷動',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N3',
    tags: ['日常', '公共場所', '行為'],
    sortOrder: 65,
    phrases: [
      {
        furigana: '電車（でんしゃ）の中（なか）で騒（さわ）ぐ',
        meaningZh: '在電車裡吵鬧',
        kanaOption: 'でんしゃのなかでさわぐ',
      },
      {
        furigana: '夜（よる）遅（おそ）く騒（さわ）ぐ',
        meaningZh: '深夜吵鬧',
        kanaOption: 'よるおそくさわぐ',
      },
    ],
    learning: {
      furigana:
        '夜（よる）遅（おそ）く騒（さわ）ぐと、近所（きんじょ）の人（ひと）に迷惑（めいわく）です。',
      meaningZh: '深夜吵鬧會造成鄰居困擾。',
    },
    quiz: {
      furigana:
        '図書館（としょかん）では、大（おお）きな声（こえ）で騒（さわ）ぎません。',
      meaningZh: '在圖書館不會大聲吵鬧。',
      clozeSentence:
        '図書館（としょかん）では、大（おお）きな声（こえ）で＿＿＿＿。',
      answerKana: 'さわぎません',
    },
    reviewA: {
      furigana:
        '子（こ）どもたちは公園（こうえん）で楽（たの）しく騒（さわ）いでいました。',
      meaningZh: '孩子們在公園開心地吵鬧著。',
      clozeSentence:
        '子（こ）どもたちは公園（こうえん）で楽（たの）しく＿＿＿＿。',
      answerKana: 'さわいでいました',
    },
    reviewC: {
      furigana:
        '電車（でんしゃ）の中（なか）では、大（おお）きな声（こえ）で騒（さわ）ぎません。',
      meaningZh: '在電車裡不要大聲吵鬧。',
    },
    explanationZh: '「騒ぐ」表示聲音大、動作多而造成吵鬧的狀態。',
  },
  {
    id: 'word-go-forward',
    wordJa: '進む',
    kana: 'すすむ',
    meaningZh: '前進、進展',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['移動', '工作', '日常'],
    sortOrder: 66,
    phrases: [
      {
        furigana: '前（まえ）に進（すす）む',
        meaningZh: '往前走',
        kanaOption: 'まえにすすむ',
      },
      {
        furigana: '仕事（しごと）が進（すす）む',
        meaningZh: '工作有進展',
        kanaOption: 'しごとがすすむ',
      },
    ],
    learning: {
      furigana:
        '地図（ちず）を見（み）ながら、駅（えき）の方（ほう）へ進（すす）みました。',
      meaningZh: '我一邊看地圖，一邊往車站方向前進。',
    },
    quiz: {
      furigana:
        '信号（しんごう）が青（あお）になったら、前（まえ）に進（すす）みます。',
      meaningZh: '紅綠燈變綠後往前走。',
      clozeSentence:
        '信号（しんごう）が青（あお）になったら、前（まえ）に＿＿＿＿。',
      answerKana: 'すすみます',
    },
    reviewA: {
      furigana:
        '説明（せつめい）を聞（き）いてから、次（つぎ）のページへ進（すす）みました。',
      meaningZh: '聽完說明後，我進到下一頁。',
      clozeSentence:
        '説明（せつめい）を聞（き）いてから、次（つぎ）のページへ＿＿＿＿。',
      answerKana: 'すすみました',
    },
    reviewC: {
      furigana:
        '会議（かいぎ）の後（あと）、仕事（しごと）が少（すこ）し進（すす）みました。',
      meaningZh: '會議後，工作稍微有進展。',
    },
    explanationZh: '「進む」可表示人或事物往前，也可表示事情有進展。',
  },
  {
    id: 'word-go-back',
    wordJa: '戻る',
    kana: 'もどる',
    meaningZh: '回去、返回',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['移動', '日常', '外出'],
    sortOrder: 67,
    phrases: [
      {
        furigana: '家（いえ）に戻（もど）る',
        meaningZh: '回家',
        kanaOption: 'いえにもどる',
      },
      {
        furigana: '席（せき）に戻（もど）る',
        meaningZh: '回到座位',
        kanaOption: 'せきにもどる',
      },
    ],
    learning: {
      furigana:
        '忘（わす）れ物（もの）をしたので、一度（いちど）家（いえ）に戻（もど）りました。',
      meaningZh: '因為忘了東西，所以我回了一趟家。',
    },
    quiz: {
      furigana:
        '昼（ひる）ご飯（はん）の後（あと）で、会社（かいしゃ）に戻（もど）ります。',
      meaningZh: '午餐後回公司。',
      clozeSentence:
        '昼（ひる）ご飯（はん）の後（あと）で、会社（かいしゃ）に＿＿＿＿。',
      answerKana: 'もどります',
    },
    reviewA: {
      furigana:
        '雨（あめ）が強（つよ）くなったので、駅（えき）に戻（もど）りました。',
      meaningZh: '因為雨變大了，所以我回到車站。',
      clozeSentence:
        '雨（あめ）が強（つよ）くなったので、駅（えき）に＿＿＿＿。',
      answerKana: 'もどりました',
    },
    reviewC: {
      furigana:
        '資料（しりょう）を取（と）りに、会社（かいしゃ）へ戻（もど）りました。',
      meaningZh: '我回公司拿資料。',
    },
    explanationZh: '「戻る」表示回到原本的地方或狀態。',
  },
  {
    id: 'word-head-to',
    wordJa: '向かう',
    kana: 'むかう',
    meaningZh: '前往、朝向',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N3',
    tags: ['移動', '外出', '交通'],
    sortOrder: 68,
    phrases: [
      {
        furigana: '駅（えき）へ向（む）かう',
        meaningZh: '前往車站',
        kanaOption: 'えきへむかう',
      },
      {
        furigana: '会社（かいしゃ）に向（む）かう',
        meaningZh: '前往公司',
        kanaOption: 'かいしゃにむかう',
      },
    ],
    learning: {
      furigana:
        '朝（あさ）八時（はちじ）に家（いえ）を出（で）て、会社（かいしゃ）に向（む）かいました。',
      meaningZh: '早上八點出門，前往公司。',
    },
    quiz: {
      furigana:
        '授業（じゅぎょう）が終（お）わってから、図書館（としょかん）へ向（む）かいます。',
      meaningZh: '下課後前往圖書館。',
      clozeSentence:
        '授業（じゅぎょう）が終（お）わってから、図書館（としょかん）へ＿＿＿＿。',
      answerKana: 'むかいます',
    },
    reviewA: {
      furigana:
        '仕事（しごと）の後（あと）、友（とも）だちの家（いえ）へ向（む）かいました。',
      meaningZh: '下班後，我前往朋友家。',
      clozeSentence:
        '仕事（しごと）の後（あと）、友（とも）だちの家（いえ）へ＿＿＿＿。',
      answerKana: 'むかいました',
    },
    reviewC: {
      furigana:
        '昼（ひる）すぎに、駅（えき）の出口（でぐち）へ向（む）かいました。',
      meaningZh: '中午過後，我前往車站出口。',
    },
    explanationZh: '「向かう」表示朝某個目的地或方向前進。',
  },
  {
    id: 'word-pass-through',
    wordJa: '通る',
    kana: 'とおる',
    meaningZh: '通過、經過',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['移動', '交通', '日常'],
    sortOrder: 69,
    phrases: [
      {
        furigana: '道（みち）を通（とお）る',
        meaningZh: '經過道路',
        kanaOption: 'みちをとおる',
      },
      {
        furigana: '駅（えき）の前（まえ）を通（とお）る',
        meaningZh: '經過車站前',
        kanaOption: 'えきのまえをとおる',
      },
    ],
    learning: {
      furigana:
        '毎朝（まいあさ）、学校（がっこう）の前（まえ）を通（とお）って会社（かいしゃ）へ行（い）きます。',
      meaningZh: '每天早上我經過學校前去公司。',
    },
    quiz: {
      furigana:
        'この道（みち）を通（とお）ると、駅（えき）に早（はや）く着（つ）きます。',
      meaningZh: '走這條路會比較快到車站。',
      clozeSentence:
        'この道（みち）を＿＿＿＿と、駅（えき）に早（はや）く着（つ）きます。',
      answerKana: 'とおる',
    },
    reviewA: {
      furigana:
        '帰（かえ）りにコンビニの前（まえ）を通（とお）りました。',
      meaningZh: '回家路上經過了便利商店前。',
      clozeSentence: '帰（かえ）りにコンビニの前（まえ）を＿＿＿＿。',
      answerKana: 'とおりました',
    },
    reviewC: {
      furigana:
        '会社（かいしゃ）へ行（い）く時（とき）、公園（こうえん）の前（まえ）を通（とお）ります。',
      meaningZh: '去公司時，我會經過公園前。',
    },
    explanationZh: '「通る」表示從某處經過或通過。',
  },
  {
    id: 'word-pass-time',
    wordJa: '過ぎる',
    kana: 'すぎる',
    meaningZh: '經過、超過',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['時間', '日常', '程度'],
    sortOrder: 70,
    phrases: [
      {
        furigana: '時間（じかん）が過（す）ぎる',
        meaningZh: '時間過去',
        kanaOption: 'じかんがすぎる',
      },
      {
        furigana: '七時（しちじ）を過（す）ぎる',
        meaningZh: '超過七點',
        kanaOption: 'しちじをすぎる',
      },
    ],
    learning: {
      furigana:
        '楽（たの）しく話（はな）していたら、すぐに時間（じかん）が過（す）ぎました。',
      meaningZh: '聊得很開心時，時間很快就過去了。',
    },
    quiz: {
      furigana:
        'もう九時（くじ）を過（す）ぎたので、そろそろ帰（かえ）ります。',
      meaningZh: '已經超過九點了，所以差不多要回去了。',
      clozeSentence:
        'もう九時（くじ）を＿＿＿＿ので、そろそろ帰（かえ）ります。',
      answerKana: 'すぎた',
    },
    reviewA: {
      furigana:
        '昼（ひる）を過（す）ぎても、まだ連絡（れんらく）がありません。',
      meaningZh: '過了中午，還是沒有聯絡。',
      clozeSentence:
        '昼（ひる）を＿＿＿＿も、まだ連絡（れんらく）がありません。',
      answerKana: 'すぎて',
    },
    reviewC: {
      furigana:
        '楽（たの）しい時間（じかん）は、いつも早（はや）く過（す）ぎます。',
      meaningZh: '開心的時間總是過得很快。',
    },
    explanationZh: '「過ぎる」可表示時間經過，也可表示超過某個點。',
  },
  {
    id: 'word-cross-over',
    wordJa: '越える',
    kana: 'こえる',
    meaningZh: '越過、超過',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N3',
    tags: ['移動', '數量', '日常'],
    sortOrder: 71,
    phrases: [
      {
        furigana: '橋（はし）を越（こ）える',
        meaningZh: '越過橋',
        kanaOption: 'はしをこえる',
      },
      {
        furigana: '予算（よさん）を越（こ）える',
        meaningZh: '超過預算',
        kanaOption: 'よさんをこえる',
      },
    ],
    learning: {
      furigana:
        'この橋（はし）を越（こ）えると、駅（えき）が見（み）えます。',
      meaningZh: '越過這座橋後，就會看到車站。',
    },
    quiz: {
      furigana:
        '買（か）い物（もの）の合計（ごうけい）が予算（よさん）を越（こ）えました。',
      meaningZh: '購物總額超過了預算。',
      clozeSentence:
        '買（か）い物（もの）の合計（ごうけい）が予算（よさん）を＿＿＿＿。',
      answerKana: 'こえました',
    },
    reviewA: {
      furigana:
        '荷物（にもつ）の重（おも）さが十（じゅう）キロを越（こ）えました。',
      meaningZh: '行李重量超過十公斤了。',
      clozeSentence:
        '荷物（にもつ）の重（おも）さが十（じゅう）キロを＿＿＿＿。',
      answerKana: 'こえました',
    },
    reviewC: {
      furigana:
        'この道（みち）を越（こ）えると、スーパーがあります。',
      meaningZh: '越過這條路後，有一間超市。',
    },
    explanationZh: '「越える」表示越過邊界、數量或程度。',
  },
  {
    id: 'word-fit',
    wordJa: '合う',
    kana: 'あう',
    meaningZh: '合適、符合',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['購物', '日常', '感覺'],
    sortOrder: 72,
    phrases: [
      {
        furigana: 'サイズが合（あ）う',
        meaningZh: '尺寸合適',
        kanaOption: 'サイズがあう',
      },
      {
        furigana: '予定（よてい）が合（あ）う',
        meaningZh: '時間安排合得上',
        kanaOption: 'よていがあう',
      },
    ],
    learning: {
      furigana:
        'この靴（くつ）はサイズが合（あ）うので、とても歩（ある）きやすいです。',
      meaningZh: '這雙鞋尺寸合適，所以很好走。',
    },
    quiz: {
      furigana:
        '来週（らいしゅう）の予定（よてい）が合（あ）えば、一緒（いっしょ）に行（い）きましょう。',
      meaningZh: '如果下週時間合得上，就一起去吧。',
      clozeSentence:
        '来週（らいしゅう）の予定（よてい）が＿＿＿＿ば、一緒（いっしょ）に行（い）きましょう。',
      answerKana: 'あえ',
    },
    reviewA: {
      furigana:
        'この服（ふく）は色（いろ）がよく合（あ）います。',
      meaningZh: '這件衣服顏色很搭。',
      clozeSentence: 'この服（ふく）は色（いろ）がよく＿＿＿＿。',
      answerKana: 'あいます',
    },
    reviewC: {
      furigana:
        'このかばんは、私（わたし）の服（ふく）に合（あ）います。',
      meaningZh: '這個包包很搭我的衣服。',
    },
    explanationZh: '「合う」表示尺寸、時間、顏色或條件相符。',
  },
  {
    id: 'word-resemble',
    wordJa: '似る',
    kana: 'にる',
    meaningZh: '相似、像',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['人際', '日常', '描述'],
    sortOrder: 73,
    phrases: [
      {
        furigana: '母（はは）に似（に）ている',
        meaningZh: '像媽媽',
        kanaOption: 'ははににている',
      },
      {
        furigana: '味（あじ）が似（に）ている',
        meaningZh: '味道相似',
        kanaOption: 'あじがにている',
      },
    ],
    learning: {
      furigana:
        '妹（いもうと）は母（はは）に似（に）ていて、よく笑（わら）います。',
      meaningZh: '妹妹像媽媽，很常笑。',
    },
    quiz: {
      furigana:
        'この二（ふた）つの店（みせ）は、メニューが少（すこ）し似（に）ています。',
      meaningZh: '這兩家店的菜單有點像。',
      clozeSentence:
        'この二（ふた）つの店（みせ）は、メニューが少（すこ）し＿＿＿＿。',
      answerKana: 'にています',
    },
    reviewA: {
      furigana:
        'この味（あじ）は、前（まえ）に食（た）べた料理（りょうり）に似（に）ています。',
      meaningZh: '這個味道像以前吃過的料理。',
      clozeSentence:
        'この味（あじ）は、前（まえ）に食（た）べた料理（りょうり）に＿＿＿＿。',
      answerKana: 'にています',
    },
    reviewC: {
      furigana:
        '兄（あに）と私（わたし）は、声（こえ）が少（すこ）し似（に）ています。',
      meaningZh: '哥哥和我的聲音有點像。',
    },
    explanationZh: '「似る」表示外表、味道、聲音等有相似之處。',
  },
  {
    id: 'word-change-self',
    wordJa: '変わる',
    kana: 'かわる',
    meaningZh: '改變、變化',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['變化', '日常', '狀態'],
    sortOrder: 74,
    phrases: [
      {
        furigana: '予定（よてい）が変（か）わる',
        meaningZh: '行程改變',
        kanaOption: 'よていがかわる',
      },
      {
        furigana: '天気（てんき）が変（か）わる',
        meaningZh: '天氣變化',
        kanaOption: 'てんきがかわる',
      },
    ],
    learning: {
      furigana:
        '雨（あめ）が降（ふ）ったので、今日（きょう）の予定（よてい）が変（か）わりました。',
      meaningZh: '因為下雨，今天的行程改變了。',
    },
    quiz: {
      furigana:
        '店（みせ）の開（あ）く時間（じかん）が来月（らいげつ）から変（か）わります。',
      meaningZh: '店的營業時間從下個月開始改變。',
      clozeSentence:
        '店（みせ）の開（あ）く時間（じかん）が来月（らいげつ）から＿＿＿＿。',
      answerKana: 'かわります',
    },
    reviewA: {
      furigana:
        '新（あたら）しい仕事（しごと）で、生活（せいかつ）が少（すこ）し変（か）わりました。',
      meaningZh: '因為新工作，生活稍微改變了。',
      clozeSentence:
        '新（あたら）しい仕事（しごと）で、生活（せいかつ）が少（すこ）し＿＿＿＿。',
      answerKana: 'かわりました',
    },
    reviewC: {
      furigana:
        '駅（えき）の前（まえ）は、一年（いちねん）で大（おお）きく変（か）わりました。',
      meaningZh: '車站前在一年內大幅改變了。',
    },
    explanationZh: '「変わる」是不及物動詞，表示事情或狀態自己改變。',
  },
  {
    id: 'word-raise-grow',
    wordJa: '育てる',
    kana: 'そだてる',
    meaningZh: '養育、培育',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N3',
    tags: ['生活', '植物', '家庭'],
    sortOrder: 75,
    phrases: [
      {
        furigana: '花（はな）を育（そだ）てる',
        meaningZh: '種花、培育花',
        kanaOption: 'はなをそだてる',
      },
      {
        furigana: '子（こ）どもを育（そだ）てる',
        meaningZh: '養育孩子',
        kanaOption: 'こどもをそだてる',
      },
    ],
    learning: {
      furigana:
        'ベランダで小（ちい）さい花（はな）を育（そだ）てています。',
      meaningZh: '我在陽台種小花。',
    },
    quiz: {
      furigana:
        '母（はは）は庭（にわ）で野菜（やさい）を育（そだ）てています。',
      meaningZh: '媽媽在院子裡種蔬菜。',
      clozeSentence: '母（はは）は庭（にわ）で野菜（やさい）を＿＿＿＿。',
      answerKana: 'そだてています',
    },
    reviewA: {
      furigana:
        'この町（まち）では、みんなで木（き）を育（そだ）てています。',
      meaningZh: '在這個城鎮，大家一起培育樹木。',
      clozeSentence: 'この町（まち）では、みんなで木（き）を＿＿＿＿。',
      answerKana: 'そだてています',
    },
    reviewC: {
      furigana:
        '毎朝（まいあさ）、水（みず）をあげて花（はな）を育（そだ）てています。',
      meaningZh: '我每天早上澆水種花。',
    },
    explanationZh: '「育てる」表示照顧並讓孩子、植物或能力成長。',
  },
  {
    id: 'word-be-decided',
    wordJa: '決まる',
    kana: 'きまる',
    meaningZh: '決定下來',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['安排', '工作', '日常'],
    sortOrder: 76,
    phrases: [
      {
        furigana: '予定（よてい）が決（き）まる',
        meaningZh: '行程決定',
        kanaOption: 'よていがきまる',
      },
      {
        furigana: '場所（ばしょ）が決（き）まる',
        meaningZh: '地點決定',
        kanaOption: 'ばしょがきまる',
      },
    ],
    learning: {
      furigana:
        '旅行（りょこう）の日（ひ）が決（き）まったので、ホテルを探（さが）します。',
      meaningZh: '旅行日期決定了，所以要找飯店。',
    },
    quiz: {
      furigana:
        '会議（かいぎ）の場所（ばしょ）は、まだ決（き）まっていません。',
      meaningZh: '會議地點還沒決定。',
      clozeSentence:
        '会議（かいぎ）の場所（ばしょ）は、まだ＿＿＿＿いません。',
      answerKana: 'きまって',
    },
    reviewA: {
      furigana:
        '来週（らいしゅう）の予定（よてい）が決（き）まりました。',
      meaningZh: '下週的行程決定了。',
      clozeSentence: '来週（らいしゅう）の予定（よてい）が＿＿＿＿。',
      answerKana: 'きまりました',
    },
    reviewC: {
      furigana:
        '食事（しょくじ）の店（みせ）は、友（とも）だちと相談（そうだん）して決（き）まりました。',
      meaningZh: '吃飯的店和朋友討論後決定了。',
    },
    explanationZh: '「決まる」是不及物，表示事情被決定下來。',
  },
  {
    id: 'word-be-conveyed',
    wordJa: '伝わる',
    kana: 'つたわる',
    meaningZh: '傳達到、被理解',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N3',
    tags: ['溝通', '工作', '人際'],
    sortOrder: 77,
    phrases: [
      {
        furigana: '気持（きも）ちが伝（つた）わる',
        meaningZh: '心意傳達到',
        kanaOption: 'きもちがつたわる',
      },
      {
        furigana: '意味（いみ）が伝（つた）わる',
        meaningZh: '意思被理解',
        kanaOption: 'いみがつたわる',
      },
    ],
    learning: {
      furigana:
        '短（みじか）いメールでも、感謝（かんしゃ）の気持（きも）ちは伝（つた）わりました。',
      meaningZh: '即使是簡短的信，感謝的心意也傳達到了。',
    },
    quiz: {
      furigana:
        'ゆっくり話（はな）したので、説明（せつめい）の意味（いみ）が伝（つた）わりました。',
      meaningZh: '因為慢慢說，說明的意思傳達到了。',
      clozeSentence:
        'ゆっくり話（はな）したので、説明（せつめい）の意味（いみ）が＿＿＿＿。',
      answerKana: 'つたわりました',
    },
    reviewA: {
      furigana:
        '写真（しゃしん）を見（み）ると、旅行（りょこう）の楽（たの）しさが伝（つた）わります。',
      meaningZh: '看照片就能感受到旅行的開心。',
      clozeSentence:
        '写真（しゃしん）を見（み）ると、旅行（りょこう）の楽（たの）しさが＿＿＿＿。',
      answerKana: 'つたわります',
    },
    reviewC: {
      furigana:
        '丁寧（ていねい）に話（はな）したら、私（わたし）の気持（きも）ちが伝（つた）わりました。',
      meaningZh: '我仔細說明後，我的心意傳達到了。',
    },
    explanationZh: '「伝わる」表示訊息、心情或意思被對方理解。',
  },
  {
    id: 'word-deliver',
    wordJa: '届ける',
    kana: 'とどける',
    meaningZh: '送達、送去',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N3',
    tags: ['物品', '工作', '日常'],
    sortOrder: 78,
    phrases: [
      {
        furigana: '荷物（にもつ）を届（とど）ける',
        meaningZh: '送包裹',
        kanaOption: 'にもつをとどける',
      },
      {
        furigana: '書類（しょるい）を届（とど）ける',
        meaningZh: '送文件',
        kanaOption: 'しょるいをとどける',
      },
    ],
    learning: {
      furigana:
        '昼（ひる）までに、受付（うけつけ）へ書類（しょるい）を届（とど）けます。',
      meaningZh: '中午前會把文件送到櫃台。',
    },
    quiz: {
      furigana:
        '忘（わす）れ物（もの）を友（とも）だちの家（いえ）に届（とど）けました。',
      meaningZh: '我把遺忘的東西送到朋友家。',
      clozeSentence:
        '忘（わす）れ物（もの）を友（とも）だちの家（いえ）に＿＿＿＿。',
      answerKana: 'とどけました',
    },
    reviewA: {
      furigana:
        'この荷物（にもつ）を午後（ごご）までに届（とど）けます。',
      meaningZh: '這個包裹會在下午前送達。',
      clozeSentence: 'この荷物（にもつ）を午後（ごご）までに＿＿＿＿。',
      answerKana: 'とどけます',
    },
    reviewC: {
      furigana:
        '会社（かいしゃ）の受付（うけつけ）に、書類（しょるい）を届（とど）けました。',
      meaningZh: '我把文件送到了公司的櫃台。',
    },
    explanationZh: '「届ける」表示把東西送到指定的人或地方。',
  },
  {
    id: 'word-request',
    wordJa: '頼む',
    kana: 'たのむ',
    meaningZh: '拜託、請求',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['人際', '工作', '日常'],
    sortOrder: 79,
    phrases: [
      {
        furigana: '友（とも）だちに頼（たの）む',
        meaningZh: '拜託朋友',
        kanaOption: 'ともだちにたのむ',
      },
      {
        furigana: '仕事（しごと）を頼（たの）む',
        meaningZh: '委託工作',
        kanaOption: 'しごとをたのむ',
      },
    ],
    learning: {
      furigana:
        '忙（いそが）しい時（とき）は、同僚（どうりょう）に少（すこ）し手伝（てつだ）いを頼（たの）みます。',
      meaningZh: '忙的時候，我會拜託同事稍微幫忙。',
    },
    quiz: {
      furigana:
        '明日（あした）の準備（じゅんび）を友（とも）だちに頼（たの）みました。',
      meaningZh: '我拜託朋友幫忙明天的準備。',
      clozeSentence:
        '明日（あした）の準備（じゅんび）を友（とも）だちに＿＿＿＿。',
      answerKana: 'たのみました',
    },
    reviewA: {
      furigana:
        '重（おも）い荷物（にもつ）を運（はこ）ぶのを兄（あに）に頼（たの）みました。',
      meaningZh: '我拜託哥哥幫忙搬重物。',
      clozeSentence:
        '重（おも）い荷物（にもつ）を運（はこ）ぶのを兄（あに）に＿＿＿＿。',
      answerKana: 'たのみました',
    },
    reviewC: {
      furigana:
        '会議（かいぎ）の資料（しりょう）作（づく）りを、同僚（どうりょう）に頼（たの）みました。',
      meaningZh: '我拜託同事做會議資料。',
    },
    explanationZh: '「頼む」表示請別人幫忙或委託某件事。',
  },
  {
    id: 'word-apologize',
    wordJa: '謝る',
    kana: 'あやまる',
    meaningZh: '道歉',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['人際', '日常', '禮貌'],
    sortOrder: 80,
    phrases: [
      {
        furigana: '友（とも）だちに謝（あやま）る',
        meaningZh: '向朋友道歉',
        kanaOption: 'ともだちにあやまる',
      },
      {
        furigana: 'すぐ謝（あやま）る',
        meaningZh: '立刻道歉',
        kanaOption: 'すぐあやまる',
      },
    ],
    learning: {
      furigana:
        '約束（やくそく）の時間（じかん）に遅（おく）れたので、友（とも）だちに謝（あやま）りました。',
      meaningZh: '因為約定時間遲到了，所以我向朋友道歉。',
    },
    quiz: {
      furigana:
        '間違（まちが）えて別（べつ）の資料（しりょう）を送（おく）ったので、すぐ謝（あやま）りました。',
      meaningZh: '因為寄錯資料，所以立刻道歉了。',
      clozeSentence:
        '間違（まちが）えて別（べつ）の資料（しりょう）を送（おく）ったので、すぐ＿＿＿＿。',
      answerKana: 'あやまりました',
    },
    reviewA: {
      furigana:
        '大（おお）きな声（こえ）を出（だ）してしまったので、家族（かぞく）に謝（あやま）りました。',
      meaningZh: '因為不小心大聲說話，所以向家人道歉。',
      clozeSentence:
        '大（おお）きな声（こえ）を出（だ）してしまったので、家族（かぞく）に＿＿＿＿。',
      answerKana: 'あやまりました',
    },
    reviewC: {
      furigana:
        '遅（おく）れて着（つ）いたので、先生（せんせい）に謝（あやま）りました。',
      meaningZh: '因為遲到抵達，所以我向老師道歉。',
    },
    explanationZh: '「謝る」表示承認失誤並向對方道歉。',
  },
  {
    id: 'word-invite',
    wordJa: '誘う',
    kana: 'さそう',
    meaningZh: '邀請',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['人際', '外出', '日常'],
    sortOrder: 81,
    phrases: [
      {
        furigana: '友（とも）だちを誘（さそ）う',
        meaningZh: '邀請朋友',
        kanaOption: 'ともだちをさそう',
      },
      {
        furigana: '食事（しょくじ）に誘（さそ）う',
        meaningZh: '邀約吃飯',
        kanaOption: 'しょくじにさそう',
      },
    ],
    learning: {
      furigana:
        '週末（しゅうまつ）に、友（とも）だちを映画（えいが）に誘（さそ）いました。',
      meaningZh: '週末我邀請朋友去看電影。',
    },
    quiz: {
      furigana:
        '仕事（しごと）の後（あと）、同僚（どうりょう）を食事（しょくじ）に誘（さそ）いました。',
      meaningZh: '下班後，我邀同事吃飯。',
      clozeSentence:
        '仕事（しごと）の後（あと）、同僚（どうりょう）を食事（しょくじ）に＿＿＿＿。',
      answerKana: 'さそいました',
    },
    reviewA: {
      furigana:
        '日曜日（にちようび）に、妹（いもうと）を買（か）い物（もの）に誘（さそ）いました。',
      meaningZh: '星期日我邀妹妹去買東西。',
      clozeSentence:
        '日曜日（にちようび）に、妹（いもうと）を買（か）い物（もの）に＿＿＿＿。',
      answerKana: 'さそいました',
    },
    reviewC: {
      furigana:
        '友（とも）だちを駅前（えきまえ）のカフェに誘（さそ）いました。',
      meaningZh: '我邀朋友去車站前的咖啡店。',
    },
    explanationZh: '「誘う」表示邀請對方一起做某事或去某處。',
  },
  {
    id: 'word-be-happy',
    wordJa: '喜ぶ',
    kana: 'よろこぶ',
    meaningZh: '高興、喜悅',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['感情', '人際', '日常'],
    sortOrder: 82,
    phrases: [
      {
        furigana: '友（とも）だちが喜（よろこ）ぶ',
        meaningZh: '朋友很高興',
        kanaOption: 'ともだちがよろこぶ',
      },
      {
        furigana: 'プレゼントを喜（よろこ）ぶ',
        meaningZh: '因禮物而高興',
        kanaOption: 'プレゼントをよろこぶ',
      },
    ],
    learning: {
      furigana:
        '母（はは）に花（はな）をあげたら、とても喜（よろこ）びました。',
      meaningZh: '送花給媽媽後，她非常高興。',
    },
    quiz: {
      furigana:
        '友（とも）だちは小（ちい）さいプレゼントを喜（よろこ）びました。',
      meaningZh: '朋友因小禮物而很高興。',
      clozeSentence:
        '友（とも）だちは小（ちい）さいプレゼントを＿＿＿＿。',
      answerKana: 'よろこびました',
    },
    reviewA: {
      furigana:
        '子（こ）どもは新（あたら）しい本（ほん）を喜（よろこ）びました。',
      meaningZh: '孩子因新書而高興。',
      clozeSentence: '子（こ）どもは新（あたら）しい本（ほん）を＿＿＿＿。',
      answerKana: 'よろこびました',
    },
    reviewC: {
      furigana:
        '妹（いもうと）は誕生日（たんじょうび）のケーキを喜（よろこ）びました。',
      meaningZh: '妹妹很喜歡生日蛋糕。',
    },
    explanationZh: '「喜ぶ」表示因某事而感到高興。',
  },
  {
    id: 'word-enjoy',
    wordJa: '楽しむ',
    kana: 'たのしむ',
    meaningZh: '享受、期待並玩得開心',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['感情', '休閒', '日常'],
    sortOrder: 83,
    phrases: [
      {
        furigana: '旅行（りょこう）を楽（たの）しむ',
        meaningZh: '享受旅行',
        kanaOption: 'りょこうをたのしむ',
      },
      {
        furigana: '週末（しゅうまつ）を楽（たの）しむ',
        meaningZh: '享受週末',
        kanaOption: 'しゅうまつをたのしむ',
      },
    ],
    learning: {
      furigana:
        '休（やす）みの日（ひ）は、家族（かぞく）と料理（りょうり）を楽（たの）しみます。',
      meaningZh: '休息日我會和家人一起享受做料理。',
    },
    quiz: {
      furigana:
        '友（とも）だちと公園（こうえん）でピクニックを楽（たの）しみました。',
      meaningZh: '我和朋友在公園享受野餐。',
      clozeSentence:
        '友（とも）だちと公園（こうえん）でピクニックを＿＿＿＿。',
      answerKana: 'たのしみました',
    },
    reviewA: {
      furigana:
        '週末（しゅうまつ）は、家（いえ）で映画（えいが）を楽（たの）しみます。',
      meaningZh: '週末我在家享受電影。',
      clozeSentence: '週末（しゅうまつ）は、家（いえ）で映画（えいが）を＿＿＿＿。',
      answerKana: 'たのしみます',
    },
    reviewC: {
      furigana:
        '旅行（りょこう）では、町（まち）の散歩（さんぽ）を楽（たの）しみました。',
      meaningZh: '旅行中，我享受在街上散步。',
    },
    explanationZh: '「楽しむ」表示主動享受某件事帶來的樂趣。',
  },
  {
    id: 'word-be-sad',
    wordJa: '悲しむ',
    kana: 'かなしむ',
    meaningZh: '悲傷、難過',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N3',
    tags: ['感情', '人際', '日常'],
    sortOrder: 84,
    phrases: [
      {
        furigana: '別（わか）れを悲（かな）しむ',
        meaningZh: '因離別而難過',
        kanaOption: 'わかれをかなしむ',
      },
      {
        furigana: '失敗（しっぱい）を悲（かな）しむ',
        meaningZh: '因失敗而悲傷',
        kanaOption: 'しっぱいをかなしむ',
      },
    ],
    learning: {
      furigana:
        '友（とも）だちが遠（とお）くへ引（ひ）っ越（こ）すので、みんな悲（かな）しんでいます。',
      meaningZh: '朋友要搬到遠方，所以大家都很難過。',
    },
    quiz: {
      furigana:
        '試合（しあい）に負（ま）けて、子（こ）どもたちは悲（かな）しみました。',
      meaningZh: '比賽輸了，孩子們很難過。',
      clozeSentence:
        '試合（しあい）に負（ま）けて、子（こ）どもたちは＿＿＿＿。',
      answerKana: 'かなしみました',
    },
    reviewA: {
      furigana:
        '大切（たいせつ）な物（もの）をなくして、彼（かれ）は悲（かな）しんでいます。',
      meaningZh: '他弄丟重要的東西，正在難過。',
      clozeSentence:
        '大切（たいせつ）な物（もの）をなくして、彼（かれ）は＿＿＿＿。',
      answerKana: 'かなしんでいます',
    },
    reviewC: {
      furigana:
        '祖母（そぼ）が入院（にゅういん）して、家族（かぞく）は悲（かな）しんでいます。',
      meaningZh: '祖母住院了，家人很難過。',
    },
    explanationZh: '「悲しむ」表示因不好的事情而感到難過。',
  },
  {
    id: 'word-get-tired',
    wordJa: '疲れる',
    kana: 'つかれる',
    meaningZh: '累、疲倦',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['身體', '日常', '工作'],
    sortOrder: 85,
    phrases: [
      {
        furigana: '仕事（しごと）で疲（つか）れる',
        meaningZh: '因工作而累',
        kanaOption: 'しごとでつかれる',
      },
      {
        furigana: '歩（ある）きすぎて疲（つか）れる',
        meaningZh: '走太多而累',
        kanaOption: 'あるきすぎてつかれる',
      },
    ],
    learning: {
      furigana:
        '今日（きょう）はたくさん歩（ある）いたので、とても疲（つか）れました。',
      meaningZh: '今天走了很多路，所以非常累。',
    },
    quiz: {
      furigana:
        '仕事（しごと）が忙（いそが）しくて、少（すこ）し疲（つか）れました。',
      meaningZh: '工作很忙，所以有點累。',
      clozeSentence:
        '仕事（しごと）が忙（いそが）しくて、少（すこ）し＿＿＿＿。',
      answerKana: 'つかれました',
    },
    reviewA: {
      furigana:
        '長（なが）い会議（かいぎ）の後（あと）は、いつも疲（つか）れます。',
      meaningZh: '長會議後總是很累。',
      clozeSentence:
        '長（なが）い会議（かいぎ）の後（あと）は、いつも＿＿＿＿。',
      answerKana: 'つかれます',
    },
    reviewC: {
      furigana:
        '駅（えき）まで走（はし）ったので、とても疲（つか）れました。',
      meaningZh: '因為跑到車站，所以很累。',
    },
    explanationZh: '「疲れる」表示身體或精神感到疲勞。',
  },
  {
    id: 'word-sleep',
    wordJa: '眠る',
    kana: 'ねむる',
    meaningZh: '睡、入睡',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['生活', '身體', '日常'],
    sortOrder: 86,
    phrases: [
      {
        furigana: '早（はや）く眠（ねむ）る',
        meaningZh: '早點睡',
        kanaOption: 'はやくねむる',
      },
      {
        furigana: 'よく眠（ねむ）る',
        meaningZh: '睡得好',
        kanaOption: 'よくねむる',
      },
    ],
    learning: {
      furigana:
        '明日（あした）は早（はや）いので、今夜（こんや）は早（はや）く眠（ねむ）ります。',
      meaningZh: '明天很早，所以今晚要早點睡。',
    },
    quiz: {
      furigana:
        '昨日（きのう）はよく眠（ねむ）れたので、朝（あさ）から元気（げんき）です。',
      meaningZh: '昨天睡得很好，所以早上起來很有精神。',
      clozeSentence:
        '昨日（きのう）はよく＿＿＿＿たので、朝（あさ）から元気（げんき）です。',
      answerKana: 'ねむれ',
    },
    reviewA: {
      furigana:
        '疲（つか）れていたので、電気（でんき）を消（け）してすぐ眠（ねむ）りました。',
      meaningZh: '因為很累，關燈後馬上睡著了。',
      clozeSentence:
        '疲（つか）れていたので、電気（でんき）を消（け）してすぐ＿＿＿＿。',
      answerKana: 'ねむりました',
    },
    reviewC: {
      furigana:
        '明日（あした）早（はや）く出（で）るので、今夜（こんや）は早（はや）く眠（ねむ）ります。',
      meaningZh: '明天要早出門，所以今晚早點睡。',
    },
    explanationZh: '「眠る」表示睡覺或進入睡眠狀態。',
  },
  {
    id: 'word-wake-someone',
    wordJa: '起こす',
    kana: 'おこす',
    meaningZh: '叫醒、使起來',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['生活', '家庭', '日常'],
    sortOrder: 87,
    phrases: [
      {
        furigana: '子（こ）どもを起（お）こす',
        meaningZh: '叫醒孩子',
        kanaOption: 'こどもをおこす',
      },
      {
        furigana: '朝（あさ）七時（しちじ）に起（お）こす',
        meaningZh: '早上七點叫醒',
        kanaOption: 'あさしちじにおこす',
      },
    ],
    learning: {
      furigana:
        '母（はは）は毎朝（まいあさ）六時（ろくじ）に私（わたし）を起（お）こします。',
      meaningZh: '媽媽每天早上六點叫醒我。',
    },
    quiz: {
      furigana:
        '明日（あした）早（はや）いので、七時（しちじ）に起（お）こしてください。',
      meaningZh: '明天很早，請七點叫醒我。',
      clozeSentence:
        '明日（あした）早（はや）いので、七時（しちじ）に＿＿＿＿ください。',
      answerKana: 'おこして',
    },
    reviewA: {
      furigana:
        '弟（おとうと）を学校（がっこう）へ行（い）く前（まえ）に起（お）こしました。',
      meaningZh: '我在弟弟去學校前叫醒了他。',
      clozeSentence:
        '弟（おとうと）を学校（がっこう）へ行（い）く前（まえ）に＿＿＿＿。',
      answerKana: 'おこしました',
    },
    reviewC: {
      furigana:
        '明日（あした）の朝（あさ）、六時（ろくじ）に私（わたし）を起（お）こしてください。',
      meaningZh: '明天早上六點請叫醒我。',
    },
    explanationZh: '「起こす」表示把睡著或躺著的人叫起來。',
  },
  {
    id: 'word-sit',
    wordJa: '座る',
    kana: 'すわる',
    meaningZh: '坐下',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['動作', '日常', '公共場所'],
    sortOrder: 88,
    phrases: [
      {
        furigana: '席（せき）に座（すわ）る',
        meaningZh: '坐到座位上',
        kanaOption: 'せきにすわる',
      },
      {
        furigana: '椅子（いす）に座（すわ）る',
        meaningZh: '坐在椅子上',
        kanaOption: 'いすにすわる',
      },
    ],
    learning: {
      furigana:
        '電車（でんしゃ）が空（す）いていたので、すぐ席（せき）に座（すわ）れました。',
      meaningZh: '電車很空，所以我馬上有座位坐。',
    },
    quiz: {
      furigana:
        '受付（うけつけ）の前（まえ）の椅子（いす）に座（すわ）って待（ま）ちます。',
      meaningZh: '坐在櫃台前的椅子上等。',
      clozeSentence:
        '受付（うけつけ）の前（まえ）の椅子（いす）に＿＿＿＿待（ま）ちます。',
      answerKana: 'すわって',
    },
    reviewA: {
      furigana:
        '疲（つか）れたので、公園（こうえん）のベンチに座（すわ）りました。',
      meaningZh: '因為累了，所以坐在公園長椅上。',
      clozeSentence:
        '疲（つか）れたので、公園（こうえん）のベンチに＿＿＿＿。',
      answerKana: 'すわりました',
    },
    reviewC: {
      furigana:
        '駅（えき）のベンチに座（すわ）って、友（とも）だちを待（ま）ちました。',
      meaningZh: '我坐在車站長椅上等朋友。',
    },
    explanationZh: '「座る」表示坐到椅子、座位或地上。',
  },
  {
    id: 'word-stand',
    wordJa: '立つ',
    kana: 'たつ',
    meaningZh: '站、站起來',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['動作', '日常', '公共場所'],
    sortOrder: 89,
    phrases: [
      {
        furigana: '前（まえ）に立（た）つ',
        meaningZh: '站在前面',
        kanaOption: 'まえにたつ',
      },
      {
        furigana: '席（せき）を立（た）つ',
        meaningZh: '離開座位',
        kanaOption: 'せきをたつ',
      },
    ],
    learning: {
      furigana:
        'バスが混（こ）んでいたので、駅（えき）まで立（た）っていました。',
      meaningZh: '公車很擠，所以我站到車站。',
    },
    quiz: {
      furigana:
        '名前（なまえ）を呼（よ）ばれたら、前（まえ）に立（た）ってください。',
      meaningZh: '被叫到名字時，請站到前面。',
      clozeSentence:
        '名前（なまえ）を呼（よ）ばれたら、前（まえ）に＿＿＿＿ください。',
      answerKana: 'たって',
    },
    reviewA: {
      furigana:
        '電車（でんしゃ）でお年寄（としよ）りに席（せき）をゆずるために立（た）ちました。',
      meaningZh: '在電車上為了讓座給長輩而站起來。',
      clozeSentence:
        '電車（でんしゃ）でお年寄（としよ）りに席（せき）をゆずるために＿＿＿＿。',
      answerKana: 'たちました',
    },
    reviewC: {
      furigana:
        '駅（えき）の入口（いりぐち）に立（た）って、友（とも）だちを待（ま）ちました。',
      meaningZh: '我站在車站入口等朋友。',
    },
    explanationZh: '「立つ」表示站著、站起來，或離開座位。',
  },
  {
    id: 'word-touch',
    wordJa: '触る',
    kana: 'さわる',
    meaningZh: '碰、觸摸',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['動作', '日常', '注意'],
    sortOrder: 90,
    phrases: [
      {
        furigana: '画面（がめん）に触（さわ）る',
        meaningZh: '碰螢幕',
        kanaOption: 'がめんにさわる',
      },
      {
        furigana: '熱（あつ）い物（もの）に触（さわ）る',
        meaningZh: '碰熱的東西',
        kanaOption: 'あついものにさわる',
      },
    ],
    learning: {
      furigana:
        '熱（あつ）い鍋（なべ）に触（さわ）ると危（あぶ）ないです。',
      meaningZh: '碰熱鍋子很危險。',
    },
    quiz: {
      furigana:
        '展示品（てんじひん）には触（さわ）らないでください。',
      meaningZh: '請不要觸碰展示品。',
      clozeSentence: '展示品（てんじひん）には＿＿＿＿ないでください。',
      answerKana: 'さわら',
    },
    reviewA: {
      furigana:
        '子（こ）どもが熱（あつ）いコップに触（さわ）らないように見（み）ています。',
      meaningZh: '我看著孩子，避免他碰熱杯子。',
      clozeSentence:
        '子（こ）どもが熱（あつ）いコップに＿＿＿＿ないように見（み）ています。',
      answerKana: 'さわら',
    },
    reviewC: {
      furigana:
        '店（みせ）の商品（しょうひん）には、勝手（かって）に触（さわ）らないでください。',
      meaningZh: '請不要隨便碰店裡的商品。',
    },
    explanationZh: '「触る」表示用手或身體碰到某物。',
  },
]

function stripFurigana(value: string) {
  return value.replace(/（[^）]+）/gu, '')
}

function createOptions(
  index: number,
  getAnswer: (seed: VocabularySeed) => string,
) {
  return [0, 1, 2, 3].map(
    (offset) =>
      getAnswer(vocabularySeeds[(index + offset) % vocabularySeeds.length]),
  )
}

export const additionalWords3: Word[] = vocabularySeeds.map((seed) => ({
  id: seed.id,
  wordJa: seed.wordJa,
  kana: seed.kana,
  meaningZh: seed.meaningZh,
  partOfSpeech: seed.partOfSpeech,
  jlptLevel: seed.jlptLevel,
  tags: seed.tags,
  sortOrder: seed.sortOrder,
  isActive: true,
}))

export const additionalPhrases3: Phrase[] = vocabularySeeds.flatMap((seed) =>
  seed.phrases.map((phrase, index) => ({
    id: `phrase-${seed.id.replace('word-', '')}-${index + 1}`,
    wordId: seed.id,
    phraseJa: stripFurigana(phrase.furigana),
    phraseFurigana: phrase.furigana,
    meaningZh: phrase.meaningZh,
    usageOrder: index + 1,
  })),
)

export const additionalSentences3: Sentence[] = vocabularySeeds.flatMap(
  (seed) => [
    {
      id: `sentence-${seed.id.replace('word-', '')}-learning`,
      wordId: seed.id,
      sentenceType: 'learning',
      sentenceJa: stripFurigana(seed.learning.furigana),
      sentenceFurigana: seed.learning.furigana,
      meaningZh: seed.learning.meaningZh,
      clozeSentence: null,
      difficultyLevel: seed.jlptLevel === 'N3' ? 2 : 1,
      grammarTags: ['日常表現', '文型練習'],
      isDailyLife: true,
    },
    {
      id: `sentence-${seed.id.replace('word-', '')}-quiz`,
      wordId: seed.id,
      sentenceType: 'quiz',
      sentenceJa: stripFurigana(seed.quiz.furigana),
      sentenceFurigana: seed.quiz.furigana,
      meaningZh: seed.quiz.meaningZh,
      clozeSentence: seed.quiz.clozeSentence,
      difficultyLevel: seed.jlptLevel === 'N3' ? 2 : 1,
      grammarTags: ['日常表現', '穴埋め'],
      isDailyLife: true,
    },
    {
      id: `sentence-${seed.id.replace('word-', '')}-reviewA`,
      wordId: seed.id,
      sentenceType: 'reviewA',
      sentenceJa: stripFurigana(seed.reviewA.furigana),
      sentenceFurigana: seed.reviewA.furigana,
      meaningZh: seed.reviewA.meaningZh,
      clozeSentence: seed.reviewA.clozeSentence,
      difficultyLevel: seed.jlptLevel === 'N3' ? 2 : 1,
      grammarTags: ['文脈選択', '復習'],
      isDailyLife: true,
    },
    {
      id: `sentence-${seed.id.replace('word-', '')}-reviewC`,
      wordId: seed.id,
      sentenceType: 'reviewC',
      sentenceJa: stripFurigana(seed.reviewC.furigana),
      sentenceFurigana: seed.reviewC.furigana,
      meaningZh: seed.reviewC.meaningZh,
      clozeSentence: null,
      difficultyLevel: seed.jlptLevel === 'N3' ? 2 : 1,
      grammarTags: ['語順', '日常表現'],
      isDailyLife: true,
    },
  ],
)

export const additionalQuizQuestions3: QuizQuestion[] =
  vocabularySeeds.flatMap((seed, index) => {
    const idBase = seed.id.replace('word-', '')

    return [
      {
        id: `question-${idBase}-new`,
        wordId: seed.id,
        sentenceId: `sentence-${idBase}-quiz`,
        questionType: 'newQuiz',
        promptZh: seed.quiz.meaningZh,
        questionText: seed.quiz.clozeSentence,
        correctAnswer: seed.quiz.answerKana,
        options: createOptions(index, (candidate) => candidate.quiz.answerKana),
        fragments: [],
        explanationZh: seed.explanationZh,
        difficultyLevel: seed.jlptLevel === 'N3' ? 2 : 1,
      },
      {
        id: `question-${idBase}-b`,
        wordId: seed.id,
        sentenceId: null,
        questionType: 'reviewB',
        promptZh: seed.phrases[0].meaningZh,
        questionText: '請選出對應的日文片語。',
        correctAnswer: seed.phrases[0].kanaOption,
        options: createOptions(
          index,
          (candidate) => candidate.phrases[0].kanaOption,
        ),
        fragments: [],
        explanationZh: seed.explanationZh,
        difficultyLevel: seed.jlptLevel === 'N3' ? 2 : 1,
      },
      {
        id: `question-${idBase}-a`,
        wordId: seed.id,
        sentenceId: `sentence-${idBase}-reviewA`,
        questionType: 'reviewA',
        promptZh: seed.reviewA.meaningZh,
        questionText: seed.reviewA.clozeSentence,
        correctAnswer: seed.reviewA.answerKana,
        options: createOptions(
          index,
          (candidate) => candidate.reviewA.answerKana,
        ),
        fragments: [],
        explanationZh: seed.explanationZh,
        difficultyLevel: seed.jlptLevel === 'N3' ? 2 : 1,
      },
      {
        id: `question-${idBase}-c`,
        wordId: seed.id,
        sentenceId: `sentence-${idBase}-reviewC`,
        questionType: 'reviewC',
        promptZh: seed.reviewC.meaningZh,
        questionText: '請排列成自然的日文句子。',
        correctAnswer: seed.reviewC.furigana,
        options: [],
        fragments: [],
        explanationZh: '把時間、場所、對象與動詞依自然語順排列即可。',
        difficultyLevel: seed.jlptLevel === 'N3' ? 2 : 1,
      },
    ]
  })
