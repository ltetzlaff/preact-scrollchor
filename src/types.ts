import { h } from "preact"

export interface IAnimation {
  offset: number
  duration: number
  easing: Easing
}

export type Children = undefined | JSX.Element | JSX.Element[]

export type Easing = (x: null | {}, t: number, b: number, c: number, d: number) => number

export type BeforeAnimate = (event?: Event) => void

export type AfterAnimate = (event?: Event) => void

export interface IScrollchorProps {
  to: string
  animate?: IAnimation
  beforeAnimate?: BeforeAnimate,
  afterAnimate?: AfterAnimate,
  disableHistory?: boolean ,
  children: Children
}
