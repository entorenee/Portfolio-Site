import { useEffect, useState } from 'react'

export type Direction = 'previous' | 'next' | number
type Slides = any[]
interface Options {
  timerLength?: number
}
interface HookReturn {
  currIndex: number
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
  updateSlide: (direction: Direction) => void
}

function useSlideshow(
  slides: Slides,
  { timerLength = 5000 }: Options = {},
): HookReturn {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [currIndex, setCurrIndex] = useState(0)

  /* eslint-disable-next-line consistent-return */
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(
        () => setCurrIndex((currIndex + 1) % slides.length),
        timerLength,
      )

      return (): void => clearTimeout(timer)
    }
  }, [currIndex, isPlaying, slides.length, timerLength])

  const updateSlide = (direction: Direction): void => {
    if (typeof direction === 'number') {
      return setCurrIndex(direction)
    }

    if (direction === 'next') {
      return setCurrIndex((currIndex + 1) % slides.length)
    }

    return setCurrIndex((currIndex - 1 + slides.length) % slides.length)
  }

  return {
    currIndex,
    isPlaying,
    setIsPlaying,
    updateSlide,
  }
}

export default useSlideshow
