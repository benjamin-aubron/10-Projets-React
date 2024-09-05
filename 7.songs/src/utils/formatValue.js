export default function formatValue(val){
  let currentMin = Math.trunc(val / 60)
  let currentSec = Math.trunc(val % 60)

  currentSec < 10 ? currentSec = `0${currentSec}` : currentSec

  return `${currentMin}:${currentSec}`
}
