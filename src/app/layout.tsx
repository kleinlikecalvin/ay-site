import { Poppins } from "@next/font/google";
import "./_layout.scss";
import "./_global.scss";
import Head from "@/app/head";
import GlobalDonate from "@/components/GlobalDonate";
import Nav from "@/components/Nav";

const poppins = Poppins({
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
      <body className={poppins.className}>
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
