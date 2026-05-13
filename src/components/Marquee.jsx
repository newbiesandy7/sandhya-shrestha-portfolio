import { useEffect } from 'react'
import '../styles/Marquee.css'

export default function Marquee() {
  useEffect(() => {
    const items = ['Brand Identity','Web development','Frontend Development', 'Packaging Design', 'Illustration', 'Social Media', 'Print', 'Art Direction', 'Typography', 'Photography']
    const track = document.getElementById('mtrack')
    let html = ''
    for (let i = 0; i < 4; i++) {
      items.forEach(t => {
        html += `<div class="marquee-item">${t}</div>`
      })
    }
    track.innerHTML = html
  }, [])

  return (
    <div className="marquee-bar">
      <div className="marquee-track" id="mtrack"></div>
    </div>
  )
}
