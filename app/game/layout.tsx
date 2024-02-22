"use client"
import React from "react"
import { GameProvider } from "../context/game-context"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <GameProvider>{children}</GameProvider>
}

export default Layout
