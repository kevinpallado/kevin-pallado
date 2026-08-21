'use client'

import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText)

// Elements that fade/slide in once they enter the viewport. `.reveal` starts
// hidden in CSS (see globals.css) so there is no flash before GSAP takes over;
// the rest are hidden here, which runs before paint via useGSAP's layout effect.
const REVEAL_SELECTOR = '.reveal'
const ITEM_SELECTOR = '.mini-project, .skill-cloud span'

export function Motion({ children }: { children: React.ReactNode }) {
  const bar = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const firstRun = useRef(true)

  // Page-independent setup: the smoother and progress bar outlive navigations.
  useGSAP(() => {
    const progress = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => gsap.set(bar.current, { scaleX: self.progress }),
    })

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.1,
        // Touch devices keep their native scroll — smoothing it fights the OS.
        smoothTouch: 0,
        effects: true,
        normalizeScroll: true,
      })

      // In-page nav links ride the smoother instead of jumping.
      const onNavClick = (event: MouseEvent) => {
        const link = (event.target as HTMLElement | null)?.closest?.('a[href^="#"]')
        const hash = link?.getAttribute('href')
        if (!hash || hash === '#') return
        const target = document.querySelector(hash)
        if (!target) return
        event.preventDefault()
        smoother.scrollTo(target, true, 'top 80px')
      }
      document.addEventListener('click', onNavClick)

      // The smoother owns scroll position, so the browser can no longer scroll
      // a keyboard-focused element into view on its own.
      const onFocusIn = (event: FocusEvent) => {
        const node = event.target
        if (!(node instanceof HTMLElement)) return
        // Rects lag behind the real scroll position while the smoother eases,
        // so the element is located in layout coordinates instead.
        let top = 0
        for (let el: HTMLElement | null = node; el; el = el.offsetParent as HTMLElement | null) {
          top += el.offsetTop
        }
        const current = window.scrollY
        if (top >= current && top + node.offsetHeight <= current + window.innerHeight) return
        // The browser also nudges the scroll on focus, and that nudge cancels an
        // in-flight smoother tween — so wait for it before taking over.
        requestAnimationFrame(() =>
          requestAnimationFrame(() => smoother.scrollTo(node, true, 'center center')),
        )
      }
      document.addEventListener('focusin', onFocusIn)

      return () => {
        document.removeEventListener('click', onNavClick)
        document.removeEventListener('focusin', onFocusIn)
        smoother.kill()
      }
    })

    return () => {
      progress.kill()
      mm.revert()
    }
  })

  // Per-route setup. This has to re-run on every navigation: the layout (and so
  // this component) is not remounted, but the whole page DOM is replaced, and
  // elements hidden by CSS would stay hidden without a fresh ScrollTrigger.
  useGSAP(
    () => {
      const isNavigation = !firstRun.current
      firstRun.current = false

      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        const hidden = gsap.utils.toArray<HTMLElement>(`${REVEAL_SELECTOR}, ${ITEM_SELECTOR}`)
        if (hidden.length) gsap.set(hidden, { opacity: 1, y: 0 })
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const smoother = ScrollSmoother.get()
        // Next.js resets window scroll on navigation; the smoother has to be
        // told, or the new page starts mid-scroll with stale trigger positions.
        if (isNavigation) smoother?.scrollTo(0, false)

        const items = gsap.utils.toArray<HTMLElement>(ITEM_SELECTOR)
        if (items.length) gsap.set(items, { opacity: 0, y: 18 })

        // Hero intro, on load. autoSplit re-splits when fonts land or the hero
        // rewraps; only the first split plays the timeline.
        let introPlayed = false
        if (document.querySelector('.hero h1')) SplitText.create('.hero h1', {
          type: 'lines',
          // No mask here: the robot is taller than a line box and would be clipped.
          autoSplit: true,
          onSplit(self) {
            if (introPlayed) {
              gsap.set(self.lines, { opacity: 1, y: 0 })
              return
            }
            introPlayed = true
            return gsap
              .timeline({ defaults: { ease: 'power3.out' } })
              .from('.hero-meta', { opacity: 0, y: 12, duration: 0.7 })
              .from(self.lines, { opacity: 0, yPercent: 110, duration: 1.1, stagger: 0.12 }, 0.1)
              .from('.hero-robot-track', { opacity: 0, scale: 0.6, duration: 0.6 }, 0.75)
              .from('.hero-footer > *', { opacity: 0, y: 16, duration: 0.8, stagger: 0.12 }, 0.6)
          },
        })

        // Section headings: masked line reveal as each section arrives.
        if (document.querySelector('section h2')) SplitText.create('section h2', {
          type: 'lines',
          mask: 'lines',
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 110,
              duration: 0.9,
              ease: 'power3.out',
              stagger: 0.1,
              scrollTrigger: { trigger: self.elements[0], start: 'top 85%', once: true },
            })
          },
        })

        // Anything already peeking into the viewport plays right away; without
        // this, an element sitting just past the trigger line stays blank until
        // the visitor scrolls.
        const peeking = gsap.utils
          .toArray<HTMLElement>(REVEAL_SELECTOR)
          .filter((el) => el.getBoundingClientRect().top < window.innerHeight)
        if (peeking.length) {
          gsap.to(peeking, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12 })
        }

        // Batched so everything that crosses the line in the same frame staggers
        // together instead of each element animating on its own timer.
        if (document.querySelector(REVEAL_SELECTOR)) ScrollTrigger.batch(REVEAL_SELECTOR, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              stagger: 0.12,
              overwrite: true,
            }),
        })
        if (items.length) ScrollTrigger.batch(items, {
          start: 'top 92%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              stagger: 0.05,
              overwrite: true,
            }),
        })

        // Project artwork drifts against the scroll. The baseline scale keeps the
        // frame filled while the image travels inside its clipped wrapper.
        const canHover = window.matchMedia('(hover: hover)').matches
        const teardown: Array<() => void> = []

        gsap.utils.toArray<HTMLElement>('.project-image-wrap').forEach((wrap) => {
          const image = wrap.querySelector<HTMLElement>('.project-image')
          if (!image) return
          gsap.set(image, { scale: 1.08 })
          gsap.fromTo(
            image,
            { yPercent: -3.5 },
            {
              yPercent: 3.5,
              ease: 'none',
              scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: true },
            },
          )

          if (!canHover) return
          const card = wrap.closest<HTMLElement>('a') ?? wrap
          // overwrite: 'auto' only kills overlapping properties, so the yPercent
          // scrub above keeps running while scale is animated.
          const zoom = (scale: number) =>
            gsap.to(image, { scale, duration: 0.6, ease: 'power2.out', overwrite: 'auto' })
          const enter = () => zoom(1.13)
          const leave = () => zoom(1.08)
          card.addEventListener('pointerenter', enter)
          card.addEventListener('pointerleave', leave)
          teardown.push(() => {
            card.removeEventListener('pointerenter', enter)
            card.removeEventListener('pointerleave', leave)
          })
        })

        return () => teardown.forEach((fn) => fn())
      })

      // The new page's height and trigger positions are only known after this
      // layout pass; images that finish decoding later refresh again below.
      requestAnimationFrame(() => ScrollTrigger.refresh())
      const onImageLoad = () => ScrollTrigger.refresh()
      const images = Array.from(document.images).filter((image) => !image.complete)
      images.forEach((image) => image.addEventListener('load', onImageLoad, { once: true }))

      return () => {
        images.forEach((image) => image.removeEventListener('load', onImageLoad))
        mm.revert()
      }
    },
    { dependencies: [pathname], revertOnUpdate: true },
  )

  return (
    <>
      <div ref={bar} className="scroll-progress" aria-hidden="true" />
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
    </>
  )
}
