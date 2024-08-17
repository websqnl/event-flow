import {getListeners} from './listeners'
import {StateEvent} from './state-event'

export const dispatch = <T extends keyof StateEventMap>(
  stateEvent: StateEvent<T>
) => {
  for (const callback of getListeners(stateEvent.type)) {
    callback(stateEvent.value)
  }
}
