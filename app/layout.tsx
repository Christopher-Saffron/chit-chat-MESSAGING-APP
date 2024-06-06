import type { Metadata } from "next";
import "./globals.css";
import Notification from "./components/NOTIFICATION/Notification";
// import AuthContext from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Chit Chat - Christopher Saffron",
  description: "Real-time messaging app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      {/* <Notification /> */}
      <body className="min-h-screen grid  grid-flow-row grid-cols justify-center place-content-center md:place-content-center lg:place-content-between lg:justify-normal    bg-blobs blobs-background overflow-x-hidden lg:overflow-hidden">
        {children}
      </body>
    </html>
  );
}
