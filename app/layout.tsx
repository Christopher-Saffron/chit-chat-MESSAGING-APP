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
      {/* <Notification /> */}
      <body className="min-h-screen grid  grid-flow-row grid-cols justify-center place-content-center md:place-content-center lg:place-content-between lg:justify-normal    bg-blobs blobs-background overflow-x-hidden lg:overflow-hidden">
        {children}
      </body>
    </html>
  );
}
