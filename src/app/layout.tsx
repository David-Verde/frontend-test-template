import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/hooks/useCart"; // Importar el provider
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GamerShop",
  description: "The ultimate destination for gamers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text-primary`}>
        <CartProvider> 
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto p-md flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}