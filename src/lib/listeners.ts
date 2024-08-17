import {Callback} from './interfaces'

const events = new Map<string, Set<Callback<any>>>()

export const addListener = <T extends keyof StateEventMap>(
  type: T,
  callback: Callback<StateEventMap[T]>
) => {
  const callbacks = getListeners<T>(type)
  events.set(type, callbacks.add(callback))
  return () => {
    callbacks.delete(callback)
    events.set(type, callbacks)
  }
}

export const getListeners = <T extends keyof StateEventMap>(type: T) => {
  return events.get(type) ?? new Set<Callback<StateEventMap[T]>>()
}
