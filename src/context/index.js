"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { status } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (
      status === "unauthenticated" &&
      pathName.includes("/" || "/products" || "/visitors")
    )
      router.push("/");
  }, [status]);

  return (
    <GlobalContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}
