import { useEffect } from 'react'
import { SITE_CONFIG } from '@/config/constants'

export function useSEO({ title, description, path = '/' }) {
  useEffect(() => {
    document.title = `${title} | ${SITE_CONFIG.name}`

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setOgMeta = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setOgMeta('og:title', `${title} | ${SITE_CONFIG.name}`)
    setOgMeta('og:description', description)
    setOgMeta('og:type', 'website')
    setOgMeta('og:url', window.location.origin + path)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', window.location.origin + path)
  }, [title, description, path])
}
