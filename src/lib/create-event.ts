import {StateEvent} from './state-event'

export const createEvent = <T extends keyof StateEventMap>(type: T) => {
  return (value: StateEventMap[T]) => {
    return new (class extends StateEvent<T> {
      constructor() {
        super(type, value)
      }
    })()
  }
}
