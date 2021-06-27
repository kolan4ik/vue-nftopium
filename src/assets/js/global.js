// eslint-disable-next-line no-unused-vars
export function throttle(fn, wait) {
  let time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}
// eslint-disable-next-line no-unused-vars
export function anim(node, animation, delay) {
  const prefix = "animate__";
  const _delay = delay ? parseFloat(delay) : 0.15;
  const animationName = `${prefix}${animation}`;
  node.classList.add("wow", `${prefix}animated`, animationName);

  if (_delay > 0) {
    node.style.setProperty("animation-delay", `${_delay}s`);
  }
}
