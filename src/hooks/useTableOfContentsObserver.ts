import { useContext, useEffect, useState } from 'react'
import { ArticleContext } from 'contexts/article/ArticleContext'

export default function useTableOfContentsObserver() {
  const { activateTarget } = useContext(ArticleContext)
  const [, triggerRerender] = useState<string>()

  const observerCallback: IntersectionObserverCallback = entries => {
    activateCurrentIndex(entries)
  }

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px 0px -90% 0px',
    threshold: 0.1,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const headerLinks = document.querySelectorAll('.header-links')
    headerLinks.forEach(headerLink => observer.observe(headerLink))

    return () => observer.disconnect()
  }, [])

  function activateCurrentIndex(entries: IntersectionObserverEntry[]) {
    if (entries.length > 0) {
      const currentEntry = entries[0]
      activateIndex(currentEntry)
    }
  }

  function activateIndex(entry: IntersectionObserverEntry) {
    const url = retrieveHrefFromEntry(entry)
    activateIfHrefExistsAndRerender(url)
  }

  function retrieveHrefFromEntry(entry: IntersectionObserverEntry) {
    return entry.target.getAttribute('href')
  }

  function activateIfHrefExistsAndRerender(url: string | null) {
    if (url) {
      activateTarget(url)
      triggerRerender(url)
    }
  }
}
