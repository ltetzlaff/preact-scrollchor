import { h } from "preact"

// tslint:disable-next-line:no-null-keyword
export const jsxNone = null

export interface IAnimation {
  offset?: number
  duration?: number
  easing?: Easing
}

export type Children = JSX.Element | JSX.Element[]

export type Easing = (
  x: undefined | {},
  t: number,
  b: number,
  c: number,
  d: number
) => number

export type BeforeAnimate = (event?: Event) => void

export type AfterAnimate = (event?: Event) => void

export interface IScrollchorProps {
  to: string
  animate?: IAnimation
  beforeAnimate?: BeforeAnimate
  afterAnimate?: AfterAnimate
  disableHistory?: boolean
  children?: Children
}
