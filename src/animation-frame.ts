export async function animationFrame() {
  return new Promise(resolve => window.requestAnimationFrame(resolve))
}
