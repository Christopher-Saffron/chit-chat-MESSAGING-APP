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
      <>
        <main className="  max-w-screen-lg m-auto grow -mt-12 border-sky-500 border- ">
          <Main_Screen />
        </main>
      </>

      {/* <Navbar /> */}
      {/* <main className="  max-w-screen-lg m-auto grow -mt-12 border-sky-500 border- "> */}
      {/* //// MAIN PAGE */}
      {/* <div className="   grid grid-cols-2 gap-3 m-auto w-full  max-w-[1400px]">
          <Banner_left />
          <Banner_right />
        </div>
      </main> */}

      {/* //// LOGIN / REGISTER PAGE */}
      {/* <div className="   grid grid-cols-2 gap-3 m-auto w-full  max-w-[1400px]">
          <Banner_form />
          <Banner_right />
        </div> */}

      {/* //// PREVIEW PAGE */}
      {/* <main className="  max-w-screen-lg m-auto grow  ">
        <div className="p-12">
          <GoBackArrow style="mb-4" />
          <video className="w-full h-full" controls>
            <source src="/preview.mp4" />
            Your browser does not support the video tag...
          </video>
        </div>
      </main> */}

      {/* //// CHAT PAGE */}
      {/* <main className="  max-w-screen-lg m-auto  h-[800px] w-[1100px] flex bg-white rounded-xl shadow-xl ">
        <Menu />
        <Chat />
        <Info />
      </main> */}
      {/* <Footer /> */}
    </>
  );
}
