import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kelven Souza - Portfólio",
  description: "Portfólio feito com Next e Nextra",
};

// const navbar = (
//   <Navbar
//     logo={<b>Kelven Souza</b>}
//     // você pode customizar o Navbar aqui também
//   />
// );

// const footer = <Footer>Kelven Souza © 2025</Footer>;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" dir="ltr" suppressHydrationWarning>
      {/* <Head>Você pode adicionar meta tags extras aqui</Head> */}
      <body
        className={`${poppins.variable} antialiased`}
        suppressHydrationWarning={true}
        {...({} as React.HTMLAttributes<HTMLBodyElement>)}
      >
        <Layout
          banner={false}
          navbar={false}
          pageMap={await getPageMap()}
          footer={false}
        >
          <div className="flex flex-col bg-[#1b1b1f]">
            <Header />

            {children}
          </div>
        </Layout>
      </body>
    </html>
  );
}
