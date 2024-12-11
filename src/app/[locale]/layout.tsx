import MetaData from "../metaData";
import { cn } from "@/utils/cn.util";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Vazirmatn } from "next/font/google";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import "@/styles/globals.css";
import "swiper/css";

const vazir = Vazirmatn({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const NeueMotreal = localFont({
  src: [
    {
      path: "./../../../public/fonts/NeueMontreal/Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/NeueMontreal/Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/NeueMontreal/Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  const dir = locale === "fa" ? "rtl" : "ltr";
  
  return (
    <html lang={locale} dir={dir}>
      <head>
        <MetaData language={locale} page="home" />
      </head>
      <body
        className={cn(
          `bg-background-primary tracking-wide ${dir} ${locale !== "fa" ? NeueMotreal.className : vazir.className} ${locale === "fa" && "fa"} `,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
