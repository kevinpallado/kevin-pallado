import { HeroRobot } from './hero-robot'

export function HeroCarry({ word }: { word: string }) {
  return (
    <span className="hero-word">
      {word}
      <HeroRobot />
    </span>
  )
}
