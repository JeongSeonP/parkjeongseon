import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { getCurTheme } from "@/utils/getCurTheme";
import Header from "@/components/header";
import SettingView from "@/components/settingView";

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "박정선 | 프론트엔드",
  description: "박정선을 소개합니다.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const curTheme = await getCurTheme();
  return (
    <html lang="en" className={`${curTheme} !scroll-smooth`}>
      <body className={notoSansKR.className}>
        <Header />
        {children}
        <SettingView />
      </body>
    </html>
  );
}
