import { Container, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from './_components/Navbar';
import ReactQueryProvider from './_providers/ReactQueryProvider';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moveez",
  description: "Renting movies have never been easier with Moveez.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <Theme>
            <Navbar />
            <Container>
              {children}
            </Container>
          </Theme>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
