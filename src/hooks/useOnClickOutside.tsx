import {
  MutableRefObject,
  useEffect,
} from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export default function useOnClickOutside<T = HTMLElement>(ref: MutableRefObject<T | null>, handler: Function) {
  useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || (ref.current as unknown as HTMLElement).contains(event.target as Node)) return
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
