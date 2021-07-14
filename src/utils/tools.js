export function throttle(func, wait) {
  
  let timeout
  console.log(timeout);
  return function() {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.call(this, arguments)
      }, wait)
    }
  }
}