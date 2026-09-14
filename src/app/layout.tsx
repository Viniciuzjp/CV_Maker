import Header from "@/components/header/header";
import "./globals.css";
import "@av-digital/components/styles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Inter"}} className="overflow-y-hidden max-md:overflow-y-auto">
      <Header />
        {children}
      </body>
    </html>
  );
}
