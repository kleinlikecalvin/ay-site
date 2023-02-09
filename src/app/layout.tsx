import "./globals.css";
import { Bitter } from "@next/font/google";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={bitter.className}>{children}</body>
    </html>
  );
}
