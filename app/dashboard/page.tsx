"use client";
import HomeGroupButton from "@/components/home/HomeGroupButton";
import DEX_Main from "@/components/home/dexinfo/DEX_Main";
import User_Main from "@/components/home/userinfo/User_Main";
import useAuthenticate from "@/context/mobx/useAuthenticate";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Tokens_Main from "@/components/home/tokens/Tokens_Main";

function Home() {
  const disconnectedTabs = [
    {
      name: "DEX Info",
      params: "dex-info",
    },
    {
      name: "User Info",
      params: "user-info",
    },
  ];
  const connectedTabs = [
    {
      name: "Tokens",
      params: "tokens",
    },
    {
      name: "User Info",
      params: "user-info",
    },
  ];
  const authenticate = useAuthenticate;

  const [hydration, setHydration] = useState(false);
  const [tabs, setTabs] = useState(
    authenticate.walletConnected != null ? connectedTabs : disconnectedTabs
  );
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const router = useRouter();

  useEffect(() => {
    setHydration(true);
    setTabs(
      authenticate.walletConnected != null ? connectedTabs : disconnectedTabs
    );
    if (authenticate.walletConnected != null && tab != 'user-info')
      router.push(`/dashboard?tab=tokens`);
    else if (authenticate.walletConnected == null && tab != 'user-info')
      router.push(`/dashboard?tab=dex-info`);
  }, [authenticate.walletConnected]);

  return (
    <main className="relative">
      <HomeGroupButton tabs={tabs} />
      {hydration ? (
        <>
          {tab == "dex-info" ? (
            <DEX_Main />
          ) : tab == "user-info" ? (
            <User_Main />
          ) : tab == "tokens" ? (
            <Tokens_Main />
          ) : (
            <DEX_Main />
          )}
        </>
      ) : (
        <div className="max-2xl:max-w-[1400px] mx-auto xl:zoom-80 2xl:zoom-100 flex min-h-[70vh] flex-col gap-8 items-center justify-center w-full text-center">
          <div className="w-24 relative border-dotted h-24 bg-transparent border-8 border-r-[#268aff] border-b-[#268aff] border-transparent rounded-full animate-spin "></div>
          <h1 className="animate-pulse">Connecting...</h1>
        </div>
      )}
    </main>
  );
}
export default observer(Home);
