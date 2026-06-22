import type {
  Phrase,
  QuizQuestion,
  Sentence,
  SentenceType,
  Word,
} from './types'

interface PhraseSeed {
  ja: string
  furigana: string
  meaningZh: string
}

interface SentenceSeed {
  ja: string
  furigana: string
  meaningZh: string
  clozeSentence?: string
  fragments?: string[]
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
  sentences: Record<SentenceType, SentenceSeed>
  newOptions: [string, string, string, string]
  reviewBOptions: [string, string, string, string]
  reviewAOptions: [string, string, string, string]
  explanationZh: string
}

const vocabularySeeds: VocabularySeed[] = [
  {
    id: 'word-be-late',
    wordJa: '遅れる',
    kana: 'おくれる',
    meaningZh: '遲到、延誤',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['時間', '交通', '工作'],
    sortOrder: 11,
    phrases: [
      {
        ja: '約束に遅れる',
        furigana: '約束（やくそく）に遅（おく）れる',
        meaningZh: '約會遲到',
      },
      {
        ja: '電車が遅れる',
        furigana: '電車（でんしゃ）が遅（おく）れる',
        meaningZh: '電車誤點',
      },
    ],
    sentences: {
      learning: {
        ja: '朝の電車が十分遅れました。',
        furigana:
          '朝（あさ）の電車（でんしゃ）が十分（じゅっぷん）遅（おく）れました。',
        meaningZh: '早上的電車晚了十分鐘。',
      },
      quiz: {
        ja: '会議に五分遅れます。',
        furigana: '会議（かいぎ）に五分（ごふん）遅（おく）れます。',
        meaningZh: '我會晚五分鐘到會議。',
        clozeSentence:
          '会議（かいぎ）に五分（ごふん）＿＿＿＿。',
      },
      reviewA: {
        ja: 'バスが遅れたので、会社に遅れました。',
        furigana:
          'バスが遅（おく）れたので、会社（かいしゃ）に遅（おく）れました。',
        meaningZh: '因為公車誤點，所以我上班遲到了。',
        clozeSentence:
          'バスが遅（おく）れたので、会社（かいしゃ）に＿＿＿＿。',
      },
      reviewC: {
        ja: '寝坊して授業に遅れました。',
        furigana:
          '寝坊（ねぼう）して授業（じゅぎょう）に遅（おく）れました。',
        meaningZh: '我睡過頭，上課遲到了。',
        fragments: [
          '授業（じゅぎょう）に',
          '寝坊（ねぼう）して',
          '遅（おく）れました。',
        ],
      },
    },
    newOptions: ['おくれます', 'いそぎます', 'ならびます', 'かえります'],
    reviewBOptions: [
      'やくそくにおくれる',
      'やくそくをおくる',
      'やくそくをきめる',
      'やくそくをなおす',
    ],
    reviewAOptions: [
      'おくれました',
      'いそぎました',
      'ならびました',
      'あつまりました',
    ],
    explanationZh: '「遅れる」表示沒有在預定時間到達。',
  },
  {
    id: 'word-pick-up',
    wordJa: '迎える',
    kana: 'むかえる',
    meaningZh: '迎接、接人',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['交通', '家人', '日常'],
    sortOrder: 12,
    phrases: [
      {
        ja: '駅まで迎えに行く',
        furigana: '駅（えき）まで迎（むか）えに行（い）く',
        meaningZh: '到車站迎接',
      },
      {
        ja: '友達を迎える',
        furigana: '友達（ともだち）を迎（むか）える',
        meaningZh: '迎接朋友',
      },
    ],
    sentences: {
      learning: {
        ja: '父が駅まで迎えに来てくれました。',
        furigana:
          '父（ちち）が駅（えき）まで迎（むか）えに来（き）てくれました。',
        meaningZh: '爸爸來車站接我了。',
      },
      quiz: {
        ja: '空港で友達を迎えます。',
        furigana:
          '空港（くうこう）で友達（ともだち）を迎（むか）えます。',
        meaningZh: '我要在機場迎接朋友。',
        clozeSentence:
          '空港（くうこう）で友達（ともだち）を＿＿＿＿。',
      },
      reviewA: {
        ja: '母を駅まで迎えに行きました。',
        furigana:
          '母（はは）を駅（えき）まで迎（むか）えに行（い）きました。',
        meaningZh: '我去車站接媽媽了。',
        clozeSentence:
          '母（はは）を駅（えき）まで＿＿＿＿に行（い）きました。',
      },
      reviewC: {
        ja: '仕事の後で子どもを迎えに行きます。',
        furigana:
          '仕事（しごと）の後（あと）で子（こ）どもを迎（むか）えに行（い）きます。',
        meaningZh: '下班後我要去接孩子。',
        fragments: [
          '子（こ）どもを',
          '仕事（しごと）の後（あと）で',
          '迎（むか）えに行（い）きます。',
        ],
      },
    },
    newOptions: ['むかえます', 'おくります', 'さがします', 'かります'],
    reviewBOptions: [
      'えきまでむかえにいく',
      'えきまでおくる',
      'えきでならぶ',
      'えきでまつ',
    ],
    reviewAOptions: [
      'むかえ',
      'おくり',
      'さがし',
      'かえし',
    ],
    explanationZh: '「迎える」表示前往某處迎接人。',
  },
  {
    id: 'word-send',
    wordJa: '送る',
    kana: 'おくる',
    meaningZh: '寄送、送行',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['通訊', '交通', '日常'],
    sortOrder: 13,
    phrases: [
      {
        ja: '荷物を送る',
        furigana: '荷物（にもつ）を送（おく）る',
        meaningZh: '寄送包裹',
      },
      {
        ja: 'メールを送る',
        furigana: 'メールを送（おく）る',
        meaningZh: '寄電子郵件',
      },
    ],
    sentences: {
      learning: {
        ja: '家族に写真を送りました。',
        furigana:
          '家族（かぞく）に写真（しゃしん）を送（おく）りました。',
        meaningZh: '我把照片傳給家人了。',
      },
      quiz: {
        ja: '今日中にメールを送ります。',
        furigana:
          '今日中（きょうじゅう）にメールを送（おく）ります。',
        meaningZh: '我會在今天之內寄出郵件。',
        clozeSentence:
          '今日中（きょうじゅう）にメールを＿＿＿＿。',
      },
      reviewA: {
        ja: '友達に誕生日のカードを送りました。',
        furigana:
          '友達（ともだち）に誕生日（たんじょうび）のカードを送（おく）りました。',
        meaningZh: '我寄了生日卡給朋友。',
        clozeSentence:
          '友達（ともだち）に誕生日（たんじょうび）のカードを＿＿＿＿。',
      },
      reviewC: {
        ja: 'コンビニから荷物を送りました。',
        furigana:
          'コンビニから荷物（にもつ）を送（おく）りました。',
        meaningZh: '我從便利商店寄出了包裹。',
        fragments: [
          '荷物（にもつ）を',
          '送（おく）りました。',
          'コンビニから',
        ],
      },
    },
    newOptions: ['おくります', 'むかえます', 'かえします', 'あつめます'],
    reviewBOptions: [
      'にもつをおくる',
      'にもつをさがす',
      'にもつをかりる',
      'にもつをなおす',
    ],
    reviewAOptions: [
      'おくりました',
      'むかえました',
      'あつめました',
      'なくしました',
    ],
    explanationZh: '「送る」可表示寄送物品或傳送訊息。',
  },
  {
    id: 'word-search',
    wordJa: '探す',
    kana: 'さがす',
    meaningZh: '尋找',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['物品', '購物', '日常'],
    sortOrder: 14,
    phrases: [
      {
        ja: '鍵を探す',
        furigana: '鍵（かぎ）を探（さが）す',
        meaningZh: '找鑰匙',
      },
      {
        ja: '店を探す',
        furigana: '店（みせ）を探（さが）す',
        meaningZh: '找店家',
      },
    ],
    sentences: {
      learning: {
        ja: '朝から財布を探しています。',
        furigana:
          '朝（あさ）から財布（さいふ）を探（さが）しています。',
        meaningZh: '我從早上就在找錢包。',
      },
      quiz: {
        ja: '駅の近くでカフェを探します。',
        furigana:
          '駅（えき）の近（ちか）くでカフェを探（さが）します。',
        meaningZh: '我要在車站附近找咖啡店。',
        clozeSentence:
          '駅（えき）の近（ちか）くでカフェを＿＿＿＿。',
      },
      reviewA: {
        ja: 'なくした鍵を一時間探しました。',
        furigana:
          'なくした鍵（かぎ）を一時間（いちじかん）探（さが）しました。',
        meaningZh: '我找遺失的鑰匙找了一小時。',
        clozeSentence:
          'なくした鍵（かぎ）を一時間（いちじかん）＿＿＿＿。',
      },
      reviewC: {
        ja: 'ネットで安いホテルを探しました。',
        furigana:
          'ネットで安（やす）いホテルを探（さが）しました。',
        meaningZh: '我在網路上找了便宜的飯店。',
        fragments: [
          '安（やす）いホテルを',
          'ネットで',
          '探（さが）しました。',
        ],
      },
    },
    newOptions: ['さがします', 'なおします', 'くらべます', 'きめます'],
    reviewBOptions: [
      'かぎをさがす',
      'かぎをかりる',
      'かぎをかえす',
      'かぎをあつめる',
    ],
    reviewAOptions: [
      'さがしました',
      'なおしました',
      'くらべました',
      'きめました',
    ],
    explanationZh: '「探す」表示為了找到人或物而尋找。',
  },
  {
    id: 'word-fix',
    wordJa: '直す',
    kana: 'なおす',
    meaningZh: '修理、改正',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['物品', '工作', '日常'],
    sortOrder: 15,
    phrases: [
      {
        ja: '自転車を直す',
        furigana: '自転車（じてんしゃ）を直（なお）す',
        meaningZh: '修理腳踏車',
      },
      {
        ja: '間違いを直す',
        furigana: '間違（まちが）いを直（なお）す',
        meaningZh: '改正錯誤',
      },
    ],
    sentences: {
      learning: {
        ja: '壊れた時計を自分で直しました。',
        furigana:
          '壊（こわ）れた時計（とけい）を自分（じぶん）で直（なお）しました。',
        meaningZh: '我自己修好了壞掉的時鐘。',
      },
      quiz: {
        ja: 'この自転車を直します。',
        furigana:
          'この自転車（じてんしゃ）を直（なお）します。',
        meaningZh: '我要修理這台腳踏車。',
        clozeSentence:
          'この自転車（じてんしゃ）を＿＿＿＿。',
      },
      reviewA: {
        ja: '名前の間違いをすぐに直しました。',
        furigana:
          '名前（なまえ）の間違（まちが）いをすぐに直（なお）しました。',
        meaningZh: '我立刻改正了名字的錯誤。',
        clozeSentence:
          '名前（なまえ）の間違（まちが）いをすぐに＿＿＿＿。',
      },
      reviewC: {
        ja: '父が古い椅子を直してくれました。',
        furigana:
          '父（ちち）が古（ふる）い椅子（いす）を直（なお）してくれました。',
        meaningZh: '爸爸幫我修好了舊椅子。',
        fragments: [
          '古（ふる）い椅子（いす）を',
          '直（なお）してくれました。',
          '父（ちち）が',
        ],
      },
    },
    newOptions: ['なおします', 'さがします', 'おとします', 'しめます'],
    reviewBOptions: [
      'じてんしゃをなおす',
      'じてんしゃをさがす',
      'じてんしゃをかりる',
      'じてんしゃをくらべる',
    ],
    reviewAOptions: [
      'なおしました',
      'さがしました',
      'おとしました',
      'しめました',
    ],
    explanationZh: '「直す」可表示修好物品或改正錯誤。',
  },
  {
    id: 'word-hurry',
    wordJa: '急ぐ',
    kana: 'いそぐ',
    meaningZh: '趕快、著急',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['時間', '交通', '日常'],
    sortOrder: 16,
    phrases: [
      {
        ja: '駅へ急ぐ',
        furigana: '駅（えき）へ急（いそ）ぐ',
        meaningZh: '趕往車站',
      },
      {
        ja: '仕事を急ぐ',
        furigana: '仕事（しごと）を急（いそ）ぐ',
        meaningZh: '趕工作',
      },
    ],
    sentences: {
      learning: {
        ja: '時間がないので、駅へ急ぎました。',
        furigana:
          '時間（じかん）がないので、駅（えき）へ急（いそ）ぎました。',
        meaningZh: '因為沒時間了，所以我趕往車站。',
      },
      quiz: {
        ja: '電車に間に合うように急ぎます。',
        furigana:
          '電車（でんしゃ）に間（ま）に合（あ）うように急（いそ）ぎます。',
        meaningZh: '我會趕快走，以便趕上電車。',
        clozeSentence:
          '電車（でんしゃ）に間（ま）に合（あ）うように＿＿＿＿。',
      },
      reviewA: {
        ja: '雨が降りそうなので、家へ急ぎました。',
        furigana:
          '雨（あめ）が降（ふ）りそうなので、家（いえ）へ急（いそ）ぎました。',
        meaningZh: '因為看起來快下雨了，所以我趕回家。',
        clozeSentence:
          '雨（あめ）が降（ふ）りそうなので、家（いえ）へ＿＿＿＿。',
      },
      reviewC: {
        ja: '約束の時間まで急いで歩きました。',
        furigana:
          '約束（やくそく）の時間（じかん）まで急（いそ）いで歩（ある）きました。',
        meaningZh: '我趕著走，希望在約定時間前到。',
        fragments: [
          '急（いそ）いで',
          '約束（やくそく）の時間（じかん）まで',
          '歩（ある）きました。',
        ],
      },
    },
    newOptions: ['いそぎます', 'おくれます', 'ならびます', 'むかえます'],
    reviewBOptions: [
      'えきへいそぐ',
      'えきでならぶ',
      'えきまでむかえる',
      'えきにおくれる',
    ],
    reviewAOptions: [
      'いそぎました',
      'おくれました',
      'ならびました',
      'むかえました',
    ],
    explanationZh: '「急ぐ」表示加快動作，避免來不及。',
  },
  {
    id: 'word-line-up',
    wordJa: '並ぶ',
    kana: 'ならぶ',
    meaningZh: '排隊、排列',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['購物', '餐廳', '日常'],
    sortOrder: 17,
    phrases: [
      {
        ja: '列に並ぶ',
        furigana: '列（れつ）に並（なら）ぶ',
        meaningZh: '排隊',
      },
      {
        ja: '店の前に並ぶ',
        furigana: '店（みせ）の前（まえ）に並（なら）ぶ',
        meaningZh: '在店門口排隊',
      },
    ],
    sentences: {
      learning: {
        ja: '人気の店の前に人が並んでいます。',
        furigana:
          '人気（にんき）の店（みせ）の前（まえ）に人（ひと）が並（なら）んでいます。',
        meaningZh: '熱門店家前面有人在排隊。',
      },
      quiz: {
        ja: '切符を買うために列に並びます。',
        furigana:
          '切符（きっぷ）を買（か）うために列（れつ）に並（なら）びます。',
        meaningZh: '為了買票，我要排隊。',
        clozeSentence:
          '切符（きっぷ）を買（か）うために列（れつ）に＿＿＿＿。',
      },
      reviewA: {
        ja: 'レジの前に十分並びました。',
        furigana:
          'レジの前（まえ）に十分（じゅっぷん）並（なら）びました。',
        meaningZh: '我在收銀台前排了十分鐘。',
        clozeSentence:
          'レジの前（まえ）に十分（じゅっぷん）＿＿＿＿。',
      },
      reviewC: {
        ja: '開店前から店の前に並びました。',
        furigana:
          '開店前（かいてんまえ）から店（みせ）の前（まえ）に並（なら）びました。',
        meaningZh: '我從開店前就在店門口排隊。',
        fragments: [
          '店（みせ）の前（まえ）に',
          '開店前（かいてんまえ）から',
          '並（なら）びました。',
        ],
      },
    },
    newOptions: ['ならびます', 'いそぎます', 'はらいます', 'あきます'],
    reviewBOptions: [
      'れつにならぶ',
      'れつをあつめる',
      'れつをきめる',
      'れつにおくれる',
    ],
    reviewAOptions: [
      'ならびました',
      'いそぎました',
      'はらいました',
      'あきました',
    ],
    explanationZh: '「並ぶ」表示依順序排成一列。',
  },
  {
    id: 'word-pay',
    wordJa: '払う',
    kana: 'はらう',
    meaningZh: '付款、支付',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['購物', '金錢', '日常'],
    sortOrder: 18,
    phrases: [
      {
        ja: 'お金を払う',
        furigana: 'お金（かね）を払（はら）う',
        meaningZh: '付錢',
      },
      {
        ja: 'カードで払う',
        furigana: 'カードで払（はら）う',
        meaningZh: '用卡片付款',
      },
    ],
    sentences: {
      learning: {
        ja: '昼ご飯のお金をカードで払いました。',
        furigana:
          '昼（ひる）ご飯（はん）のお金（かね）をカードで払（はら）いました。',
        meaningZh: '午餐費我用卡片付了。',
      },
      quiz: {
        ja: 'コンビニで電気代を払います。',
        furigana:
          'コンビニで電気代（でんきだい）を払（はら）います。',
        meaningZh: '我要在便利商店繳電費。',
        clozeSentence:
          'コンビニで電気代（でんきだい）を＿＿＿＿。',
      },
      reviewA: {
        ja: '会計は私がまとめて払いました。',
        furigana:
          '会計（かいけい）は私（わたし）がまとめて払（はら）いました。',
        meaningZh: '帳單由我一起付了。',
        clozeSentence:
          '会計（かいけい）は私（わたし）がまとめて＿＿＿＿。',
      },
      reviewC: {
        ja: '駅で定期券のお金を払いました。',
        furigana:
          '駅（えき）で定期券（ていきけん）のお金（かね）を払（はら）いました。',
        meaningZh: '我在車站付了月票的錢。',
        fragments: [
          '定期券（ていきけん）のお金（かね）を',
          '払（はら）いました。',
          '駅（えき）で',
        ],
      },
    },
    newOptions: ['はらいます', 'かります', 'かえします', 'おくります'],
    reviewBOptions: [
      'おかねをはらう',
      'おかねをかりる',
      'おかねをあつめる',
      'おかねをさがす',
    ],
    reviewAOptions: [
      'はらいました',
      'かりました',
      'かえしました',
      'おくりました',
    ],
    explanationZh: '「払う」表示支付費用或款項。',
  },
  {
    id: 'word-compare',
    wordJa: '比べる',
    kana: 'くらべる',
    meaningZh: '比較',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['購物', '選擇', '日常'],
    sortOrder: 19,
    phrases: [
      {
        ja: '値段を比べる',
        furigana: '値段（ねだん）を比（くら）べる',
        meaningZh: '比較價格',
      },
      {
        ja: '二つを比べる',
        furigana: '二（ふた）つを比（くら）べる',
        meaningZh: '比較兩個',
      },
    ],
    sentences: {
      learning: {
        ja: '二つの店の値段を比べました。',
        furigana:
          '二（ふた）つの店（みせ）の値段（ねだん）を比（くら）べました。',
        meaningZh: '我比較了兩家店的價格。',
      },
      quiz: {
        ja: '買う前に商品の値段を比べます。',
        furigana:
          '買（か）う前（まえ）に商品（しょうひん）の値段（ねだん）を比（くら）べます。',
        meaningZh: '購買前，我會比較商品價格。',
        clozeSentence:
          '買（か）う前（まえ）に商品（しょうひん）の値段（ねだん）を＿＿＿＿。',
      },
      reviewA: {
        ja: '写真を見ながら二つの部屋を比べました。',
        furigana:
          '写真（しゃしん）を見（み）ながら二（ふた）つの部屋（へや）を比（くら）べました。',
        meaningZh: '我一邊看照片，一邊比較兩個房間。',
        clozeSentence:
          '写真（しゃしん）を見（み）ながら二（ふた）つの部屋（へや）を＿＿＿＿。',
      },
      reviewC: {
        ja: '店で大きさと値段を比べました。',
        furigana:
          '店（みせ）で大（おお）きさと値段（ねだん）を比（くら）べました。',
        meaningZh: '我在店裡比較了大小和價格。',
        fragments: [
          '大（おお）きさと値段（ねだん）を',
          '店（みせ）で',
          '比（くら）べました。',
        ],
      },
    },
    newOptions: ['くらべます', 'きめます', 'あつめます', 'さがします'],
    reviewBOptions: [
      'ねだんをくらべる',
      'ねだんをきめる',
      'ねだんをなおす',
      'ねだんをあつめる',
    ],
    reviewAOptions: [
      'くらべました',
      'きめました',
      'あつめました',
      'さがしました',
    ],
    explanationZh: '「比べる」表示比較兩個以上事物的差異。',
  },
  {
    id: 'word-decide',
    wordJa: '決める',
    kana: 'きめる',
    meaningZh: '決定',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['計畫', '選擇', '日常'],
    sortOrder: 20,
    phrases: [
      {
        ja: '時間を決める',
        furigana: '時間（じかん）を決（き）める',
        meaningZh: '決定時間',
      },
      {
        ja: '店を決める',
        furigana: '店（みせ）を決（き）める',
        meaningZh: '決定店家',
      },
    ],
    sentences: {
      learning: {
        ja: '旅行の日を家族と決めました。',
        furigana:
          '旅行（りょこう）の日（ひ）を家族（かぞく）と決（き）めました。',
        meaningZh: '我和家人決定了旅行日期。',
      },
      quiz: {
        ja: '今日中に会議の時間を決めます。',
        furigana:
          '今日中（きょうじゅう）に会議（かいぎ）の時間（じかん）を決（き）めます。',
        meaningZh: '今天之內要決定會議時間。',
        clozeSentence:
          '今日中（きょうじゅう）に会議（かいぎ）の時間（じかん）を＿＿＿＿。',
      },
      reviewA: {
        ja: 'みんなで昼ご飯の店を決めました。',
        furigana:
          'みんなで昼（ひる）ご飯（はん）の店（みせ）を決（き）めました。',
        meaningZh: '大家一起決定了午餐的店。',
        clozeSentence:
          'みんなで昼（ひる）ご飯（はん）の店（みせ）を＿＿＿＿。',
      },
      reviewC: {
        ja: '来月の旅行先を今日決めました。',
        furigana:
          '来月（らいげつ）の旅行先（りょこうさき）を今日（きょう）決（き）めました。',
        meaningZh: '我今天決定了下個月的旅行地點。',
        fragments: [
          '今日（きょう）',
          '来月（らいげつ）の旅行先（りょこうさき）を',
          '決（き）めました。',
        ],
      },
    },
    newOptions: ['きめます', 'くらべます', 'あつめます', 'なおします'],
    reviewBOptions: [
      'じかんをきめる',
      'じかんをくらべる',
      'じかんをなおす',
      'じかんをあつめる',
    ],
    reviewAOptions: [
      'きめました',
      'くらべました',
      'あつめました',
      'なおしました',
    ],
    explanationZh: '「決める」表示做出選擇或確定內容。',
  },
  {
    id: 'word-collect',
    wordJa: '集める',
    kana: 'あつめる',
    meaningZh: '收集、集合',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['興趣', '工作', '日常'],
    sortOrder: 21,
    phrases: [
      {
        ja: '切手を集める',
        furigana: '切手（きって）を集（あつ）める',
        meaningZh: '收集郵票',
      },
      {
        ja: '資料を集める',
        furigana: '資料（しりょう）を集（あつ）める',
        meaningZh: '蒐集資料',
      },
    ],
    sentences: {
      learning: {
        ja: '旅行の前に町の情報を集めました。',
        furigana:
          '旅行（りょこう）の前（まえ）に町（まち）の情報（じょうほう）を集（あつ）めました。',
        meaningZh: '旅行前我蒐集了城市資訊。',
      },
      quiz: {
        ja: '会議に必要な資料を集めます。',
        furigana:
          '会議（かいぎ）に必要（ひつよう）な資料（しりょう）を集（あつ）めます。',
        meaningZh: '我要蒐集會議需要的資料。',
        clozeSentence:
          '会議（かいぎ）に必要（ひつよう）な資料（しりょう）を＿＿＿＿。',
      },
      reviewA: {
        ja: '子どものころ、外国の切手を集めていました。',
        furigana:
          '子（こ）どものころ、外国（がいこく）の切手（きって）を集（あつ）めていました。',
        meaningZh: '小時候我曾收集外國郵票。',
        clozeSentence:
          '子（こ）どものころ、外国（がいこく）の切手（きって）を＿＿＿＿いました。',
      },
      reviewC: {
        ja: '発表のために写真を集めました。',
        furigana:
          '発表（はっぴょう）のために写真（しゃしん）を集（あつ）めました。',
        meaningZh: '我為了發表蒐集了照片。',
        fragments: [
          '写真（しゃしん）を',
          '発表（はっぴょう）のために',
          '集（あつ）めました。',
        ],
      },
    },
    newOptions: ['あつめます', 'きめます', 'さがします', 'おくります'],
    reviewBOptions: [
      'きってをあつめる',
      'きってをおくる',
      'きってをかえす',
      'きってをくらべる',
    ],
    reviewAOptions: [
      'あつめて',
      'きめて',
      'さがして',
      'おくって',
    ],
    explanationZh: '「集める」表示把多個物品或資訊收集起來。',
  },
  {
    id: 'word-use-service',
    wordJa: '利用する',
    kana: 'りようする',
    meaningZh: '利用、使用',
    partOfSpeech: '名詞・する動詞',
    jlptLevel: 'N3',
    tags: ['服務', '交通', '日常'],
    sortOrder: 22,
    phrases: [
      {
        ja: '電車を利用する',
        furigana: '電車（でんしゃ）を利用（りよう）する',
        meaningZh: '搭乘電車',
      },
      {
        ja: 'サービスを利用する',
        furigana: 'サービスを利用（りよう）する',
        meaningZh: '使用服務',
      },
    ],
    sentences: {
      learning: {
        ja: '通勤には地下鉄を利用しています。',
        furigana:
          '通勤（つうきん）には地下鉄（ちかてつ）を利用（りよう）しています。',
        meaningZh: '我通勤時搭地鐵。',
      },
      quiz: {
        ja: '駅からホテルまでバスを利用します。',
        furigana:
          '駅（えき）からホテルまでバスを利用（りよう）します。',
        meaningZh: '從車站到飯店，我會搭公車。',
        clozeSentence:
          '駅（えき）からホテルまでバスを＿＿＿＿。',
      },
      reviewA: {
        ja: 'このアプリを毎日の勉強に利用しています。',
        furigana:
          'このアプリを毎日（まいにち）の勉強（べんきょう）に利用（りよう）しています。',
        meaningZh: '我每天使用這個 App 學習。',
        clozeSentence:
          'このアプリを毎日（まいにち）の勉強（べんきょう）に＿＿＿＿います。',
      },
      reviewC: {
        ja: '旅行中は一日券を利用しました。',
        furigana:
          '旅行中（りょこうちゅう）は一日券（いちにちけん）を利用（りよう）しました。',
        meaningZh: '旅行期間我使用了一日券。',
        fragments: [
          '一日券（いちにちけん）を',
          '利用（りよう）しました。',
          '旅行中（りょこうちゅう）は',
        ],
      },
    },
    newOptions: ['りようします', 'もうしこみます', 'かります', 'はらいます'],
    reviewBOptions: [
      'でんしゃをりようする',
      'でんしゃをむかえる',
      'でんしゃをなおす',
      'でんしゃをあつめる',
    ],
    reviewAOptions: [
      'りようして',
      'もうしこんで',
      'かりて',
      'はらって',
    ],
    explanationZh: '「利用する」表示使用交通工具、設施或服務。',
  },
  {
    id: 'word-apply',
    wordJa: '申し込む',
    kana: 'もうしこむ',
    meaningZh: '報名、申請',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N3',
    tags: ['活動', '服務', '日常'],
    sortOrder: 23,
    phrases: [
      {
        ja: '講座に申し込む',
        furigana: '講座（こうざ）に申（もう）し込（こ）む',
        meaningZh: '報名課程',
      },
      {
        ja: 'ネットで申し込む',
        furigana: 'ネットで申（もう）し込（こ）む',
        meaningZh: '在網路上申請',
      },
    ],
    sentences: {
      learning: {
        ja: '来月の料理教室に申し込みました。',
        furigana:
          '来月（らいげつ）の料理教室（りょうりきょうしつ）に申（もう）し込（こ）みました。',
        meaningZh: '我報名了下個月的料理課。',
      },
      quiz: {
        ja: '今日、旅行のツアーに申し込みます。',
        furigana:
          '今日（きょう）、旅行（りょこう）のツアーに申（もう）し込（こ）みます。',
        meaningZh: '我今天要報名旅行團。',
        clozeSentence:
          '今日（きょう）、旅行（りょこう）のツアーに＿＿＿＿。',
      },
      reviewA: {
        ja: '会社の日本語講座に申し込みました。',
        furigana:
          '会社（かいしゃ）の日本語講座（にほんごこうざ）に申（もう）し込（こ）みました。',
        meaningZh: '我報名了公司的日文課程。',
        clozeSentence:
          '会社（かいしゃ）の日本語講座（にほんごこうざ）に＿＿＿＿。',
      },
      reviewC: {
        ja: '週末のイベントにネットで申し込みました。',
        furigana:
          '週末（しゅうまつ）のイベントにネットで申（もう）し込（こ）みました。',
        meaningZh: '我在網路上報名了週末活動。',
        fragments: [
          'ネットで',
          '週末（しゅうまつ）のイベントに',
          '申（もう）し込（こ）みました。',
        ],
      },
    },
    newOptions: ['もうしこみます', 'りようします', 'きめます', 'あつめます'],
    reviewBOptions: [
      'こうざにもうしこむ',
      'こうざをりようする',
      'こうざをきめる',
      'こうざをなおす',
    ],
    reviewAOptions: [
      'もうしこみました',
      'りようしました',
      'きめました',
      'あつめました',
    ],
    explanationZh: '「申し込む」表示向活動或服務提出申請。',
  },
  {
    id: 'word-borrow',
    wordJa: '借りる',
    kana: 'かりる',
    meaningZh: '借入',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['物品', '圖書館', '日常'],
    sortOrder: 24,
    phrases: [
      {
        ja: '本を借りる',
        furigana: '本（ほん）を借（か）りる',
        meaningZh: '借書',
      },
      {
        ja: '傘を借りる',
        furigana: '傘（かさ）を借（か）りる',
        meaningZh: '借傘',
      },
    ],
    sentences: {
      learning: {
        ja: '図書館で料理の本を借りました。',
        furigana:
          '図書館（としょかん）で料理（りょうり）の本（ほん）を借（か）りました。',
        meaningZh: '我在圖書館借了料理書。',
      },
      quiz: {
        ja: '雨なので、友達に傘を借ります。',
        furigana:
          '雨（あめ）なので、友達（ともだち）に傘（かさ）を借（か）ります。',
        meaningZh: '因為下雨，我要向朋友借傘。',
        clozeSentence:
          '雨（あめ）なので、友達（ともだち）に傘（かさ）を＿＿＿＿。',
      },
      reviewA: {
        ja: '旅行中、駅の近くで自転車を借りました。',
        furigana:
          '旅行中（りょこうちゅう）、駅（えき）の近（ちか）くで自転車（じてんしゃ）を借（か）りました。',
        meaningZh: '旅行時，我在車站附近租了腳踏車。',
        clozeSentence:
          '旅行中（りょこうちゅう）、駅（えき）の近（ちか）くで自転車（じてんしゃ）を＿＿＿＿。',
      },
      reviewC: {
        ja: '学校の図書館で辞書を借りました。',
        furigana:
          '学校（がっこう）の図書館（としょかん）で辞書（じしょ）を借（か）りました。',
        meaningZh: '我在學校圖書館借了字典。',
        fragments: [
          '辞書（じしょ）を',
          '学校（がっこう）の図書館（としょかん）で',
          '借（か）りました。',
        ],
      },
    },
    newOptions: ['かります', 'かえします', 'はらいます', 'なくします'],
    reviewBOptions: [
      'ほんをかりる',
      'ほんをかえす',
      'ほんをおくる',
      'ほんをあつめる',
    ],
    reviewAOptions: [
      'かりました',
      'かえしました',
      'はらいました',
      'なくしました',
    ],
    explanationZh: '「借りる」表示從別人或設施取得物品暫時使用。',
  },
  {
    id: 'word-return',
    wordJa: '返す',
    kana: 'かえす',
    meaningZh: '歸還',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['物品', '圖書館', '日常'],
    sortOrder: 25,
    phrases: [
      {
        ja: '本を返す',
        furigana: '本（ほん）を返（かえ）す',
        meaningZh: '還書',
      },
      {
        ja: 'お金を返す',
        furigana: 'お金（かね）を返（かえ）す',
        meaningZh: '還錢',
      },
    ],
    sentences: {
      learning: {
        ja: '借りた本を図書館に返しました。',
        furigana:
          '借（か）りた本（ほん）を図書館（としょかん）に返（かえ）しました。',
        meaningZh: '我把借的書還給圖書館了。',
      },
      quiz: {
        ja: '明日、友達にお金を返します。',
        furigana:
          '明日（あした）、友達（ともだち）にお金（かね）を返（かえ）します。',
        meaningZh: '明天我要還朋友錢。',
        clozeSentence:
          '明日（あした）、友達（ともだち）にお金（かね）を＿＿＿＿。',
      },
      reviewA: {
        ja: 'このDVDは日曜日までに返します。',
        furigana:
          'このDVDは日曜日（にちようび）までに返（かえ）します。',
        meaningZh: '這片 DVD 我會在星期日前歸還。',
        clozeSentence:
          'このDVDは日曜日（にちようび）までに＿＿＿＿。',
      },
      reviewC: {
        ja: '仕事の帰りに本を返しました。',
        furigana:
          '仕事（しごと）の帰（かえ）りに本（ほん）を返（かえ）しました。',
        meaningZh: '我下班回家途中還了書。',
        fragments: [
          '本（ほん）を',
          '返（かえ）しました。',
          '仕事（しごと）の帰（かえ）りに',
        ],
      },
    },
    newOptions: ['かえします', 'かります', 'おくります', 'はらいます'],
    reviewBOptions: [
      'ほんをかえす',
      'ほんをかりる',
      'ほんをさがす',
      'ほんをくらべる',
    ],
    reviewAOptions: [
      'かえします',
      'かります',
      'おくります',
      'はらいます',
    ],
    explanationZh: '「返す」表示把借來的東西交還。',
  },
  {
    id: 'word-open',
    wordJa: '開く',
    kana: 'あく',
    meaningZh: '打開、開始營業',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['店家', '時間', '日常'],
    sortOrder: 26,
    phrases: [
      {
        ja: '店が開く',
        furigana: '店（みせ）が開（あ）く',
        meaningZh: '店家開門',
      },
      {
        ja: 'ドアが開く',
        furigana: 'ドアが開（あ）く',
        meaningZh: '門打開',
      },
    ],
    sentences: {
      learning: {
        ja: 'この店は朝九時に開きます。',
        furigana:
          'この店（みせ）は朝（あさ）九時（くじ）に開（あ）きます。',
        meaningZh: '這家店早上九點開門。',
      },
      quiz: {
        ja: '図書館は十時に開きます。',
        furigana:
          '図書館（としょかん）は十時（じゅうじ）に開（あ）きます。',
        meaningZh: '圖書館十點開門。',
        clozeSentence:
          '図書館（としょかん）は十時（じゅうじ）に＿＿＿＿。',
      },
      reviewA: {
        ja: 'ボタンを押すと、ドアが開きます。',
        furigana:
          'ボタンを押（お）すと、ドアが開（あ）きます。',
        meaningZh: '按下按鈕，門就會打開。',
        clozeSentence:
          'ボタンを押（お）すと、ドアが＿＿＿＿。',
      },
      reviewC: {
        ja: '駅前の店は朝早く開きます。',
        furigana:
          '駅前（えきまえ）の店（みせ）は朝（あさ）早（はや）く開（あ）きます。',
        meaningZh: '車站前的店很早開門。',
        fragments: [
          '朝（あさ）早（はや）く',
          '駅前（えきまえ）の店（みせ）は',
          '開（あ）きます。',
        ],
      },
    },
    newOptions: ['あきます', 'しめます', 'ならびます', 'いそぎます'],
    reviewBOptions: [
      'みせがあく',
      'みせをしめる',
      'みせにならぶ',
      'みせをさがす',
    ],
    reviewAOptions: ['あきます', 'しめます', 'なおします', 'おとします'],
    explanationZh: '「開く（あく）」表示門或店家由關閉變成開啟。',
  },
  {
    id: 'word-close',
    wordJa: '閉める',
    kana: 'しめる',
    meaningZh: '關閉',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['住家', '店家', '日常'],
    sortOrder: 27,
    phrases: [
      {
        ja: 'ドアを閉める',
        furigana: 'ドアを閉（し）める',
        meaningZh: '關門',
      },
      {
        ja: '店を閉める',
        furigana: '店（みせ）を閉（し）める',
        meaningZh: '關店',
      },
    ],
    sentences: {
      learning: {
        ja: '寒いので、窓を閉めました。',
        furigana:
          '寒（さむ）いので、窓（まど）を閉（し）めました。',
        meaningZh: '因為很冷，所以我關了窗戶。',
      },
      quiz: {
        ja: '部屋を出る前にドアを閉めます。',
        furigana:
          '部屋（へや）を出（で）る前（まえ）にドアを閉（し）めます。',
        meaningZh: '離開房間前我要關門。',
        clozeSentence:
          '部屋（へや）を出（で）る前（まえ）にドアを＿＿＿＿。',
      },
      reviewA: {
        ja: '雨が入るので、窓を閉めてください。',
        furigana:
          '雨（あめ）が入（はい）るので、窓（まど）を閉（し）めてください。',
        meaningZh: '雨會飄進來，請關窗。',
        clozeSentence:
          '雨（あめ）が入（はい）るので、窓（まど）を＿＿＿＿ください。',
      },
      reviewC: {
        ja: '最後に出た人が店を閉めました。',
        furigana:
          '最後（さいご）に出（で）た人（ひと）が店（みせ）を閉（し）めました。',
        meaningZh: '最後離開的人關了店。',
        fragments: [
          '店（みせ）を',
          '最後（さいご）に出（で）た人（ひと）が',
          '閉（し）めました。',
        ],
      },
    },
    newOptions: ['しめます', 'あきます', 'なおします', 'おとします'],
    reviewBOptions: [
      'ドアをしめる',
      'ドアがあく',
      'ドアをなおす',
      'ドアをさがす',
    ],
    reviewAOptions: [
      'しめて',
      'あけて',
      'なおして',
      'さがして',
    ],
    explanationZh: '「閉める」表示主動把門、窗或店關閉。',
  },
  {
    id: 'word-drop',
    wordJa: '落とす',
    kana: 'おとす',
    meaningZh: '掉落、弄丟',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['物品', '交通', '日常'],
    sortOrder: 28,
    phrases: [
      {
        ja: '財布を落とす',
        furigana: '財布（さいふ）を落（お）とす',
        meaningZh: '掉錢包',
      },
      {
        ja: '鍵を落とす',
        furigana: '鍵（かぎ）を落（お）とす',
        meaningZh: '掉鑰匙',
      },
    ],
    sentences: {
      learning: {
        ja: '駅で定期券を落としました。',
        furigana:
          '駅（えき）で定期券（ていきけん）を落（お）としました。',
        meaningZh: '我在車站掉了月票。',
      },
      quiz: {
        ja: '道で鍵を落としました。',
        furigana:
          '道（みち）で鍵（かぎ）を落（お）としました。',
        meaningZh: '我在路上掉了鑰匙。',
        clozeSentence:
          '道（みち）で鍵（かぎ）を＿＿＿＿。',
      },
      reviewA: {
        ja: '電車の中でスマホを落としたかもしれません。',
        furigana:
          '電車（でんしゃ）の中（なか）でスマホを落（お）としたかもしれません。',
        meaningZh: '我可能把手機掉在電車裡了。',
        clozeSentence:
          '電車（でんしゃ）の中（なか）でスマホを＿＿＿＿かもしれません。',
      },
      reviewC: {
        ja: '店の前で財布を落としました。',
        furigana:
          '店（みせ）の前（まえ）で財布（さいふ）を落（お）としました。',
        meaningZh: '我在店門口掉了錢包。',
        fragments: [
          '財布（さいふ）を',
          '店（みせ）の前（まえ）で',
          '落（お）としました。',
        ],
      },
    },
    newOptions: ['おとしました', 'なくしました', 'かえしました', 'なおしました'],
    reviewBOptions: [
      'さいふをおとす',
      'さいふをさがす',
      'さいふをかえす',
      'さいふをなおす',
    ],
    reviewAOptions: [
      'おとした',
      'なくした',
      'かえした',
      'なおした',
    ],
    explanationZh: '「落とす」表示物品從身上或手中掉落。',
  },
  {
    id: 'word-lose',
    wordJa: 'なくす',
    kana: 'なくす',
    meaningZh: '遺失',
    partOfSpeech: '五段動詞',
    jlptLevel: 'N4',
    tags: ['物品', '日常', '外出'],
    sortOrder: 29,
    phrases: [
      {
        ja: '財布をなくす',
        furigana: '財布（さいふ）をなくす',
        meaningZh: '弄丟錢包',
      },
      {
        ja: '切符をなくす',
        furigana: '切符（きっぷ）をなくす',
        meaningZh: '弄丟車票',
      },
    ],
    sentences: {
      learning: {
        ja: '旅行中にホテルの鍵をなくしました。',
        furigana:
          '旅行中（りょこうちゅう）にホテルの鍵（かぎ）をなくしました。',
        meaningZh: '旅行時我弄丟了飯店鑰匙。',
      },
      quiz: {
        ja: '大切な書類をなくしました。',
        furigana:
          '大切（たいせつ）な書類（しょるい）をなくしました。',
        meaningZh: '我弄丟了重要文件。',
        clozeSentence:
          '大切（たいせつ）な書類（しょるい）を＿＿＿＿。',
      },
      reviewA: {
        ja: '電車の切符をなくして困りました。',
        furigana:
          '電車（でんしゃ）の切符（きっぷ）をなくして困（こま）りました。',
        meaningZh: '我弄丟了車票，很困擾。',
        clozeSentence:
          '電車（でんしゃ）の切符（きっぷ）を＿＿＿＿困（こま）りました。',
      },
      reviewC: {
        ja: '引っ越しの時に古い写真をなくしました。',
        furigana:
          '引（ひ）っ越（こ）しの時（とき）に古（ふる）い写真（しゃしん）をなくしました。',
        meaningZh: '搬家時我弄丟了舊照片。',
        fragments: [
          '古（ふる）い写真（しゃしん）を',
          'なくしました。',
          '引（ひ）っ越（こ）しの時（とき）に',
        ],
      },
    },
    newOptions: ['なくしました', 'おとしました', 'かりました', 'あつめました'],
    reviewBOptions: [
      'さいふをなくす',
      'さいふをおとす',
      'さいふをかえす',
      'さいふをあつめる',
    ],
    reviewAOptions: [
      'なくして',
      'おとして',
      'かりて',
      'あつめて',
    ],
    explanationZh: '「なくす」表示找不到原本持有的東西。',
  },
  {
    id: 'word-be-enough',
    wordJa: '足りる',
    kana: 'たりる',
    meaningZh: '足夠',
    partOfSpeech: '一段動詞',
    jlptLevel: 'N4',
    tags: ['數量', '金錢', '日常'],
    sortOrder: 30,
    phrases: [
      {
        ja: 'お金が足りる',
        furigana: 'お金（かね）が足（た）りる',
        meaningZh: '錢足夠',
      },
      {
        ja: '時間が足りる',
        furigana: '時間（じかん）が足（た）りる',
        meaningZh: '時間足夠',
      },
    ],
    sentences: {
      learning: {
        ja: 'この料理なら三人分で足ります。',
        furigana:
          'この料理（りょうり）なら三人分（さんにんぶん）で足（た）ります。',
        meaningZh: '這道菜三人份就夠了。',
      },
      quiz: {
        ja: '千円あれば、昼ご飯には足ります。',
        furigana:
          '千円（せんえん）あれば、昼（ひる）ご飯（はん）には足（た）ります。',
        meaningZh: '有一千日圓的話，午餐就夠了。',
        clozeSentence:
          '千円（せんえん）あれば、昼（ひる）ご飯（はん）には＿＿＿＿。',
      },
      reviewA: {
        ja: '会議の時間は一時間で足ります。',
        furigana:
          '会議（かいぎ）の時間（じかん）は一時間（いちじかん）で足（た）ります。',
        meaningZh: '會議時間一小時就夠了。',
        clozeSentence:
          '会議（かいぎ）の時間（じかん）は一時間（いちじかん）で＿＿＿＿。',
      },
      reviewC: {
        ja: 'この部屋には椅子が四つあれば足ります。',
        furigana:
          'この部屋（へや）には椅子（いす）が四（よっ）つあれば足（た）ります。',
        meaningZh: '這個房間有四張椅子就夠了。',
        fragments: [
          '椅子（いす）が四（よっ）つあれば',
          'この部屋（へや）には',
          '足（た）ります。',
        ],
      },
    },
    newOptions: ['たります', 'はらいます', 'くらべます', 'きめます'],
    reviewBOptions: [
      'おかねがたりる',
      'おかねをはらう',
      'おかねをかりる',
      'おかねをかえす',
    ],
    reviewAOptions: [
      'たります',
      'はらいます',
      'くらべます',
      'きめます',
    ],
    explanationZh: '「足りる」表示數量或程度已經足夠。',
  },
]

export const additionalWords: Word[] = vocabularySeeds.map((seed) => ({
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

export const additionalPhrases: Phrase[] = vocabularySeeds.flatMap((seed) =>
  seed.phrases.map((phrase, index) => ({
    id: `phrase-${seed.id.replace('word-', '')}-${index + 1}`,
    wordId: seed.id,
    phraseJa: phrase.ja,
    phraseFurigana: phrase.furigana,
    meaningZh: phrase.meaningZh,
    usageOrder: index + 1,
  })),
)

export const additionalSentences: Sentence[] = vocabularySeeds.flatMap(
  (seed) =>
    (Object.entries(seed.sentences) as [SentenceType, SentenceSeed][]).map(
      ([sentenceType, sentence]) => ({
        id: `sentence-${seed.id.replace('word-', '')}-${sentenceType}`,
        wordId: seed.id,
        sentenceType,
        sentenceJa: sentence.ja,
        sentenceFurigana: sentence.furigana,
        meaningZh: sentence.meaningZh,
        clozeSentence: sentence.clozeSentence ?? null,
        difficultyLevel: seed.jlptLevel === 'N3' ? 2 : 1,
        grammarTags:
          sentenceType === 'reviewC'
            ? ['語順', '過去式・ます形']
            : ['日常表現', 'ます形'],
        isDailyLife: true,
      }),
    ),
)

export const additionalQuizQuestions: QuizQuestion[] =
  vocabularySeeds.flatMap((seed) => {
    const idBase = seed.id.replace('word-', '')
    const quizSentence = seed.sentences.quiz
    const reviewASentence = seed.sentences.reviewA
    const reviewCSentence = seed.sentences.reviewC

    return [
      {
        id: `question-${idBase}-new`,
        wordId: seed.id,
        sentenceId: `sentence-${idBase}-quiz`,
        questionType: 'newQuiz',
        promptZh: quizSentence.meaningZh,
        questionText: quizSentence.clozeSentence ?? quizSentence.furigana,
        correctAnswer: seed.newOptions[0],
        options: seed.newOptions,
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
        correctAnswer: seed.reviewBOptions[0],
        options: seed.reviewBOptions,
        fragments: [],
        explanationZh: seed.explanationZh,
        difficultyLevel: seed.jlptLevel === 'N3' ? 2 : 1,
      },
      {
        id: `question-${idBase}-a`,
        wordId: seed.id,
        sentenceId: `sentence-${idBase}-reviewA`,
        questionType: 'reviewA',
        promptZh: reviewASentence.meaningZh,
        questionText:
          reviewASentence.clozeSentence ?? reviewASentence.furigana,
        correctAnswer: seed.reviewAOptions[0],
        options: seed.reviewAOptions,
        fragments: [],
        explanationZh: seed.explanationZh,
        difficultyLevel: seed.jlptLevel === 'N3' ? 2 : 1,
      },
      {
        id: `question-${idBase}-c`,
        wordId: seed.id,
        sentenceId: `sentence-${idBase}-reviewC`,
        questionType: 'reviewC',
        promptZh: reviewCSentence.meaningZh,
        questionText: '請排列成完整句子。',
        correctAnswer: reviewCSentence.furigana,
        options: [],
        fragments: reviewCSentence.fragments ?? [],
        explanationZh: '依照時間、對象與動作排列成自然的日文句子。',
        difficultyLevel: seed.jlptLevel === 'N3' ? 2 : 1,
      },
    ]
  })
