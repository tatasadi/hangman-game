"use client"
import React, { createContext, useContext, useState } from "react"
import gameData from "../data.json"

interface Item {
  name: string
  selected: boolean
}

interface Categories {
  [key: string]: Item[]
}

interface GameData {
  categories: Categories
}

export enum GameState {
  Idle,
  Playing,
  Paused,
  Won,
  Lost,
}

const GameContext = createContext({
  category: "",
  setCategory: (category: string) => {},
  word: "",
  setWord: (word: string) => {},
  state: GameState.Idle,
  setState: (state: GameState) => {},
  gameData: gameData as GameData,
})

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<string>("")
  const [word, setWord] = useState<string>("")
  const [state, setState] = useState<GameState>(GameState.Idle)

  const value = {
    category,
    setCategory: setCategory,
    word,
    setWord: setWord,
    state,
    setState: setState,
    gameData: gameData as GameData,
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export const useGame = () => {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider")
  }
  return context
}
