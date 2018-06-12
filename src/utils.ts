import { IAnimation, Easing } from "./types"
import { animationFrame } from "./animation-frame"

// Default easing function
// jQuery easing 'swing'
// tslint:disable-next-line:no-magic-numbers
const easeOutQuad: Easing = (x, t, b, c, d) => -c * (t /= d) * (t - 2) + b

function removeHash() {
  const [url] = window.location.toString().split("#")
  window.history.replaceState({}, document.title, url)
}

export function updateHistory(id?: string) {
  if (id) {
    window.location.hash = id
  } else {
    removeHash()
  }
}

function getScroll() {
  // like jQuery -> $('html, body').scrollTop
  return document.documentElement.scrollTop || document.body.scrollTop
}

function scroll(position: number) {
  document.documentElement.scrollTop = document.body.scrollTop = position
}

function getOffsetTop(element: Element) {
  return element.getBoundingClientRect().top
}

let scrollToken = -1

export function animateScroll(id: string, animate?: IAnimation) {
  const element = id ? document.getElementById(id) : document.body
  if (!element) console.warn(`Cannot find element: #${id}`)

  if (!element) {
    return undefined
  }

  const {
    // default animate object
    offset = 0,
    // tslint:disable-next-line:no-magic-numbers
    duration = 400,
    easing = easeOutQuad
  } =
    animate || {}

  const startTime = Date.now()
  scrollToken = startTime
  const s0 = getScroll()
  const change = getOffsetTop(element) + offset

  const animateFn = async () => {
    const dt = Date.now() - startTime
    const position = easing(undefined, dt, s0, change, duration)
    scroll(position)
    if (dt < duration) {
      await animationFrame()
      if (scrollToken !== startTime) return
      animateFn()
    }
  }

  animateFn()
  return id
}
