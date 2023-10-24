import { useState } from 'react'

const defaultValues = {
  minRate: 0.5,
  maxRateValue: 10,
  rate: 1
}
export const usePlayback = () => {
  const minRateValue = defaultValues.minRate
  const [maxRateValue, setMaxRateValue] = useState(defaultValues.maxRateValue)
  const [rate, setRate] = useState(defaultValues.rate)

  const updatePlaybackRate = async (newValue: number) => {
    const [tab] = await chrome.tabs.query({ active: true })
    setRate(newValue)
    void chrome.scripting.executeScript<number[], unknown>({
      target: {
        tabId: tab?.id as number
      },
      args: [newValue],
      func: (newValue) => {
        const elementsFound = document.getElementsByTagName('video')
        Array.from(elementsFound).forEach((element) => {
          element.playbackRate = newValue
        })
      }
    })
  }

  const updateMaxRateValue = (newValue: number) => {
    setMaxRateValue(newValue)
  }

  return { rate, updatePlaybackRate, updateMaxRateValue, maxRateValue, minRateValue }
}
