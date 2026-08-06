import { nextTick, onMounted, onUnmounted } from 'vue'

export function useReveal(selector = '.reveal-section, .reveal') {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    nextTick(() => {
      const nodes = document.querySelectorAll(selector)
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12 },
      )
      nodes.forEach((node) => observer?.observe(node))

      // Ensure above-the-fold reveals (e.g. hero .reveal) become visible even if IO races
      window.setTimeout(() => {
        document.querySelectorAll(selector).forEach((el) => {
          if (el.classList.contains('visible')) return
          const top = el.getBoundingClientRect().top
          if (top < window.innerHeight * 0.92) el.classList.add('visible')
        })
      }, 100)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
