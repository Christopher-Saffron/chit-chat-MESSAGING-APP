import type { Metadata } from "next";
import "./globals.css";
import Blobs from "./components/Blobs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Notification from "./components/NOTIFICATION/Notification";
// import AuthContext from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Chit Chat - Christopher Saffron",
  description:
    "Messaging app by Christopher Saffron. React, Nextjs, Prisma, Mongodb, Tailwind and Zustand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen grid grid-flow-row grid-cols place-content-between justify-normal bg-blobs blobs-background overflow-y-hidden">
        {/* <AuthContext> */}
        <Navbar />
        <Notification />
        {children}
        <Footer />
        {/* </AuthContext> */}
      </body>
    </html>
  );
}
