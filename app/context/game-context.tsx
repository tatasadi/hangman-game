"use client"
import React, { createContext, useContext, useState } from "react"
import data from "../data.json"

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
  chooseNewWord: (selectedCategory: string) => {},
  state: GameState.Idle,
  setState: (state: GameState) => {},
  gameData: data as GameData,
  resetGame: () => {},
})

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<string>("")
  const [word, setWord] = useState<string>("")
  const [state, setState] = useState<GameState>(GameState.Idle)
  const [gameData, setGameData] = useState<GameData>(data as GameData)

  function chooseNewWord(selectedCategory: string) {
    setCategory(selectedCategory)

    const words = gameData.categories[selectedCategory]
    const availableWords = words.filter((item: Item) => !item.selected)

    if (availableWords.length === 0) {
      console.warn("No more words available in this category")
      // ToDo (bonus): handle this case
      return
    }

    const randomIndex = Math.floor(Math.random() * availableWords.length)
    const newWord = availableWords[randomIndex].name

    const updatedWords = words.map((item) => {
      return item.name === newWord ? { ...item, selected: true } : item
    })

    setGameData({
      categories: {
        ...gameData.categories,
        [selectedCategory]: updatedWords,
      },
    })

    setWord(newWord)
  }

  function resetGame() {
    setCategory("")
    setWord("")
    setState(GameState.Idle)
    setGameData(data)
  }

  const value = {
    category,
    setCategory: setCategory,
    word,
    setWord: setWord,
    state,
    setState: setState,
    gameData: gameData as GameData,
    chooseNewWord: chooseNewWord,
    resetGame,
  }
  console.log(gameData)

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export const useGame = () => {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider")
  }
  return context
}
