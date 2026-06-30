import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // ハニーポット（ボット対策）：人間は触れない隠しフィールド
    if (data.company) return NextResponse.json({ ok: true });

    const clinic = String(data.clinic || "").trim();
    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const topic = String(data.topic || "").trim();
    const message = String(data.message || "").trim();

    if (!clinic || !name || !email) {
      return NextResponse.json(
        { ok: false, error: "必須項目が未入力です。" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM || "YouCARE <onboarding@resend.dev>";

    const subject = `【YouCARE】お問い合わせ：${clinic} / ${name} 様（${topic || "—"}）`;
    const text =
      `医院名: ${clinic}\n` +
      `お名前: ${name}\n` +
      `メール: ${email}\n` +
      `電話: ${phone || "—"}\n` +
      `ご希望: ${topic || "—"}\n` +
      `------------------------------\n` +
      `${message || "（メッセージなし）"}\n`;

    // 環境変数が未設定の場合は、サーバーログに残して成功扱い（ローカル確認用）
    if (!apiKey || !to) {
      console.log("[contact] メール未設定のため記録のみ:", {
        clinic,
        name,
        email,
        phone,
        topic,
        message,
      });
      return NextResponse.json({ ok: true, dev: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, reply_to: email, subject, text }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend error", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "送信に失敗しました。" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] error", e);
    return NextResponse.json(
      { ok: false, error: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}
