import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "YouCARE｜歯科医院向け 予防歯科経営の導入支援",
  description:
    "お口から全身へ。歯科衛生士と管理栄養士の連携による口腔健康管理「YouCARE」を貴院に移植。継続管理率を高め、経営を安定させる予防歯科の仕組みを導入支援します。",
  keywords: [
    "YouCARE",
    "予防歯科 経営",
    "歯科 導入支援",
    "継続管理率",
    "口腔健康管理",
    "歯科衛生士",
    "管理栄養士",
  ],
  openGraph: {
    title: "YouCARE｜予防歯科経営の導入支援",
    description: "お口から全身へ。35年の予防歯科経営の仕組みを貴院に移植します。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Serif+JP:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bone text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
