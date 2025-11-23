import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title
    return () => {
      document.title = prevTitle
    }
  }, [title])
}
