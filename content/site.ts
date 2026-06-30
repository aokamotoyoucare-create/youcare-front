// =============================================================
//  YouCARE フロント — 編集はこのファイルだけでOK
//  ※ 数字・価格はすべて「差し替え前提」のプレースホルダです。
//     K歯科（総本山）の実数に置き換えてください。
// =============================================================

export const brand = {
  name: "YouCARE",
  tagline: "お口から、全身へ。",
  operator: "株式会社YouCARE",
  trademark: "「You CARE」登録商標 第5792880号",
  // 介護用具の「株式会社優ケア（youcare.co.jp）」とは別事業である旨を明示
  disambiguation:
    "本サイトは歯科・予防医療領域のYouCAREです。介護福祉用具の同名企業とは関係ありません。",
};

export const hero = {
  // ★要差し替え：K歯科の継続管理率の実数
  statValue: "96.5",
  statUnit: "%",
  statLabel: "継続管理率（実証院・直近）",
  statNote: "※ 実証院「K歯科」の実績値に差し替えてください",
  headline: "通い続ける患者が、\n医院の経営を安定させる。",
  sub: "歯科衛生士と管理栄養士のコラボレーションによる口腔健康管理。35年の予防歯科経営でつくった仕組み「YouCARE」を、貴院にそのまま移植します。",
  ctaPrimary: "無料説明会に申し込む",
  ctaSecondary: "まず無料診断を見る",
};

export const pains = {
  lead: "こんな課題、ありませんか",
  items: [
    "定期来院のリピート率が伸びず、予約表が埋まらない",
    "歯科衛生士が定着せず、育成と評価の軸がない",
    "予防に力を入れているのに、経営の数字が安定しない",
    "事業承継を見据え、属人経営を仕組みに変えたい",
  ],
  answer: {
    title: "答えは「継続管理」の仕組み化",
    body: "YouCAREは、口腔健康管理センターを核に、DH主導の継続管理・リケアサイクル・評価制度・KPIまでを一つのOSとして移植します。患者が自律して通い続け、スタッフが辞めにくい医院へ。",
  },
};

export const tiers = {
  lead: "3つの関与レベルから選べます",
  note: "価格はすべて税別の設計値です。まずは「無料診断」から。",
  items: [
    {
      tag: "TIER 1",
      name: "コンサル",
      price: "120万円",
      unit: "一時／2〜3ヶ月",
      summary: "設計図を渡す",
      points: ["現状診断", "ヘルスポリシー設計", "KPI・評価制度設計", "12ヶ月ロードマップ"],
      featured: false,
    },
    {
      tag: "TIER 2",
      name: "コンサル＋導入",
      price: "420万円〜",
      unit: "一時＋月6万円／約6ヶ月",
      summary: "稼働状態で組み立てて渡す",
      points: ["SaaS・KPI基盤の構築", "研修（動画＋ライブ）", "評価制度の運用開始", "稼働後90日支援"],
      featured: true,
    },
    {
      tag: "TIER 3",
      name: "コンサル＋導入＋並走",
      price: "月35万円〜",
      unit: "初年420万円＋月額／12〜24ヶ月",
      summary: "数字が改善するまで一緒に回す",
      points: ["月次KPIレビュー", "院長メンタリング", "継続管理率の改善コミット", "認定院ネットワーク参加"],
      featured: false,
    },
  ],
  entry: {
    title: "無料診断",
    body: "貴院の継続管理率・予約構造を可視化し、YouCARE導入の伸びしろをお見せします。上位契約に進む場合は診断費を充当します。",
    cta: "無料診断を申し込む",
  },
};

export const proof = {
  lead: "実証院でのリアルタイム成功事例",
  clinicName: "K歯科（実証モデル院）",
  // ★要差し替え：実証院のBefore/After実数
  metrics: [
    { label: "継続管理率", before: "—", after: "96.5%" },
    { label: "定期来院者数", before: "—", after: "—" },
    { label: "DH定着率", before: "—", after: "—" },
  ],
  body: "YouCAREの全プログラムを実装する実証拠点。ここで出続ける数字が、すべての導入院の道しるべになります。研修はこの現場を見学する形で行います。",
  noteForOwner: "※ Before/Afterの実数を入れると説得力が一段上がります。",
};

export const network = {
  lead: "YouCARE認定院ネットワーク",
  body: "導入院は共通プラットフォーム上でつながり、ベンチマーク・事例・新しい知見を共有します。一院では得られない学びが、グループだから手に入ります。",
  stats: [
    { value: "—", label: "認定院数" },
    { value: "35年", label: "予防歯科経営の蓄積" },
    { value: "DH×管理栄養士", label: "多職種連携モデル" },
  ],
};

export const trust = {
  lead: "選ばれる理由",
  items: [
    { title: "35年の実績", body: "医療法人社団三優会が35年運営してきた予防歯科経営が土台。" },
    { title: "歯学博士が監修", body: "日本森林医学会会員。学術と現場の両輪で設計。" },
    { title: "登録商標で守られたモデル", body: "「You CARE」は登録商標。再現性のある体系です。" },
    { title: "DH×管理栄養士の連携", body: "口腔から食・栄養・全身へ。他にない多職種モデル。" },
  ],
};

export const cta = {
  title: "まずは、貴院の伸びしろを見てみませんか",
  body: "無料説明会と無料診断を受け付けています。下記フォームからお気軽にどうぞ。",
  email: "info@youcare.jp",
};

export const contactForm = {
  heading: "無料説明会・診断のお申し込み",
  intro: "担当より折り返しご連絡します。",
  topicLabel: "ご希望",
  topics: ["無料説明会", "無料診断", "資料がほしい", "その他"],
  labels: {
    clinic: "医院名",
    name: "お名前",
    email: "メールアドレス",
    phone: "電話番号（任意）",
    message: "ご相談内容（任意）",
  },
  submit: "送信する",
  sending: "送信中…",
  success: "送信しました。担当より折り返しご連絡します。",
  error: "送信に失敗しました。時間をおいて再度お試しください。",
  required: "医院名・お名前・メールアドレスは必須です。",
};

export const nav = [
  { label: "課題", href: "#pains" },
  { label: "プラン", href: "#tiers" },
  { label: "実証", href: "#proof" },
  { label: "認定院", href: "#network" },
  { label: "申し込む", href: "#cta" },
];
