import Header from "@/components/header/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Inter"}} className=" overflow-y-hidden">
      <Header />
        {children}
      </body>
    </html>
  );
}
