import "./globals.css";

export const metadata = {
  title: "Crypto Toolkit App",
  description: "A responsive encryption and decryption web application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
