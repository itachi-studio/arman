import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const vh = window.innerHeight

    // Reveal anything currently in (or above) the viewport immediately.
    els.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < vh) el.classList.add('in')
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => {
      if (!el.classList.contains('in')) io.observe(el)
    })

    // Safety net: if IO never fires (e.g. headless preview), reveal the rest.
    const fallback = window.setTimeout(() => {
      els.forEach((el) => el.classList.add('in'))
    }, 2000)

    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])
}

export function useStatBarsAnimation() {
  useEffect(() => {
    const card = document.querySelector('.char-card')
    if (!card) return
    const cardObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            card.querySelectorAll<HTMLElement>('.cc-stat-fill').forEach((fill, i) => {
              const target = fill.style.width
              fill.style.width = '0%'
              setTimeout(() => {
                fill.style.width = target
              }, 120 + i * 90)
            })
            cardObs.unobserve(card)
          }
        })
      },
      { threshold: 0.3 }
    )
    cardObs.observe(card)
    return () => cardObs.disconnect()
  }, [])
}
