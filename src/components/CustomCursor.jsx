import { useEffect, useRef } from 'react'
import '../styles/CustomCursor.css'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const ringElRef = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0

    const handleMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dotRef.current.style.left = mx + 'px'
      dotRef.current.style.top = my + 'px'
    }

    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ringRef.current.style.left = rx + 'px'
      ringRef.current.style.top = ry + 'px'
      requestAnimationFrame(animRing)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animRing()

    const interactiveElements = document.querySelectorAll('a, button, .interactive, .svc-item, .skill-tag')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => ringElRef.current?.classList.add('expand'))
      el.addEventListener('mouseleave', () => ringElRef.current?.classList.remove('expand'))
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => ringElRef.current?.classList.add('expand'))
        el.removeEventListener('mouseleave', () => ringElRef.current?.classList.remove('expand'))
      })
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={dotRef}>
        <div className="cursor-dot"></div>
      </div>
      <div className="cursor" ref={ringRef}>
        <div className="cursor-ring" ref={ringElRef}></div>
      </div>
    </>
  )
}
