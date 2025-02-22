import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "疤脸 ЙѳPяацяа",
  description: "Bio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}