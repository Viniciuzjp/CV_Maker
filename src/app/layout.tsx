import Header from "@/components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" overflow-y-hidden">
      <Header />
        {children}
      </body>
    </html>
  );
}
