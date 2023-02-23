import { Bitter } from "@next/font/google";
import "./Layout.scss";
import "@/app/globals.scss";
import Head from "@/app/head";
import GlobalDonate from "@/components/GlobalDonate";
import Nav from "@/components/Nav";

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
      <Head />
      <body className={bitter.className}>
        <div className="Layout">
          <header>
            <GlobalDonate />
            <Nav />
          </header>
          <main>{children}</main>
          <footer>
            <a href="https://www.pencilboxstudios.com/">
              Pencilbox Studios - The Official Photographers of Anaheim Youtopia
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
