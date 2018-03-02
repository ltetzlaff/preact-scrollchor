import { IAnimation, Easing } from "./types"

export function animateScroll (id: string, animate?: IAnimation) {
  const element = id ? document.getElementById(id) : document.body;
  if (!element) console.warn(`Cannot find element: #${id}`)

  if (!element) {
    return undefined;
  }

  const {
    // default animate object
    offset = 0,
    duration = 400,
    easing = easeOutQuad
  } = animate || {}

  const start = getScrollTop();
  const to = getOffsetTop(element) + offset;
  const change = to - start;

  const animateFn = (elapsedTime = 0) => {
    const increment = 20;
    const elapsed = elapsedTime + increment;
    const position = easing(null, elapsed, start, change, duration);
    setScrollTop(position);
    elapsed < duration &&
      setTimeout(() => {
        animateFn(elapsed);
      }, increment);
  }

  animateFn();
  return id;
}

// Default easing function
// jQuery easing 'swing'
const easeOutQuad: Easing = (x, t, b, c, d) => -c * (t /= d) * (t - 2) + b

export function updateHistory (id: string) {
  window.location.hash = id;
}

function getScrollTop () {
  // like jQuery -> $('html, body').scrollTop
  return document.documentElement.scrollTop || document.body.scrollTop;
}

function setScrollTop (position: number) {
  document.documentElement.scrollTop = document.body.scrollTop = position;
}

function getOffsetTop (element: Element) {
  const { top } = element.getBoundingClientRect();
  return top + getScrollTop();
}
