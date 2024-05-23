import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner_left from "./components/LOGIN/Banner_left";
import Banner_right from "./components/LOGIN/Banner_right";
import Footer from "./components/Footer";
import GoBackArrow from "./components/GoBackArrow";
import Menu from "./components/CHAT/Menu";
import Chat from "./components/CHAT/Chat";
import Info from "./components/CHAT/Info";
import Main_Screen from "./components/LOGIN/Main_Screen";

export default function Home() {
  return (
    <>
      <Navbar isLoggedIn={false} />
      <main className="  max-w-screen-lg m-auto grow -mt-12 border-sky-500 border- ">
        <Main_Screen />
      </main>
      {/* <Footer /> */}
    </>
  );
}
