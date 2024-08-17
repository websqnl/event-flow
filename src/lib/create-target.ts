import {addListener} from './listeners'
import {Callback} from './interfaces'

export const createTarget = <T extends keyof StateEventMap>(type: T) => {
  return (callback: Callback<StateEventMap[T]>) => addListener(type, callback)
}
