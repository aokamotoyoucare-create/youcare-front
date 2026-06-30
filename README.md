# YouCARE フロント（試作 v0.2）

歯科医院（院長）向けの導入支援フロント。Next.js 14（App Router）+ Tailwind CSS。
申込フォーム（メール送信）対応。

## 編集する場所
- **文言・数字・価格はすべて `content/site.ts` の1ファイル**で差し替えられます。
- ★印のコメント箇所（継続管理率・Before/After・認定院数）は、確定院（例：K歯科）の**実数に必ず差し替え**てください。現状はプレースホルダです。
- 院名は `content/site.ts` の `clinicName` 一箇所。
- 色は `tailwind.config.ts` の `ever / ever2 / gold` ほか8トークンで調整。

## 申込フォームを動かす（メール送信）
フォームは `/api/contact` で受け、Resend でメール送信します。**環境変数が未設定でもサイトは動作**し、送信内容はサーバーログに記録されます（メールは送られません）。

本番でメールを届かせる手順：
1. https://resend.com で無料登録し、API キーを取得。
2. Vercel の Project → Settings → Environment Variables に以下を追加：
   - `RESEND_API_KEY`（取得したキー）
   - `CONTACT_TO`（申込を受け取るメール、例 info@youcare.jp）
   - `CONTACT_FROM`（任意。独自ドメイン検証後に youcare.jp で送ると到達率向上）
3. 再デプロイ。`.env.example` を参照。

別サービス（Formspree 等）を使う場合は `app/api/contact/route.ts` の送信部分を差し替えてください。

## ローカルで動かす
```
npm install
npm run dev      # http://localhost:3000
```

## Vercel へデプロイ
1. このフォルダを Git に push（または Vercel に直接アップロード）。
2. Vercel で New Project → 選択 → Deploy（Next.js は自動検出）。
3. 上記の環境変数を設定して再デプロイ。
4. 独自ドメイン youcare.jp を Vercel の Domains に追加し DNS を向ける。

## 今後の候補
- 認定院ロゴ・事例の差し込み枠
- SaaS / 認定院プラットフォームへの導線リンク
- 送信時の自動返信メール、reCAPTCHA 等のスパム対策強化
