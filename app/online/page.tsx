"use client";

import { useEffect } from "react";
import Chat from "../components/CHAT/Chat";
import Info from "../components/CHAT/Info";
import Menu from "../components/CHAT/Menu";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useChatStore } from "@/lib/chatStore";
import { useUserStore } from "@/lib/userStore";

export default function Home() {
  const { currentUser, isLoading, fetchUserInfo }: any = useUserStore();
  const { chatId }: any = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div>LOADINGGGG</div>;
  return (
    <>
      <main className="  max-w-screen-lg m-auto  h-[800px] w-[1100px] flex bg-white rounded-xl shadow-xl ">
        {currentUser && (
          <>
            <Menu />
            {chatId && <Chat />}
            {chatId && <Info />}
          </>
        )}
      </main>
    </>
  );
}
