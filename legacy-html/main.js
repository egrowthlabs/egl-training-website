/* ─── NAV SCROLL ──────────────────────────── */
const nav = document.getElementById('main-nav')
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60)
})

/* ─── HAMBURGER ───────────────────────────── */
const hamburger  = document.getElementById('hamburger')
const navMobile  = document.getElementById('nav-mobile')
hamburger.addEventListener('click', () => {
  navMobile.classList.toggle('open')
})

/* ─── CLOSE MOBILE MENU ON LINK CLICK ─────── */
navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navMobile.classList.remove('open'))
})

/* ─── SCROLL REVEAL ───────────────────────── */
const revealEls = document.querySelectorAll('.reveal')
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible')
      observer.unobserve(e.target)
    }
  })
}, { threshold: 0.12 })
revealEls.forEach(el => observer.observe(el))

/* ─── GALLERY DUPLICATE FOR INFINITE LOOP ─── */
const galleryTrack = document.querySelector('.gallery-track')
if (galleryTrack) {
  galleryTrack.innerHTML += galleryTrack.innerHTML
}

/* ─── RIBBON DUPLICATE ─────────────────────── */
const ribbonTrack = document.querySelector('.ribbon-track')
if (ribbonTrack) {
  ribbonTrack.innerHTML += ribbonTrack.innerHTML
}
