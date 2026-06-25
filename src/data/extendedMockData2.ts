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
    id: 'word-continue',
    wordJa: '続ける',
    kana: 'つづける',
    meaningZh: '繼續、持續',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['習慣', '學習', '健康'],
    sortOrder: 31,
    phrases: [
      {
        furigana: '運動（うんどう）を続（つづ）ける',
        meaningZh: '持續運動',
        kanaOption: 'うんどうをつづける',
      },
      {
        furigana: '日記（にっき）を続（つづ）ける',
        meaningZh: '持續寫日記',
        kanaOption: 'にっきをつづける',
      },
    ],
    learning: {
      furigana:
        '毎日（まいにち）、短（みじか）い時間（じかん）でも勉強（べんきょう）を続（つづ）けています。',
      meaningZh: '我每天即使時間很短，也持續學習。',
    },
    quiz: {
      furigana:
        '健康（けんこう）のために、朝（あさ）の散歩（さんぽ）を続（つづ）けます。',
      meaningZh: '為了健康，我會持續早晨散步。',
      clozeSentence:
        '健康（けんこう）のために、朝（あさ）の散歩（さんぽ）を＿＿＿＿。',
      answerKana: 'つづけます',
    },
    reviewA: {
      furigana:
        '忙（いそが）しくても、日本語（にほんご）の勉強（べんきょう）を続（つづ）けています。',
      meaningZh: '即使很忙，我仍持續學日文。',
      clozeSentence:
        '忙（いそが）しくても、日本語（にほんご）の勉強（べんきょう）を＿＿＿＿います。',
      answerKana: 'つづけて',
    },
    reviewC: {
      furigana:
        '来月（らいげつ）もこの運動（うんどう）を続（つづ）けます。',
      meaningZh: '下個月我也會繼續這項運動。',
    },
    explanationZh: '「続ける」表示讓某個行動或習慣不中斷。',
  },
  {
    id: 'word-stop',
    wordJa: '止める',
    kana: 'とめる',
    meaningZh: '停止、停放',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['交通', '家中', '日常'],
    sortOrder: 32,
    phrases: [
      {
        furigana: '車（くるま）を止（と）める',
        meaningZh: '停車',
        kanaOption: 'くるまをとめる',
      },
      {
        furigana: '音楽（おんがく）を止（と）める',
        meaningZh: '停止音樂',
        kanaOption: 'おんがくをとめる',
      },
    ],
    learning: {
      furigana:
        '店（みせ）の前（まえ）に自転車（じてんしゃ）を止（と）めました。',
      meaningZh: '我把腳踏車停在店門口。',
    },
    quiz: {
      furigana:
        '寝（ね）る前（まえ）にテレビを止（と）めます。',
      meaningZh: '睡覺前我會關掉電視。',
      clozeSentence:
        '寝（ね）る前（まえ）にテレビを＿＿＿＿。',
      answerKana: 'とめます',
    },
    reviewA: {
      furigana:
        '電話（でんわ）が来（き）たので、音楽（おんがく）を止（と）めました。',
      meaningZh: '因為電話來了，所以我停止音樂。',
      clozeSentence:
        '電話（でんわ）が来（き）たので、音楽（おんがく）を＿＿＿＿。',
      answerKana: 'とめました',
    },
    reviewC: {
      furigana:
        '雨（あめ）が強（つよ）いので、車（くるま）を近（ちか）くに止（と）めました。',
      meaningZh: '因為雨很大，我把車停在附近。',
    },
    explanationZh: '「止める」表示主動讓動作停止或把車輛停下。',
  },
  {
    id: 'word-start',
    wordJa: '始める',
    kana: 'はじめる',
    meaningZh: '開始',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['工作', '學習', '日常'],
    sortOrder: 33,
    phrases: [
      {
        furigana: '仕事（しごと）を始（はじ）める',
        meaningZh: '開始工作',
        kanaOption: 'しごとをはじめる',
      },
      {
        furigana: '勉強（べんきょう）を始（はじ）める',
        meaningZh: '開始學習',
        kanaOption: 'べんきょうをはじめる',
      },
    ],
    learning: {
      furigana:
        '今日（きょう）から新（あたら）しい仕事（しごと）を始（はじ）めました。',
      meaningZh: '我從今天開始新工作。',
    },
    quiz: {
      furigana:
        '夕食（ゆうしょく）の後（あと）で宿題（しゅくだい）を始（はじ）めます。',
      meaningZh: '晚餐後我要開始寫作業。',
      clozeSentence:
        '夕食（ゆうしょく）の後（あと）で宿題（しゅくだい）を＿＿＿＿。',
      answerKana: 'はじめます',
    },
    reviewA: {
      furigana:
        '来週（らいしゅう）から朝（あさ）の運動（うんどう）を始（はじ）めます。',
      meaningZh: '我下週開始晨間運動。',
      clozeSentence:
        '来週（らいしゅう）から朝（あさ）の運動（うんどう）を＿＿＿＿。',
      answerKana: 'はじめます',
    },
    reviewC: {
      furigana:
        '母（はは）は先月（せんげつ）から料理教室（りょうりきょうしつ）を始（はじ）めました。',
      meaningZh: '媽媽從上個月開始上料理課。',
    },
    explanationZh: '「始める」表示主動開始一項活動。',
  },
  {
    id: 'word-finish',
    wordJa: '終わる',
    kana: 'おわる',
    meaningZh: '結束、完成',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['工作', '時間', '日常'],
    sortOrder: 34,
    phrases: [
      {
        furigana: '仕事（しごと）が終（お）わる',
        meaningZh: '工作結束',
        kanaOption: 'しごとがおわる',
      },
      {
        furigana: '授業（じゅぎょう）が終（お）わる',
        meaningZh: '下課',
        kanaOption: 'じゅぎょうがおわる',
      },
    ],
    learning: {
      furigana:
        '今日（きょう）の仕事（しごと）は六時（ろくじ）に終（お）わりました。',
      meaningZh: '今天的工作六點結束。',
    },
    quiz: {
      furigana:
        '授業（じゅぎょう）は午後（ごご）三時（さんじ）に終（お）わります。',
      meaningZh: '課程下午三點結束。',
      clozeSentence:
        '授業（じゅぎょう）は午後（ごご）三時（さんじ）に＿＿＿＿。',
      answerKana: 'おわります',
    },
    reviewA: {
      furigana:
        '会議（かいぎ）が終（お）わったら、連絡（れんらく）します。',
      meaningZh: '會議結束後我會聯絡你。',
      clozeSentence:
        '会議（かいぎ）が＿＿＿＿、連絡（れんらく）します。',
      answerKana: 'おわったら',
    },
    reviewC: {
      furigana:
        '映画（えいが）は夜（よる）九時（くじ）ごろ終（お）わりました。',
      meaningZh: '電影大約晚上九點結束。',
    },
    explanationZh: '「終わる」表示活動或時間自然到達結束。',
  },
  {
    id: 'word-help',
    wordJa: '手伝う',
    kana: 'てつだう',
    meaningZh: '幫忙',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['家事', '朋友', '日常'],
    sortOrder: 35,
    phrases: [
      {
        furigana: '家事（かじ）を手伝（てつだ）う',
        meaningZh: '幫忙做家事',
        kanaOption: 'かじをてつだう',
      },
      {
        furigana: '引（ひ）っ越（こ）しを手伝（てつだ）う',
        meaningZh: '幫忙搬家',
        kanaOption: 'ひっこしをてつだう',
      },
    ],
    learning: {
      furigana:
        '夕食（ゆうしょく）の準備（じゅんび）を手伝（てつだ）いました。',
      meaningZh: '我幫忙準備晚餐。',
    },
    quiz: {
      furigana:
        '週末（しゅうまつ）に友達（ともだち）の引（ひ）っ越（こ）しを手伝（てつだ）います。',
      meaningZh: '週末我要幫朋友搬家。',
      clozeSentence:
        '週末（しゅうまつ）に友達（ともだち）の引（ひ）っ越（こ）しを＿＿＿＿。',
      answerKana: 'てつだいます',
    },
    reviewA: {
      furigana:
        '忙（いそが）しい母（はは）の家事（かじ）を手伝（てつだ）いました。',
      meaningZh: '我幫忙忙碌的媽媽做家事。',
      clozeSentence:
        '忙（いそが）しい母（はは）の家事（かじ）を＿＿＿＿。',
      answerKana: 'てつだいました',
    },
    reviewC: {
      furigana:
        '弟（おとうと）が荷物（にもつ）を運（はこ）ぶのを手伝（てつだ）ってくれました。',
      meaningZh: '弟弟幫我搬了行李。',
    },
    explanationZh: '「手伝う」表示協助別人完成事情。',
  },
  {
    id: 'word-receive',
    wordJa: '受け取る',
    kana: 'うけとる',
    meaningZh: '領取、接收',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N3',
    tags: ['包裹', '文件', '日常'],
    sortOrder: 36,
    phrases: [
      {
        furigana: '荷物（にもつ）を受（う）け取（と）る',
        meaningZh: '領取包裹',
        kanaOption: 'にもつをうけとる',
      },
      {
        furigana: '書類（しょるい）を受（う）け取（と）る',
        meaningZh: '領取文件',
        kanaOption: 'しょるいをうけとる',
      },
    ],
    learning: {
      furigana:
        '会社（かいしゃ）の受付（うけつけ）で荷物（にもつ）を受（う）け取（と）りました。',
      meaningZh: '我在公司櫃檯領了包裹。',
    },
    quiz: {
      furigana:
        '帰（かえ）りにコンビニで荷物（にもつ）を受（う）け取（と）ります。',
      meaningZh: '回家途中我要在便利商店領包裹。',
      clozeSentence:
        '帰（かえ）りにコンビニで荷物（にもつ）を＿＿＿＿。',
      answerKana: 'うけとります',
    },
    reviewA: {
      furigana:
        '先生（せんせい）から大切（たいせつ）な書類（しょるい）を受（う）け取（と）りました。',
      meaningZh: '我從老師那裡收到了重要文件。',
      clozeSentence:
        '先生（せんせい）から大切（たいせつ）な書類（しょるい）を＿＿＿＿。',
      answerKana: 'うけとりました',
    },
    reviewC: {
      furigana:
        '注文（ちゅうもん）した商品（しょうひん）を昨日（きのう）受（う）け取（と）りました。',
      meaningZh: '我昨天收到了訂購的商品。',
    },
    explanationZh: '「受け取る」表示從他人或服務處接收物品。',
  },
  {
    id: 'word-hand-over',
    wordJa: '渡す',
    kana: 'わたす',
    meaningZh: '交給、遞交',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['工作', '禮物', '日常'],
    sortOrder: 37,
    phrases: [
      {
        furigana: '資料（しりょう）を渡（わた）す',
        meaningZh: '交付資料',
        kanaOption: 'しりょうをわたす',
      },
      {
        furigana: 'プレゼントを渡（わた）す',
        meaningZh: '送出禮物',
        kanaOption: 'プレゼントをわたす',
      },
    ],
    learning: {
      furigana:
        '友達（ともだち）に誕生日（たんじょうび）のプレゼントを渡（わた）しました。',
      meaningZh: '我把生日禮物交給朋友。',
    },
    quiz: {
      furigana:
        '会議（かいぎ）の前（まえ）にみんなへ資料（しりょう）を渡（わた）します。',
      meaningZh: '會議前我要把資料交給大家。',
      clozeSentence:
        '会議（かいぎ）の前（まえ）にみんなへ資料（しりょう）を＿＿＿＿。',
      answerKana: 'わたします',
    },
    reviewA: {
      furigana:
        '駅（えき）で母（はは）に旅行（りょこう）の切符（きっぷ）を渡（わた）しました。',
      meaningZh: '我在車站把旅行車票交給媽媽。',
      clozeSentence:
        '駅（えき）で母（はは）に旅行（りょこう）の切符（きっぷ）を＿＿＿＿。',
      answerKana: 'わたしました',
    },
    reviewC: {
      furigana:
        '店員（てんいん）に予約（よやく）の紙（かみ）を渡（わた）しました。',
      meaningZh: '我把預約單交給店員。',
    },
    explanationZh: '「渡す」表示把手上的物品交給另一個人。',
  },
  {
    id: 'word-put',
    wordJa: '置く',
    kana: 'おく',
    meaningZh: '放置、擺放',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['家中', '物品', '日常'],
    sortOrder: 38,
    phrases: [
      {
        furigana: '机（つくえ）に置（お）く',
        meaningZh: '放在桌上',
        kanaOption: 'つくえにおく',
      },
      {
        furigana: '荷物（にもつ）を置（お）く',
        meaningZh: '放下行李',
        kanaOption: 'にもつをおく',
      },
    ],
    learning: {
      furigana:
        '鍵（かぎ）は玄関（げんかん）の棚（たな）に置（お）きました。',
      meaningZh: '鑰匙放在玄關的架子上。',
    },
    quiz: {
      furigana:
        '買（か）った物（もの）を机（つくえ）の上（うえ）に置（お）きます。',
      meaningZh: '我要把買的東西放在桌上。',
      clozeSentence:
        '買（か）った物（もの）を机（つくえ）の上（うえ）に＿＿＿＿。',
      answerKana: 'おきます',
    },
    reviewA: {
      furigana:
        '濡（ぬ）れた傘（かさ）を入口（いりぐち）の横（よこ）に置（お）きました。',
      meaningZh: '我把濕雨傘放在入口旁。',
      clozeSentence:
        '濡（ぬ）れた傘（かさ）を入口（いりぐち）の横（よこ）に＿＿＿＿。',
      answerKana: 'おきました',
    },
    reviewC: {
      furigana:
        '旅行（りょこう）の荷物（にもつ）を部屋（へや）の隅（すみ）に置（お）きました。',
      meaningZh: '我把旅行行李放在房間角落。',
    },
    explanationZh: '「置く」表示把物品放在某個位置。',
  },
  {
    id: 'word-look-up',
    wordJa: '調べる',
    kana: 'しらべる',
    meaningZh: '查詢、調查',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['交通', '學習', '資訊'],
    sortOrder: 39,
    phrases: [
      {
        furigana: '時間（じかん）を調（しら）べる',
        meaningZh: '查詢時間',
        kanaOption: 'じかんをしらべる',
      },
      {
        furigana: '意味（いみ）を調（しら）べる',
        meaningZh: '查詢意思',
        kanaOption: 'いみをしらべる',
      },
    ],
    learning: {
      furigana:
        '分（わ）からない言葉（ことば）の意味（いみ）を調（しら）べました。',
      meaningZh: '我查了不懂的詞語意思。',
    },
    quiz: {
      furigana:
        '出（で）かける前（まえ）に電車（でんしゃ）の時間（じかん）を調（しら）べます。',
      meaningZh: '出門前我會查電車時間。',
      clozeSentence:
        '出（で）かける前（まえ）に電車（でんしゃ）の時間（じかん）を＿＿＿＿。',
      answerKana: 'しらべます',
    },
    reviewA: {
      furigana:
        '旅行先（りょこうさき）の天気（てんき）をネットで調（しら）べました。',
      meaningZh: '我在網路上查了旅行地的天氣。',
      clozeSentence:
        '旅行先（りょこうさき）の天気（てんき）をネットで＿＿＿＿。',
      answerKana: 'しらべました',
    },
    reviewC: {
      furigana:
        '店（みせ）へ行（い）く前（まえ）に営業時間（えいぎょうじかん）を調（しら）べました。',
      meaningZh: '去店裡前，我查了營業時間。',
    },
    explanationZh: '「調べる」表示透過資料確認資訊或內容。',
  },
  {
    id: 'word-tell',
    wordJa: '伝える',
    kana: 'つたえる',
    meaningZh: '傳達、告知',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N3',
    tags: ['溝通', '工作', '日常'],
    sortOrder: 40,
    phrases: [
      {
        furigana: '予定（よてい）を伝（つた）える',
        meaningZh: '告知預定',
        kanaOption: 'よていをつたえる',
      },
      {
        furigana: '気持（きも）ちを伝（つた）える',
        meaningZh: '傳達心情',
        kanaOption: 'きもちをつたえる',
      },
    ],
    learning: {
      furigana:
        '帰（かえ）る時間（じかん）を家族（かぞく）に伝（つた）えました。',
      meaningZh: '我把回家時間告訴家人。',
    },
    quiz: {
      furigana:
        '遅（おく）れることを先生（せんせい）に伝（つた）えます。',
      meaningZh: '我要告訴老師我會遲到。',
      clozeSentence:
        '遅（おく）れることを先生（せんせい）に＿＿＿＿。',
      answerKana: 'つたえます',
    },
    reviewA: {
      furigana:
        '会議（かいぎ）の変更（へんこう）を全員（ぜんいん）に伝（つた）えました。',
      meaningZh: '我把會議變更通知了所有人。',
      clozeSentence:
        '会議（かいぎ）の変更（へんこう）を全員（ぜんいん）に＿＿＿＿。',
      answerKana: 'つたえました',
    },
    reviewC: {
      furigana:
        '店員（てんいん）に食（た）べられない物（もの）を伝（つた）えました。',
      meaningZh: '我告訴店員不能吃的食物。',
    },
    explanationZh: '「伝える」表示把資訊或想法告訴別人。',
  },
  {
    id: 'word-take-along',
    wordJa: '連れて行く',
    kana: 'つれていく',
    meaningZh: '帶去',
    partOfSpeech: '複合動詞',
    jlptLevel: 'N4',
    tags: ['家人', '外出', '日常'],
    sortOrder: 41,
    phrases: [
      {
        furigana: '子（こ）どもを公園（こうえん）へ連（つ）れて行（い）く',
        meaningZh: '帶孩子去公園',
        kanaOption: 'こどもをこうえんへつれていく',
      },
      {
        furigana: '友達（ともだち）を店（みせ）へ連（つ）れて行（い）く',
        meaningZh: '帶朋友去店裡',
        kanaOption: 'ともだちをみせへつれていく',
      },
    ],
    learning: {
      furigana:
        '昨日（きのう）、友達（ともだち）を好（す）きな店（みせ）へ連（つ）れて行（い）きました。',
      meaningZh: '昨天我帶朋友去了喜歡的店。',
    },
    quiz: {
      furigana:
        '日曜日（にちようび）に子（こ）どもを動物園（どうぶつえん）へ連（つ）れて行（い）きます。',
      meaningZh: '星期日我要帶孩子去動物園。',
      clozeSentence:
        '日曜日（にちようび）に子（こ）どもを動物園（どうぶつえん）へ＿＿＿＿。',
      answerKana: 'つれていきます',
    },
    reviewA: {
      furigana:
        '両親（りょうしん）を駅前（えきまえ）のレストランへ連（つ）れて行（い）きました。',
      meaningZh: '我帶父母去了車站前的餐廳。',
      clozeSentence:
        '両親（りょうしん）を駅前（えきまえ）のレストランへ＿＿＿＿。',
      answerKana: 'つれていきました',
    },
    reviewC: {
      furigana:
        '今度（こんど）、妹（いもうと）を新（あたら）しいカフェへ連（つ）れて行（い）きます。',
      meaningZh: '下次我要帶妹妹去新咖啡店。',
    },
    explanationZh: '「連れて行く」表示帶著人或動物前往某處。',
  },
  {
    id: 'word-consult',
    wordJa: '相談する',
    kana: 'そうだんする',
    meaningZh: '商量、諮詢',
    partOfSpeech: '名詞・する動詞',
    jlptLevel: 'N3',
    tags: ['溝通', '工作', '家人'],
    sortOrder: 42,
    phrases: [
      {
        furigana: '家族（かぞく）に相談（そうだん）する',
        meaningZh: '和家人商量',
        kanaOption: 'かぞくにそうだんする',
      },
      {
        furigana: '先生（せんせい）に相談（そうだん）する',
        meaningZh: '向老師諮詢',
        kanaOption: 'せんせいにそうだんする',
      },
    ],
    learning: {
      furigana:
        '仕事（しごと）の悩（なや）みを先輩（せんぱい）に相談（そうだん）しました。',
      meaningZh: '我向前輩商量工作上的煩惱。',
    },
    quiz: {
      furigana:
        '旅行（りょこう）の予定（よてい）を家族（かぞく）に相談（そうだん）します。',
      meaningZh: '我要和家人商量旅行計畫。',
      clozeSentence:
        '旅行（りょこう）の予定（よてい）を家族（かぞく）に＿＿＿＿。',
      answerKana: 'そうだんします',
    },
    reviewA: {
      furigana:
        '分（わ）からないことを先生（せんせい）に相談（そうだん）しました。',
      meaningZh: '我把不懂的事情拿去請教老師。',
      clozeSentence:
        '分（わ）からないことを先生（せんせい）に＿＿＿＿。',
      answerKana: 'そうだんしました',
    },
    reviewC: {
      furigana:
        '新（あたら）しい部屋（へや）について友達（ともだち）に相談（そうだん）しました。',
      meaningZh: '我和朋友商量了新房間的事情。',
    },
    explanationZh: '「相談する」表示和別人討論問題並尋求意見。',
  },
  {
    id: 'word-participate',
    wordJa: '参加する',
    kana: 'さんかする',
    meaningZh: '參加',
    partOfSpeech: '名詞・する動詞',
    jlptLevel: 'N3',
    tags: ['活動', '工作', '社交'],
    sortOrder: 43,
    phrases: [
      {
        furigana: '会議（かいぎ）に参加（さんか）する',
        meaningZh: '參加會議',
        kanaOption: 'かいぎにさんかする',
      },
      {
        furigana: 'イベントに参加（さんか）する',
        meaningZh: '參加活動',
        kanaOption: 'イベントにさんかする',
      },
    ],
    learning: {
      furigana:
        '先週（せんしゅう）、会社（かいしゃ）の勉強会（べんきょうかい）に参加（さんか）しました。',
      meaningZh: '上週我參加了公司的讀書會。',
    },
    quiz: {
      furigana:
        '週末（しゅうまつ）の町（まち）のイベントに参加（さんか）します。',
      meaningZh: '我要參加週末的地方活動。',
      clozeSentence:
        '週末（しゅうまつ）の町（まち）のイベントに＿＿＿＿。',
      answerKana: 'さんかします',
    },
    reviewA: {
      furigana:
        '明日（あした）の会議（かいぎ）にはオンラインで参加（さんか）します。',
      meaningZh: '明天的會議我會線上參加。',
      clozeSentence:
        '明日（あした）の会議（かいぎ）にはオンラインで＿＿＿＿。',
      answerKana: 'さんかします',
    },
    reviewC: {
      furigana:
        '友達（ともだち）と一緒（いっしょ）に料理教室（りょうりきょうしつ）に参加（さんか）しました。',
      meaningZh: '我和朋友一起參加了料理課。',
    },
    explanationZh: '「参加する」表示加入會議、活動或團體行程。',
  },
  {
    id: 'word-refuse',
    wordJa: '断る',
    kana: 'ことわる',
    meaningZh: '拒絕、婉拒',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N3',
    tags: ['邀請', '工作', '溝通'],
    sortOrder: 44,
    phrases: [
      {
        furigana: '誘（さそ）いを断（ことわ）る',
        meaningZh: '拒絕邀請',
        kanaOption: 'さそいをことわる',
      },
      {
        furigana: '仕事（しごと）を断（ことわ）る',
        meaningZh: '拒絕工作',
        kanaOption: 'しごとをことわる',
      },
    ],
    learning: {
      furigana:
        '用事（ようじ）があったので、食事（しょくじ）の誘（さそ）いを断（ことわ）りました。',
      meaningZh: '因為有事，我婉拒了吃飯邀請。',
    },
    quiz: {
      furigana:
        '時間（じかん）がないので、今日（きょう）の仕事（しごと）を断（ことわ）ります。',
      meaningZh: '因為沒有時間，我會拒絕今天的工作。',
      clozeSentence:
        '時間（じかん）がないので、今日（きょう）の仕事（しごと）を＿＿＿＿。',
      answerKana: 'ことわります',
    },
    reviewA: {
      furigana:
        '体調（たいちょう）が悪（わる）くて、友達（ともだち）の誘（さそ）いを断（ことわ）りました。',
      meaningZh: '因為身體不舒服，我拒絕了朋友的邀請。',
      clozeSentence:
        '体調（たいちょう）が悪（わる）くて、友達（ともだち）の誘（さそ）いを＿＿＿＿。',
      answerKana: 'ことわりました',
    },
    reviewC: {
      furigana:
        '予定（よてい）があったので、週末（しゅうまつ）の旅行（りょこう）を断（ことわ）りました。',
      meaningZh: '因為已有安排，我婉拒了週末旅行。',
    },
    explanationZh: '「断る」表示拒絕邀請、要求或工作。',
  },
  {
    id: 'word-alter',
    wordJa: '変える',
    kana: 'かえる',
    meaningZh: '改變、更換',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['行程', '生活', '選擇'],
    sortOrder: 45,
    phrases: [
      {
        furigana: '予定（よてい）を変（か）える',
        meaningZh: '改變計畫',
        kanaOption: 'よていをかえる',
      },
      {
        furigana: '席（せき）を変（か）える',
        meaningZh: '換座位',
        kanaOption: 'せきをかえる',
      },
    ],
    learning: {
      furigana:
        '雨（あめ）なので、旅行（りょこう）の予定（よてい）を変（か）えました。',
      meaningZh: '因為下雨，我改了旅行計畫。',
    },
    quiz: {
      furigana:
        '部屋（へや）が暑（あつ）いので、席（せき）を変（か）えます。',
      meaningZh: '因為房間很熱，我要換座位。',
      clozeSentence:
        '部屋（へや）が暑（あつ）いので、席（せき）を＿＿＿＿。',
      answerKana: 'かえます',
    },
    reviewA: {
      furigana:
        '新（あたら）しい仕事（しごと）のために生活（せいかつ）の時間（じかん）を変（か）えました。',
      meaningZh: '為了新工作，我改變了生活作息。',
      clozeSentence:
        '新（あたら）しい仕事（しごと）のために生活（せいかつ）の時間（じかん）を＿＿＿＿。',
      answerKana: 'かえました',
    },
    reviewC: {
      furigana:
        '電車（でんしゃ）が止（と）まったので、行（い）き方（かた）を変（か）えました。',
      meaningZh: '因為電車停駛，我改了前往方式。',
    },
    explanationZh: '「変える」表示主動把內容、狀態或選擇改成別的。',
  },
  {
    id: 'word-increase',
    wordJa: '増える',
    kana: 'ふえる',
    meaningZh: '增加、變多',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N3',
    tags: ['數量', '工作', '生活'],
    sortOrder: 46,
    phrases: [
      {
        furigana: '人（ひと）が増（ふ）える',
        meaningZh: '人數增加',
        kanaOption: 'ひとがふえる',
      },
      {
        furigana: '荷物（にもつ）が増（ふ）える',
        meaningZh: '行李變多',
        kanaOption: 'にもつがふえる',
      },
    ],
    learning: {
      furigana:
        '春（はる）になると、この店（みせ）のお客（きゃく）さんが増（ふ）えます。',
      meaningZh: '到了春天，這家店的客人會增加。',
    },
    quiz: {
      furigana:
        '仕事（しごと）が忙（いそが）しくなって、会議（かいぎ）が増（ふ）えました。',
      meaningZh: '工作變忙後，會議增加了。',
      clozeSentence:
        '仕事（しごと）が忙（いそが）しくなって、会議（かいぎ）が＿＿＿＿。',
      answerKana: 'ふえました',
    },
    reviewA: {
      furigana:
        '旅行（りょこう）のお土産（みやげ）で荷物（にもつ）が増（ふ）えました。',
      meaningZh: '因為旅行伴手禮，行李變多了。',
      clozeSentence:
        '旅行（りょこう）のお土産（みやげ）で荷物（にもつ）が＿＿＿＿。',
      answerKana: 'ふえました',
    },
    reviewC: {
      furigana:
        '最近（さいきん）は自転車（じてんしゃ）で通勤（つうきん）する人（ひと）が増（ふ）えました。',
      meaningZh: '最近騎腳踏車通勤的人增加了。',
    },
    explanationZh: '「増える」表示數量自然變多。',
  },
  {
    id: 'word-decrease',
    wordJa: '減る',
    kana: 'へる',
    meaningZh: '減少、變少',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N3',
    tags: ['數量', '健康', '工作'],
    sortOrder: 47,
    phrases: [
      {
        furigana: '体重（たいじゅう）が減（へ）る',
        meaningZh: '體重減少',
        kanaOption: 'たいじゅうがへる',
      },
      {
        furigana: '仕事（しごと）が減（へ）る',
        meaningZh: '工作減少',
        kanaOption: 'しごとがへる',
      },
    ],
    learning: {
      furigana:
        '毎日（まいにち）歩（ある）いたら、少（すこ）し体重（たいじゅう）が減（へ）りました。',
      meaningZh: '每天走路後，體重稍微減少了。',
    },
    quiz: {
      furigana:
        '今月（こんげつ）は残業（ざんぎょう）が少（すこ）し減（へ）りました。',
      meaningZh: '這個月加班稍微減少了。',
      clozeSentence:
        '今月（こんげつ）は残業（ざんぎょう）が少（すこ）し＿＿＿＿。',
      answerKana: 'へりました',
    },
    reviewA: {
      furigana:
        '電車（でんしゃ）を使（つか）わなくなって、交通費（こうつうひ）が減（へ）りました。',
      meaningZh: '不再搭電車後，交通費減少了。',
      clozeSentence:
        '電車（でんしゃ）を使（つか）わなくなって、交通費（こうつうひ）が＿＿＿＿。',
      answerKana: 'へりました',
    },
    reviewC: {
      furigana:
        '雨（あめ）の日（ひ）は店（みせ）に来（く）る人（ひと）が減（へ）ります。',
      meaningZh: '下雨天來店裡的人會減少。',
    },
    explanationZh: '「減る」表示數量自然變少。',
  },
  {
    id: 'word-remain',
    wordJa: '残る',
    kana: 'のこる',
    meaningZh: '剩下、留下',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N3',
    tags: ['食物', '工作', '日常'],
    sortOrder: 48,
    phrases: [
      {
        furigana: '食（た）べ物（もの）が残（のこ）る',
        meaningZh: '食物剩下',
        kanaOption: 'たべものがのこる',
      },
      {
        furigana: '仕事（しごと）が残（のこ）る',
        meaningZh: '工作還沒做完',
        kanaOption: 'しごとがのこる',
      },
    ],
    learning: {
      furigana:
        '昨日（きのう）の料理（りょうり）が冷蔵庫（れいぞうこ）に残（のこ）っています。',
      meaningZh: '昨天的料理還留在冰箱裡。',
    },
    quiz: {
      furigana:
        '今日（きょう）は仕事（しごと）が少（すこ）し残（のこ）っています。',
      meaningZh: '今天還剩下一點工作。',
      clozeSentence:
        '今日（きょう）は仕事（しごと）が少（すこ）し＿＿＿＿います。',
      answerKana: 'のこって',
    },
    reviewA: {
      furigana:
        '冷蔵庫（れいぞうこ）にケーキが一（ひと）つ残（のこ）っています。',
      meaningZh: '冰箱裡還剩一塊蛋糕。',
      clozeSentence:
        '冷蔵庫（れいぞうこ）にケーキが一（ひと）つ＿＿＿＿います。',
      answerKana: 'のこって',
    },
    reviewC: {
      furigana:
        '会議（かいぎ）の後（あと）も大切（たいせつ）な質問（しつもん）が残（のこ）りました。',
      meaningZh: '會議後仍留下了重要問題。',
    },
    explanationZh: '「残る」表示某物或工作沒有完全消失或完成。',
  },
  {
    id: 'word-add',
    wordJa: '足す',
    kana: 'たす',
    meaningZh: '添加、補上',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['料理', '數量', '日常'],
    sortOrder: 49,
    phrases: [
      {
        furigana: '水（みず）を足（た）す',
        meaningZh: '加水',
        kanaOption: 'みずをたす',
      },
      {
        furigana: '砂糖（さとう）を足（た）す',
        meaningZh: '加糖',
        kanaOption: 'さとうをたす',
      },
    ],
    learning: {
      furigana:
        '味（あじ）が濃（こ）かったので、水（みず）を少（すこ）し足（た）しました。',
      meaningZh: '因為味道太重，我加了一點水。',
    },
    quiz: {
      furigana:
        'コーヒーが苦（にが）いので、砂糖（さとう）を足（た）します。',
      meaningZh: '咖啡很苦，所以我要加糖。',
      clozeSentence:
        'コーヒーが苦（にが）いので、砂糖（さとう）を＿＿＿＿。',
      answerKana: 'たします',
    },
    reviewA: {
      furigana:
        '人数（にんずう）が増（ふ）えたので、椅子（いす）を二（ふた）つ足（た）しました。',
      meaningZh: '因為人數增加，我多加了兩張椅子。',
      clozeSentence:
        '人数（にんずう）が増（ふ）えたので、椅子（いす）を二（ふた）つ＿＿＿＿。',
      answerKana: 'たしました',
    },
    reviewC: {
      furigana:
        'スープが少（すく）なかったので、お湯（ゆ）を足（た）しました。',
      meaningZh: '湯太少了，所以我加了熱水。',
    },
    explanationZh: '「足す」表示加入不足的數量或內容。',
  },
  {
    id: 'word-carry',
    wordJa: '運ぶ',
    kana: 'はこぶ',
    meaningZh: '搬運、運送',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['搬家', '工作', '物品'],
    sortOrder: 50,
    phrases: [
      {
        furigana: '荷物（にもつ）を運（はこ）ぶ',
        meaningZh: '搬運行李',
        kanaOption: 'にもつをはこぶ',
      },
      {
        furigana: '机（つくえ）を運（はこ）ぶ',
        meaningZh: '搬桌子',
        kanaOption: 'つくえをはこぶ',
      },
    ],
    learning: {
      furigana:
        '引（ひ）っ越（こ）しの荷物（にもつ）を友達（ともだち）と運（はこ）びました。',
      meaningZh: '我和朋友一起搬了搬家行李。',
    },
    quiz: {
      furigana:
        '重（おも）い箱（はこ）を二階（にかい）へ運（はこ）びます。',
      meaningZh: '我要把重箱子搬到二樓。',
      clozeSentence:
        '重（おも）い箱（はこ）を二階（にかい）へ＿＿＿＿。',
      answerKana: 'はこびます',
    },
    reviewA: {
      furigana:
        'みんなで新（あたら）しい机（つくえ）を部屋（へや）へ運（はこ）びました。',
      meaningZh: '大家一起把新桌子搬進房間。',
      clozeSentence:
        'みんなで新（あたら）しい机（つくえ）を部屋（へや）へ＿＿＿＿。',
      answerKana: 'はこびました',
    },
    reviewC: {
      furigana:
        '店員（てんいん）が買（か）った家具（かぐ）を車（くるま）まで運（はこ）んでくれました。',
      meaningZh: '店員幫我把買的家具搬到車旁。',
    },
    explanationZh: '「運ぶ」表示把物品從一處搬到另一處。',
  },
  {
    id: 'word-break',
    wordJa: '壊れる',
    kana: 'こわれる',
    meaningZh: '壞掉、故障',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['家電', '物品', '日常'],
    sortOrder: 51,
    phrases: [
      {
        furigana: '時計（とけい）が壊（こわ）れる',
        meaningZh: '時鐘壞掉',
        kanaOption: 'とけいがこわれる',
      },
      {
        furigana: 'パソコンが壊（こわ）れる',
        meaningZh: '電腦故障',
        kanaOption: 'パソコンがこわれる',
      },
    ],
    learning: {
      furigana:
        '長（なが）く使（つか）った時計（とけい）が壊（こわ）れました。',
      meaningZh: '用了很久的時鐘壞掉了。',
    },
    quiz: {
      furigana:
        '昨日（きのう）、急（きゅう）に洗濯機（せんたくき）が壊（こわ）れました。',
      meaningZh: '昨天洗衣機突然壞掉了。',
      clozeSentence:
        '昨日（きのう）、急（きゅう）に洗濯機（せんたくき）が＿＿＿＿。',
      answerKana: 'こわれました',
    },
    reviewA: {
      furigana:
        '旅行中（りょこうちゅう）にカメラが壊（こわ）れて困（こま）りました。',
      meaningZh: '旅行時相機壞掉，讓我很困擾。',
      clozeSentence:
        '旅行中（りょこうちゅう）にカメラが＿＿＿＿困（こま）りました。',
      answerKana: 'こわれて',
    },
    reviewC: {
      furigana:
        '古（ふる）いパソコンが壊（こわ）れたので、新（あたら）しい物（もの）を買（か）いました。',
      meaningZh: '舊電腦壞了，所以我買了新的。',
    },
    explanationZh: '「壊れる」表示物品自然故障或失去功能。',
  },
  {
    id: 'word-get-dirty',
    wordJa: '汚れる',
    kana: 'よごれる',
    meaningZh: '變髒',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['衣物', '天氣', '日常'],
    sortOrder: 52,
    phrases: [
      {
        furigana: '服（ふく）が汚（よご）れる',
        meaningZh: '衣服變髒',
        kanaOption: 'ふくがよごれる',
      },
      {
        furigana: '靴（くつ）が汚（よご）れる',
        meaningZh: '鞋子變髒',
        kanaOption: 'くつがよごれる',
      },
    ],
    learning: {
      furigana:
        '雨（あめ）の中（なか）を歩（ある）いて、靴（くつ）が汚（よご）れました。',
      meaningZh: '我在雨中走路，鞋子變髒了。',
    },
    quiz: {
      furigana:
        '料理（りょうり）をして、白（しろ）い服（ふく）が汚（よご）れました。',
      meaningZh: '做飯時白衣服弄髒了。',
      clozeSentence:
        '料理（りょうり）をして、白（しろ）い服（ふく）が＿＿＿＿。',
      answerKana: 'よごれました',
    },
    reviewA: {
      furigana:
        '公園（こうえん）で遊（あそ）んだ子（こ）どもの手（て）が汚（よご）れています。',
      meaningZh: '在公園玩過的孩子手很髒。',
      clozeSentence:
        '公園（こうえん）で遊（あそ）んだ子（こ）どもの手（て）が＿＿＿＿います。',
      answerKana: 'よごれて',
    },
    reviewC: {
      furigana:
        '道（みち）が濡（ぬ）れていて、新（あたら）しい靴（くつ）が汚（よご）れました。',
      meaningZh: '路面濕了，新鞋子變髒了。',
    },
    explanationZh: '「汚れる」表示物品自然變得不乾淨。',
  },
  {
    id: 'word-dry',
    wordJa: '乾く',
    kana: 'かわく',
    meaningZh: '乾、變乾',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['洗衣', '天氣', '日常'],
    sortOrder: 53,
    phrases: [
      {
        furigana: '洗濯物（せんたくもの）が乾（かわ）く',
        meaningZh: '衣物晾乾',
        kanaOption: 'せんたくものがかわく',
      },
      {
        furigana: '髪（かみ）が乾（かわ）く',
        meaningZh: '頭髮乾了',
        kanaOption: 'かみがかわく',
      },
    ],
    learning: {
      furigana:
        '天気（てんき）がよくて、洗濯物（せんたくもの）が早（はや）く乾（かわ）きました。',
      meaningZh: '天氣很好，衣服很快就乾了。',
    },
    quiz: {
      furigana:
        '風（かぜ）が強（つよ）いので、髪（かみ）がすぐ乾（かわ）きます。',
      meaningZh: '風很強，所以頭髮很快就乾。',
      clozeSentence:
        '風（かぜ）が強（つよ）いので、髪（かみ）がすぐ＿＿＿＿。',
      answerKana: 'かわきます',
    },
    reviewA: {
      furigana:
        '朝（あさ）までにシャツが全部（ぜんぶ）乾（かわ）きました。',
      meaningZh: '襯衫到早上全乾了。',
      clozeSentence:
        '朝（あさ）までにシャツが全部（ぜんぶ）＿＿＿＿。',
      answerKana: 'かわきました',
    },
    reviewC: {
      furigana:
        '雨（あめ）の日（ひ）は洗濯物（せんたくもの）がなかなか乾（かわ）きません。',
      meaningZh: '下雨天衣服很難乾。',
    },
    explanationZh: '「乾く」表示水分自然消失而變乾。',
  },
  {
    id: 'word-crowded',
    wordJa: '混む',
    kana: 'こむ',
    meaningZh: '擁擠',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['交通', '餐廳', '外出'],
    sortOrder: 54,
    phrases: [
      {
        furigana: '電車（でんしゃ）が混（こ）む',
        meaningZh: '電車擁擠',
        kanaOption: 'でんしゃがこむ',
      },
      {
        furigana: '道（みち）が混（こ）む',
        meaningZh: '道路塞車',
        kanaOption: 'みちがこむ',
      },
    ],
    learning: {
      furigana:
        '朝（あさ）の電車（でんしゃ）はいつもとても混（こ）んでいます。',
      meaningZh: '早上的電車總是非常擁擠。',
    },
    quiz: {
      furigana:
        '昼（ひる）は店（みせ）が混（こ）むので、早（はや）く行（い）きます。',
      meaningZh: '中午店裡會很擠，所以我要早點去。',
      clozeSentence:
        '昼（ひる）は店（みせ）が＿＿＿＿ので、早（はや）く行（い）きます。',
      answerKana: 'こむ',
    },
    reviewA: {
      furigana:
        '連休（れんきゅう）は道（みち）が混（こ）んで、車（くるま）が進（すす）みませんでした。',
      meaningZh: '連假道路很塞，車子無法前進。',
      clozeSentence:
        '連休（れんきゅう）は道（みち）が＿＿＿＿、車（くるま）が進（すす）みませんでした。',
      answerKana: 'こんで',
    },
    reviewC: {
      furigana:
        '人気（にんき）のレストランは週末（しゅうまつ）の夜（よる）に混（こ）みます。',
      meaningZh: '熱門餐廳週末晚上很擁擠。',
    },
    explanationZh: '「混む」表示場所中人或車很多。',
  },
  {
    id: 'word-get-lost',
    wordJa: '迷う',
    kana: 'まよう',
    meaningZh: '迷路、猶豫',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['交通', '選擇', '日常'],
    sortOrder: 55,
    phrases: [
      {
        furigana: '道（みち）に迷（まよ）う',
        meaningZh: '迷路',
        kanaOption: 'みちにまよう',
      },
      {
        furigana: '何（なに）を注文（ちゅうもん）するか迷（まよ）う',
        meaningZh: '猶豫要點什麼',
        kanaOption: 'なにをちゅうもんするかまよう',
      },
    ],
    learning: {
      furigana:
        '駅（えき）からホテルまでの道（みち）に迷（まよ）いました。',
      meaningZh: '我在從車站到飯店的路上迷路了。',
    },
    quiz: {
      furigana:
        'メニューが多（おお）くて、何（なに）を注文（ちゅうもん）するか迷（まよ）います。',
      meaningZh: '菜單很多，我不知道要點什麼。',
      clozeSentence:
        'メニューが多（おお）くて、何（なに）を注文（ちゅうもん）するか＿＿＿＿。',
      answerKana: 'まよいます',
    },
    reviewA: {
      furigana:
        '初（はじ）めての町（まち）で道（みち）に迷（まよ）いました。',
      meaningZh: '我在第一次去的城市迷路了。',
      clozeSentence:
        '初（はじ）めての町（まち）で道（みち）に＿＿＿＿。',
      answerKana: 'まよいました',
    },
    reviewC: {
      furigana:
        '二（ふた）つの服（ふく）が好（す）きで、どちらを買（か）うか迷（まよ）いました。',
      meaningZh: '兩件衣服都喜歡，我猶豫要買哪件。',
    },
    explanationZh: '「迷う」可表示迷路，也可表示無法立刻做決定。',
  },
  {
    id: 'word-get-used',
    wordJa: '慣れる',
    kana: 'なれる',
    meaningZh: '習慣、適應',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N3',
    tags: ['工作', '生活', '環境'],
    sortOrder: 56,
    phrases: [
      {
        furigana: '仕事（しごと）に慣（な）れる',
        meaningZh: '習慣工作',
        kanaOption: 'しごとになれる',
      },
      {
        furigana: '生活（せいかつ）に慣（な）れる',
        meaningZh: '適應生活',
        kanaOption: 'せいかつになれる',
      },
    ],
    learning: {
      furigana:
        '新（あたら）しい会社（かいしゃ）の仕事（しごと）に少（すこ）し慣（な）れました。',
      meaningZh: '我稍微習慣新公司的工作了。',
    },
    quiz: {
      furigana:
        '毎日（まいにち）乗（の）って、朝（あさ）の電車（でんしゃ）に慣（な）れました。',
      meaningZh: '每天搭乘後，我習慣早上的電車了。',
      clozeSentence:
        '毎日（まいにち）乗（の）って、朝（あさ）の電車（でんしゃ）に＿＿＿＿。',
      answerKana: 'なれました',
    },
    reviewA: {
      furigana:
        '引（ひ）っ越（こ）して一（いっ）か月（げつ）で町（まち）の生活（せいかつ）に慣（な）れました。',
      meaningZh: '搬家一個月後，我適應了城市生活。',
      clozeSentence:
        '引（ひ）っ越（こ）して一（いっ）か月（げつ）で町（まち）の生活（せいかつ）に＿＿＿＿。',
      answerKana: 'なれました',
    },
    reviewC: {
      furigana:
        '最初（さいしょ）は大変（たいへん）でしたが、新（あたら）しい仕事（しごと）に慣（な）れました。',
      meaningZh: '一開始很辛苦，但我已經適應新工作。',
    },
    explanationZh: '「慣れる」表示逐漸適應環境、工作或習慣。',
  },
  {
    id: 'word-laugh',
    wordJa: '笑う',
    kana: 'わらう',
    meaningZh: '笑',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['心情', '朋友', '日常'],
    sortOrder: 57,
    phrases: [
      {
        furigana: '大（おお）きな声（こえ）で笑（わら）う',
        meaningZh: '大聲笑',
        kanaOption: 'おおきなこえでわらう',
      },
      {
        furigana: '一緒（いっしょ）に笑（わら）う',
        meaningZh: '一起笑',
        kanaOption: 'いっしょにわらう',
      },
    ],
    learning: {
      furigana:
        '友達（ともだち）の話（はなし）を聞（き）いて、みんなで笑（わら）いました。',
      meaningZh: '聽了朋友的話，大家一起笑了。',
    },
    quiz: {
      furigana:
        '面白（おもしろ）い映画（えいが）を見（み）て、たくさん笑（わら）いました。',
      meaningZh: '看了有趣的電影，我笑了很多。',
      clozeSentence:
        '面白（おもしろ）い映画（えいが）を見（み）て、たくさん＿＿＿＿。',
      answerKana: 'わらいました',
    },
    reviewA: {
      furigana:
        '子（こ）どもが楽（たの）しそうに笑（わら）っています。',
      meaningZh: '孩子開心地笑著。',
      clozeSentence:
        '子（こ）どもが楽（たの）しそうに＿＿＿＿います。',
      answerKana: 'わらって',
    },
    reviewC: {
      furigana:
        '久（ひさ）しぶりに友達（ともだち）と会（あ）って、一緒（いっしょ）に笑（わら）いました。',
      meaningZh: '久違地和朋友見面，一起笑了。',
    },
    explanationZh: '「笑う」表示因為開心或有趣而露出笑容。',
  },
  {
    id: 'word-be-surprised',
    wordJa: '驚く',
    kana: 'おどろく',
    meaningZh: '驚訝、吃驚',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N3',
    tags: ['心情', '購物', '消息'],
    sortOrder: 58,
    phrases: [
      {
        furigana: '値段（ねだん）に驚（おどろ）く',
        meaningZh: '對價格感到驚訝',
        kanaOption: 'ねだんにおどろく',
      },
      {
        furigana: 'ニュースに驚（おどろ）く',
        meaningZh: '對新聞感到吃驚',
        kanaOption: 'ニュースにおどろく',
      },
    ],
    learning: {
      furigana:
        '店（みせ）の安（やす）い値段（ねだん）を見（み）て驚（おどろ）きました。',
      meaningZh: '看到店裡便宜的價格，我很驚訝。',
    },
    quiz: {
      furigana:
        '友達（ともだち）の急（きゅう）な結婚（けっこん）の話（はなし）に驚（おどろ）きました。',
      meaningZh: '朋友突然說要結婚，讓我很驚訝。',
      clozeSentence:
        '友達（ともだち）の急（きゅう）な結婚（けっこん）の話（はなし）に＿＿＿＿。',
      answerKana: 'おどろきました',
    },
    reviewA: {
      furigana:
        '駅（えき）に人（ひと）が多（おお）くて驚（おどろ）きました。',
      meaningZh: '車站人很多，讓我很驚訝。',
      clozeSentence:
        '駅（えき）に人（ひと）が多（おお）くて＿＿＿＿。',
      answerKana: 'おどろきました',
    },
    reviewC: {
      furigana:
        '久（ひさ）しぶりに会（あ）った弟（おとうと）が背（せ）が高（たか）くて驚（おどろ）きました。',
      meaningZh: '久違見到弟弟，他長高了讓我很驚訝。',
    },
    explanationZh: '「驚く」表示遇到意外情況時感到吃驚。',
  },
  {
    id: 'word-feel-relieved',
    wordJa: '安心する',
    kana: 'あんしんする',
    meaningZh: '放心、安心',
    partOfSpeech: '名詞・する動詞',
    jlptLevel: 'N3',
    tags: ['心情', '家人', '健康'],
    sortOrder: 59,
    phrases: [
      {
        furigana: '無事（ぶじ）で安心（あんしん）する',
        meaningZh: '平安而放心',
        kanaOption: 'ぶじであんしんする',
      },
      {
        furigana: '話（はなし）を聞（き）いて安心（あんしん）する',
        meaningZh: '聽到說明後放心',
        kanaOption: 'はなしをきいてあんしんする',
      },
    ],
    learning: {
      furigana:
        '家族（かぞく）の元気（げんき）な声（こえ）を聞（き）いて安心（あんしん）しました。',
      meaningZh: '聽到家人有精神的聲音，我放心了。',
    },
    quiz: {
      furigana:
        '荷物（にもつ）が無事（ぶじ）に届（とど）いて安心（あんしん）しました。',
      meaningZh: '包裹平安送達，我放心了。',
      clozeSentence:
        '荷物（にもつ）が無事（ぶじ）に届（とど）いて＿＿＿＿。',
      answerKana: 'あんしんしました',
    },
    reviewA: {
      furigana:
        '医者（いしゃ）の説明（せつめい）を聞（き）いて安心（あんしん）しました。',
      meaningZh: '聽了醫生的說明後，我放心了。',
      clozeSentence:
        '医者（いしゃ）の説明（せつめい）を聞（き）いて＿＿＿＿。',
      answerKana: 'あんしんしました',
    },
    reviewC: {
      furigana:
        '遅（おく）れていた友達（ともだち）から連絡（れんらく）が来（き）て安心（あんしん）しました。',
      meaningZh: '遲到的朋友聯絡我後，我放心了。',
    },
    explanationZh: '「安心する」表示擔心消失、心情安定下來。',
  },
  {
    id: 'word-worry',
    wordJa: '心配する',
    kana: 'しんぱいする',
    meaningZh: '擔心',
    partOfSpeech: '名詞・する動詞',
    jlptLevel: 'N4',
    tags: ['心情', '家人', '天氣'],
    sortOrder: 60,
    phrases: [
      {
        furigana: '天気（てんき）を心配（しんぱい）する',
        meaningZh: '擔心天氣',
        kanaOption: 'てんきをしんぱいする',
      },
      {
        furigana: '家族（かぞく）を心配（しんぱい）する',
        meaningZh: '擔心家人',
        kanaOption: 'かぞくをしんぱいする',
      },
    ],
    learning: {
      furigana:
        '母（はは）は私（わたし）の帰（かえ）りが遅（おそ）いと心配（しんぱい）します。',
      meaningZh: '我晚回家時，媽媽會擔心。',
    },
    quiz: {
      furigana:
        '明日（あした）の旅行（りょこう）の天気（てんき）を心配（しんぱい）しています。',
      meaningZh: '我很擔心明天旅行的天氣。',
      clozeSentence:
        '明日（あした）の旅行（りょこう）の天気（てんき）を＿＿＿＿います。',
      answerKana: 'しんぱいして',
    },
    reviewA: {
      furigana:
        '連絡（れんらく）がないので、家族（かぞく）が心配（しんぱい）しています。',
      meaningZh: '因為沒有聯絡，家人正在擔心。',
      clozeSentence:
        '連絡（れんらく）がないので、家族（かぞく）が＿＿＿＿います。',
      answerKana: 'しんぱいして',
    },
    reviewC: {
      furigana:
        '父（ちち）は一人（ひとり）で旅行（りょこう）する妹（いもうと）を心配（しんぱい）しています。',
      meaningZh: '爸爸擔心獨自旅行的妹妹。',
    },
    explanationZh: '「心配する」表示對人或事情感到不安。',
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

export const additionalWords2: Word[] = vocabularySeeds.map((seed) => ({
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

export const additionalPhrases2: Phrase[] = vocabularySeeds.flatMap((seed) =>
  seed.phrases.map((phrase, index) => ({
    id: `phrase-${seed.id.replace('word-', '')}-${index + 1}`,
    wordId: seed.id,
    phraseJa: stripFurigana(phrase.furigana),
    phraseFurigana: phrase.furigana,
    meaningZh: phrase.meaningZh,
    usageOrder: index + 1,
  })),
)

export const additionalSentences2: Sentence[] = vocabularySeeds.flatMap(
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
      grammarTags: ['日常表現', 'ます形'],
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
      grammarTags: ['日常表現', 'ます形'],
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
      grammarTags: ['文脈選択', '活用'],
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

export const additionalQuizQuestions2: QuizQuestion[] =
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
        questionText: '請選出正確的日文片語。',
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
        questionText: '請排列成完整句子。',
        correctAnswer: seed.reviewC.furigana,
        options: [],
        fragments: [],
        explanationZh: '依照時間、對象、助詞與動作排列成自然的日文句子。',
        difficultyLevel: seed.jlptLevel === 'N3' ? 2 : 1,
      },
    ]
  })
