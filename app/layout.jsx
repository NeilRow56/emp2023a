import "./globals.css";
import Header from "./HomeComponents/header";
import Footer from "./HomeComponents/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
