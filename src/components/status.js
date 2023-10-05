'use client'

import { useSession } from "next-auth/react"

export default function Status({children}) {

 const {status} = useSession()

  return (
    <>
     {status === 'loading' ? "loading..." : status === 'unauthenticated' ? (
      <div>You are not authenticated</div>
     ) : children}
    </>
  )
}
