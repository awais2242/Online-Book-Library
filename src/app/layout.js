import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import StoreProvider from "./lib/storeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <StoreProvider>        
          <Header/>
        {children}
        <Footer/>
        </StoreProvider>

        </body>
    </html>
  );
}
