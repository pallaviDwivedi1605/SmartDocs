'use client'
import React, { ReactNode } from 'react'
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";
  
const Provider = ({children}: {children: ReactNode}) => {
  return (
    <LiveblocksProvider authEndPoint="/api/liveblocks-auth">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
            {children}
        </ClientSideSuspense>
    </LiveblocksProvider>
  )
}

export default Provider