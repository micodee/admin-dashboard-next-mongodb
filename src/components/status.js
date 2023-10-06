'use client'

import { useSession } from "next-auth/react"

export default function Status({children}) {

 const {status} = useSession()

  return (
    <>
     {status === 'loading' ? "loading..." : status === 'unauthenticated' ? (
      <div className="w-full text-[30px] font-bold min-h-screen flex justify-center items-center">
        You are not authenticated. Please Login
      </div>
     ) : children}
    </>
  )
}
